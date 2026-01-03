import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { trpc } from "@/lib/trpc";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Users, Trophy, Star, Shield } from "lucide-react";
// Auth check will be handled by redirect

type Player = {
  id: number;
  name: string;
  team: string;
  role: "batsman" | "bowler" | "all-rounder" | "wicket-keeper";
  credits: number;
  points: number;
};

export default function TeamBuilder() {
  const [, params] = useRoute("/team-builder/:matchId");
  const matchId = params?.matchId ? parseInt(params.matchId) : null;
  
  const { data: authData, isLoading: authLoading } = trpc.auth.me.useQuery();
  const user = authData?.user || null;

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !user && matchId) {
      window.location.href = `/login?redirect=/team-builder/${matchId}`;
    }
  }, [authLoading, user, matchId]);
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [captain, setCaptain] = useState<number | null>(null);
  const [viceCaptain, setViceCaptain] = useState<number | null>(null);
  const [teamName, setTeamName] = useState("");
  const [filterRole, setFilterRole] = useState<string>("all");
  const [filterTeam, setFilterTeam] = useState<string>("all");

  const { data: match, isLoading: matchLoading } = trpc.fantasy.getMatchById.useQuery(
    { id: matchId! },
    { enabled: !!matchId }
  );

  const { data: players, isLoading: playersLoading } = trpc.fantasy.getPlayers.useQuery();

  const createTeamMutation = trpc.fantasy.createTeam.useMutation({
    onSuccess: () => {
      toast.success("Team created successfully!");
      // Reset form
      setSelectedPlayers([]);
      setCaptain(null);
      setViceCaptain(null);
      setTeamName("");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create team");
    },
  });

  // Filter players by match teams
  const matchPlayers = players?.filter(
    (p) => match && (p.team === match.team1 || p.team === match.team2)
  ) || [];

  // Apply role and team filters
  const filteredPlayers = matchPlayers.filter((p) => {
    const roleMatch = filterRole === "all" || p.role === filterRole;
    const teamMatch = filterTeam === "all" || p.team === filterTeam;
    return roleMatch && teamMatch;
  });

  const creditsUsed = selectedPlayers.reduce((sum, p) => sum + p.credits, 0);
  const creditsRemaining = 100 - creditsUsed;

  const roleCount = {
    batsman: selectedPlayers.filter((p) => p.role === "batsman").length,
    bowler: selectedPlayers.filter((p) => p.role === "bowler").length,
    "all-rounder": selectedPlayers.filter((p) => p.role === "all-rounder").length,
    "wicket-keeper": selectedPlayers.filter((p) => p.role === "wicket-keeper").length,
  };

  const isPlayerSelected = (playerId: number) =>
    selectedPlayers.some((p) => p.id === playerId);

  const canAddPlayer = (player: Player) => {
    if (selectedPlayers.length >= 11) return false;
    if (creditsUsed + player.credits > 100) return false;
    // Max 7 players from one team
    const teamCount = selectedPlayers.filter((p) => p.team === player.team).length;
    if (teamCount >= 7) return false;
    return true;
  };

  const togglePlayer = (player: Player) => {
    if (isPlayerSelected(player.id)) {
      setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
      if (captain === player.id) setCaptain(null);
      if (viceCaptain === player.id) setViceCaptain(null);
    } else {
      if (canAddPlayer(player)) {
        setSelectedPlayers([...selectedPlayers, player]);
      } else {
        toast.error("Cannot add player: Check credits, team limit, or player count");
      }
    }
  };

  const handleCreateTeam = () => {
    if (!user) {
      window.location.href = "/login";
      return;
    }

    if (!matchId) {
      toast.error("No match selected");
      return;
    }

    if (selectedPlayers.length !== 11) {
      toast.error("Please select exactly 11 players");
      return;
    }

    if (!captain || !viceCaptain) {
      toast.error("Please select captain and vice-captain");
      return;
    }

    if (captain === viceCaptain) {
      toast.error("Captain and vice-captain must be different players");
      return;
    }

    if (!teamName.trim()) {
      toast.error("Please enter a team name");
      return;
    }

    // Validate role requirements
    if (roleCount["wicket-keeper"] < 1) {
      toast.error("Select at least 1 wicket-keeper");
      return;
    }
    if (roleCount.batsman < 3) {
      toast.error("Select at least 3 batsmen");
      return;
    }
    if (roleCount.bowler < 3) {
      toast.error("Select at least 3 bowlers");
      return;
    }
    if (roleCount["all-rounder"] < 1) {
      toast.error("Select at least 1 all-rounder");
      return;
    }

    createTeamMutation.mutate({
      matchId,
      teamName: teamName.trim(),
      playerIds: selectedPlayers.map((p) => p.id),
      captainId: captain,
      viceCaptainId: viceCaptain,
      creditsUsed,
    });
  };

  if (!matchId) {
    return (
      <div className="container py-12">
        <Card>
          <CardHeader>
            <CardTitle>No Match Selected</CardTitle>
            <CardDescription>Please select a match to build your team</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => (window.location.href = "/matches")}>
              View Matches
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Show loading while checking auth or fetching data
  if (authLoading || matchLoading || playersLoading) {
    return (
      <div className="container py-12 flex justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // If not logged in, show message (will redirect via useEffect)
  if (!user) {
    return (
      <div className="container py-12">
        <Card>
          <CardHeader>
            <CardTitle>Login Required</CardTitle>
            <CardDescription>Please login to create your team</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => window.location.href = `/login?redirect=/team-builder/${matchId}`}>
              Login Now
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!match) {
    return (
      <div className="container py-12">
        <Card>
          <CardHeader>
            <CardTitle>Match Not Found</CardTitle>
            <CardDescription>The selected match could not be found</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Build Your Team</h1>
        <p className="text-muted-foreground">
          {match.team1} vs {match.team2}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Player Selection */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Select Players (11)</CardTitle>
              <CardDescription>
                Select 11 players within 100 credits. Min: 1 WK, 3 BAT, 3 BOWL, 1 AR. Max 7 from one team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Filters */}
              <div className="flex gap-4 mb-4">
                <div>
                  <Label>Role</Label>
                  <select
                    className="w-full p-2 border rounded"
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                  >
                    <option value="all">All Roles</option>
                    <option value="batsman">Batsman</option>
                    <option value="bowler">Bowler</option>
                    <option value="all-rounder">All-Rounder</option>
                    <option value="wicket-keeper">Wicket-Keeper</option>
                  </select>
                </div>
                <div>
                  <Label>Team</Label>
                  <select
                    className="w-full p-2 border rounded"
                    value={filterTeam}
                    onChange={(e) => setFilterTeam(e.target.value)}
                  >
                    <option value="all">Both Teams</option>
                    <option value={match.team1}>{match.team1}</option>
                    <option value={match.team2}>{match.team2}</option>
                  </select>
                </div>
              </div>

              {/* Player List */}
              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {filteredPlayers.map((player) => {
                  const selected = isPlayerSelected(player.id);
                  return (
                    <div
                      key={player.id}
                      className={`flex items-center justify-between p-3 border rounded cursor-pointer hover:bg-accent ${
                        selected ? "bg-primary/10 border-primary" : ""
                      }`}
                      onClick={() => togglePlayer(player)}
                    >
                      <div>
                        <p className="font-medium">{player.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {player.team} • {player.role}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant={selected ? "default" : "outline"}>
                          {player.credits} CR
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Summary */}
        <div className="space-y-4">
          {/* Credits */}
          <Card>
            <CardHeader>
              <CardTitle>Credits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{creditsRemaining} / 100</div>
              <p className="text-sm text-muted-foreground">Credits remaining</p>
            </CardContent>
          </Card>

          {/* Players Selected */}
          <Card>
            <CardHeader>
              <CardTitle>Players ({selectedPlayers.length}/11)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Wicket-Keeper</span>
                  <Badge>{roleCount["wicket-keeper"]}</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Batsman</span>
                  <Badge>{roleCount.batsman}</Badge>
                </div>
                <div className="flex justify-between">
                  <span>All-Rounder</span>
                  <Badge>{roleCount["all-rounder"]}</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Bowler</span>
                  <Badge>{roleCount.bowler}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Selected Players */}
          {selectedPlayers.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Your Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-[300px] overflow-y-auto">
                  {selectedPlayers.map((player) => (
                    <div
                      key={player.id}
                      className="flex items-center justify-between text-sm"
                    >
                      <span>{player.name}</span>
                      <div className="flex gap-2">
                        {captain === player.id && (
                          <Badge variant="default">
                            <Trophy className="h-3 w-3" />
                          </Badge>
                        )}
                        {viceCaptain === player.id && (
                          <Badge variant="secondary">
                            <Star className="h-3 w-3" />
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Captain Selection */}
          {selectedPlayers.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Choose Captain & Vice-Captain</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Captain (2x points)</Label>
                  <select
                    className="w-full p-2 border rounded"
                    value={captain || ""}
                    onChange={(e) => setCaptain(Number(e.target.value))}
                  >
                    <option value="">Select Captain</option>
                    {selectedPlayers.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label>Vice-Captain (1.5x points)</Label>
                  <select
                    className="w-full p-2 border rounded"
                    value={viceCaptain || ""}
                    onChange={(e) => setViceCaptain(Number(e.target.value))}
                  >
                    <option value="">Select Vice-Captain</option>
                    {selectedPlayers.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Team Name */}
          {selectedPlayers.length === 11 && captain && viceCaptain && (
            <Card>
              <CardHeader>
                <CardTitle>Team Name</CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="Enter team name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </CardContent>
            </Card>
          )}

          {/* Create Team Button */}
          <Button
            className="w-full"
            size="lg"
            onClick={handleCreateTeam}
            disabled={
              selectedPlayers.length !== 11 ||
              !captain ||
              !viceCaptain ||
              !teamName.trim() ||
              createTeamMutation.isPending
            }
          >
            {createTeamMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Team...
              </>
            ) : (
              "Create Team"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
