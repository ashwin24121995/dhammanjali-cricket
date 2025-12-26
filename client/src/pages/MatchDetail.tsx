import { useParams, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, Users, Clock, MapPin, Calendar, 
  CheckCircle, XCircle, Star, TrendingUp,
  AlertCircle, ArrowLeft, Loader2
} from "lucide-react";


type PlayerRole = 'batsman' | 'bowler' | 'all-rounder' | 'wicket-keeper';

interface Player {
  id: string;
  name: string;
  role: PlayerRole;
  credits: number;
  team: string;
  points?: number;
}

interface SelectedPlayer extends Player {
  isCaptain?: boolean;
  isViceCaptain?: boolean;
}

export default function MatchDetail() {
  const { id } = useParams();
  const [, navigate] = useLocation();
  const { isAuthenticated } = useAuth();


  // State for team creation
  const [selectedPlayers, setSelectedPlayers] = useState<SelectedPlayer[]>([]);
  const [captain, setCaptain] = useState<string | null>(null);
  const [viceCaptain, setViceCaptain] = useState<string | null>(null);
  const [roleFilter, setRoleFilter] = useState<PlayerRole | 'all'>('all');
  const [activeTab, setActiveTab] = useState<'overview' | 'create-team' | 'commentary'>('overview');

  // Fetch match data
  const { data: matchData, isLoading: matchLoading } = trpc.cricket.getCurrentMatches.useQuery(
    { status: 'all', limit: 100 },
    { refetchInterval: 30000 }
  );

  const match = matchData?.matches?.find(m => m.id === parseInt(id || '0', 10));

  // Fetch squad data
  const { data: squadData, isLoading: squadLoading } = trpc.cricket.getMatchSquad.useQuery(
    { externalId: match?.externalId || '' },
    { enabled: !!match?.externalId, refetchInterval: 60000 }
  );

  // Fetch commentary
  const { data: commentaryData, isLoading: commentaryLoading } = trpc.cricket.getMatchScorecard.useQuery(
    { externalId: match?.externalId || '' },
    { enabled: !!match?.externalId, refetchInterval: 15000 }
  );
  const squad = squadData?.squad || [];

  // Calculate budget
  const usedCredits = selectedPlayers.reduce((sum, p) => sum + p.credits, 0);
  const remainingCredits = 100 - usedCredits;

  // Role counts
  const roleCounts = {
    batsman: selectedPlayers.filter(p => p.role === 'batsman').length,
    bowler: selectedPlayers.filter(p => p.role === 'bowler').length,
    'all-rounder': selectedPlayers.filter(p => p.role === 'all-rounder').length,
    'wicket-keeper': selectedPlayers.filter(p => p.role === 'wicket-keeper').length,
  };

  const handlePlayerSelect = (player: Player) => {
    if (!isAuthenticated) {
      alert("Please login to create a team");
      return;
    }

    if (selectedPlayers.find(p => p.id === player.id)) {
      // Remove player
      setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
      if (captain === player.id) setCaptain(null);
      if (viceCaptain === player.id) setViceCaptain(null);
    } else {
      // Add player
      if (selectedPlayers.length >= 11) {
        alert("You can only select 11 players");
        return;
      }

      if (usedCredits + player.credits > 100) {
        alert(`Budget exceeded! You only have ${remainingCredits} credits remaining`);
        return;
      }

      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handleSetCaptain = (playerId: string) => {
    if (viceCaptain === playerId) {
      setViceCaptain(null);
    }
    setCaptain(playerId);
  };

  const handleSetViceCaptain = (playerId: string) => {
    if (captain === playerId) {
      setCaptain(null);
    }
    setViceCaptain(playerId);
  };

  const handleSubmitTeam = () => {
    if (selectedPlayers.length !== 11) {
      alert("Please select exactly 11 players");
      return;
    }

    if (!captain) {
      alert("Please select a captain (2x points)");
      return;
    }

    if (!viceCaptain) {
      alert("Please select a vice captain (1.5x points)");
      return;
    }

    // TODO: Submit team to backend
    alert("Team created successfully! Your fantasy team has been submitted.");
  };

  const filteredSquad = roleFilter === 'all' 
    ? squad 
    : squad.filter((p: Player) => p.role === roleFilter);

  if (matchLoading || !match) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-6">
        <div className="container">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Matches
          </Button>

          <div className="flex items-center justify-between">
            <div>
              <Badge className={`${match.status === 'live' ? 'bg-red-600' : 'bg-blue-600'} text-white mb-2`}>
                {match.status === 'live' ? '🔴 LIVE' : match.status.toUpperCase()}
              </Badge>
              <h1 className="text-3xl font-black mb-2">
                {match.team1} vs {match.team2}
              </h1>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {match.venue}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(match.matchDate).toLocaleDateString('en-IN')}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {match.matchTime}
                </span>
              </div>
            </div>

            {match.status === 'live' && match.score && (
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-right mb-2">
                  <div className="font-bold">{match.team1}</div>
                  <div className="text-2xl font-black">
                    {match.score[0]?.r}/{match.score[0]?.w} ({match.score[0]?.o})
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold">{match.team2}</div>
                  <div className="text-2xl font-black">
                    {match.score[1]?.r}/{match.score[1]?.w} ({match.score[1]?.o})
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">Match Overview</TabsTrigger>
            <TabsTrigger value="create-team">Create Team</TabsTrigger>
            <TabsTrigger value="commentary">Live Commentary</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Team 1 Squad */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    {match.team1} Squad
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {squadLoading ? (
                    <div className="text-center py-8">
                      <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600" />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {squad.filter((p: Player) => p.team === match.team1).map((player: Player) => (
                        <div key={player.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <div>
                            <div className="font-semibold">{player.name}</div>
                            <div className="text-sm text-gray-600">{player.role}</div>
                          </div>
                          <Badge variant="outline">{player.credits} CR</Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Team 2 Squad */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    {match.team2} Squad
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {squadLoading ? (
                    <div className="text-center py-8">
                      <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600" />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {squad.filter((p: Player) => p.team === match.team2).map((player: Player) => (
                        <div key={player.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <div>
                            <div className="font-semibold">{player.name}</div>
                            <div className="text-sm text-gray-600">{player.role}</div>
                          </div>
                          <Badge variant="outline">{player.credits} CR</Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Create Team Tab */}
          <TabsContent value="create-team">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Player Selection */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Players</CardTitle>
                    <div className="flex gap-2 mt-4">
                      <Button
                        size="sm"
                        variant={roleFilter === 'all' ? 'default' : 'outline'}
                        onClick={() => setRoleFilter('all')}
                      >
                        All
                      </Button>
                      <Button
                        size="sm"
                        variant={roleFilter === 'batsman' ? 'default' : 'outline'}
                        onClick={() => setRoleFilter('batsman')}
                      >
                        Batsmen ({roleCounts.batsman})
                      </Button>
                      <Button
                        size="sm"
                        variant={roleFilter === 'bowler' ? 'default' : 'outline'}
                        onClick={() => setRoleFilter('bowler')}
                      >
                        Bowlers ({roleCounts.bowler})
                      </Button>
                      <Button
                        size="sm"
                        variant={roleFilter === 'all-rounder' ? 'default' : 'outline'}
                        onClick={() => setRoleFilter('all-rounder')}
                      >
                        All-Rounders ({roleCounts['all-rounder']})
                      </Button>
                      <Button
                        size="sm"
                        variant={roleFilter === 'wicket-keeper' ? 'default' : 'outline'}
                        onClick={() => setRoleFilter('wicket-keeper')}
                      >
                        Keepers ({roleCounts['wicket-keeper']})
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {squadLoading ? (
                      <div className="text-center py-8">
                        <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600" />
                      </div>
                    ) : (
                      <div className="space-y-2 max-h-[600px] overflow-y-auto">
                        {filteredSquad.map((player: Player) => {
                          const isSelected = selectedPlayers.find(p => p.id === player.id);
                          const isCaptain = captain === player.id;
                          const isViceCaptain = viceCaptain === player.id;

                          return (
                            <div
                              key={player.id}
                              className={`p-4 rounded border-2 transition-all ${
                                isSelected
                                  ? 'border-blue-600 bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">{player.name}</span>
                                    {isCaptain && (
                                      <Badge className="bg-yellow-500">C</Badge>
                                    )}
                                    {isViceCaptain && (
                                      <Badge className="bg-orange-500">VC</Badge>
                                    )}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    {player.role} • {player.team}
                                  </div>
                                </div>

                                <div className="flex items-center gap-2">
                                  <Badge variant="outline">{player.credits} CR</Badge>

                                  {isSelected && (
                                    <>
                                      <Button
                                        size="sm"
                                        variant={isCaptain ? 'default' : 'outline'}
                                        onClick={() => handleSetCaptain(player.id)}
                                      >
                                        <Star className="w-4 h-4" />
                                      </Button>
                                      <Button
                                        size="sm"
                                        variant={isViceCaptain ? 'default' : 'outline'}
                                        onClick={() => handleSetViceCaptain(player.id)}
                                      >
                                        <TrendingUp className="w-4 h-4" />
                                      </Button>
                                    </>
                                  )}

                                  <Button
                                    size="sm"
                                    variant={isSelected ? 'destructive' : 'default'}
                                    onClick={() => handlePlayerSelect(player)}
                                  >
                                    {isSelected ? (
                                      <XCircle className="w-4 h-4" />
                                    ) : (
                                      <CheckCircle className="w-4 h-4" />
                                    )}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Team Summary */}
              <div>
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle>Your Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Budget */}
                      <div className="p-4 bg-blue-50 rounded">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Credits Used</span>
                          <span className="text-2xl font-black">{usedCredits}/100</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              usedCredits > 100 ? 'bg-red-600' : 'bg-blue-600'
                            }`}
                            style={{ width: `${Math.min(usedCredits, 100)}%` }}
                          />
                        </div>
                      </div>

                      {/* Players Count */}
                      <div className="p-4 bg-gray-50 rounded">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Players Selected</span>
                          <span className="text-2xl font-black">{selectedPlayers.length}/11</span>
                        </div>
                      </div>

                      {/* Role Distribution */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Batsmen</span>
                          <span className="font-semibold">{roleCounts.batsman}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Bowlers</span>
                          <span className="font-semibold">{roleCounts.bowler}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>All-Rounders</span>
                          <span className="font-semibold">{roleCounts['all-rounder']}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Wicket-Keepers</span>
                          <span className="font-semibold">{roleCounts['wicket-keeper']}</span>
                        </div>
                      </div>

                      {/* Selected Players List */}
                      <div className="space-y-2">
                        <div className="font-semibold text-sm">Selected Players:</div>
                        {selectedPlayers.length === 0 ? (
                          <div className="text-sm text-gray-500 text-center py-4">
                            No players selected
                          </div>
                        ) : (
                          <div className="space-y-1 max-h-[200px] overflow-y-auto">
                            {selectedPlayers.map(player => (
                              <div key={player.id} className="text-sm flex items-center justify-between p-2 bg-white rounded">
                                <span>
                                  {player.name}
                                  {captain === player.id && ' (C)'}
                                  {viceCaptain === player.id && ' (VC)'}
                                </span>
                                <span className="text-gray-600">{player.credits}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Submit Button */}
                      <Button
                        className="w-full"
                        size="lg"
                        onClick={handleSubmitTeam}
                        disabled={selectedPlayers.length !== 11 || !captain || !viceCaptain}
                      >
                        <Trophy className="w-4 h-4 mr-2" />
                        Submit Team
                      </Button>

                      {selectedPlayers.length !== 11 && (
                        <div className="text-sm text-amber-600 flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Select exactly 11 players to submit your team</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Commentary Tab */}
          <TabsContent value="commentary">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Live Commentary
                </CardTitle>
              </CardHeader>
              <CardContent>
                {commentaryLoading ? (
                  <div className="text-center py-8">
                    <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600" />
                  </div>
                ) : match.status === 'upcoming' ? (
                  <div className="text-center py-12 text-gray-500">
                    <Clock className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-semibold">Match hasn't started yet</p>
                    <p className="text-sm">Commentary will be available once the match begins</p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {commentaryData?.scorecard?.commentary && commentaryData.scorecard.commentary.length > 0 ? (
                      commentaryData.scorecard.commentary.map((comment: any, index: number) => (
                        <div key={index} className="p-4 bg-gray-50 rounded border-l-4 border-blue-600">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{comment.over}</Badge>
                            <span className="text-sm text-gray-600">{comment.time}</span>
                          </div>
                          <p className="text-sm">{comment.text}</p>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                        <p className="text-lg font-semibold">No commentary available</p>
                        <p className="text-sm">Check back during the live match</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
