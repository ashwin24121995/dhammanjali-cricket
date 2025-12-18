CREATE TABLE `matches` (
	`id` int AUTO_INCREMENT NOT NULL,
	`team1` varchar(100) NOT NULL,
	`team2` varchar(100) NOT NULL,
	`venue` varchar(255) NOT NULL,
	`matchDate` timestamp NOT NULL,
	`matchTime` varchar(50) NOT NULL,
	`matchType` varchar(50) NOT NULL,
	`status` enum('upcoming','live','completed') NOT NULL DEFAULT 'upcoming',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `matches_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `players` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`team` varchar(100) NOT NULL,
	`role` enum('batsman','bowler','all-rounder','wicket-keeper') NOT NULL,
	`credits` int NOT NULL,
	`points` int NOT NULL DEFAULT 0,
	`matchesPlayed` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `players_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `team_players` (
	`id` int AUTO_INCREMENT NOT NULL,
	`teamId` int NOT NULL,
	`playerId` int NOT NULL,
	`isCaptain` int NOT NULL DEFAULT 0,
	`isViceCaptain` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `team_players_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_stats` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`totalPoints` int NOT NULL DEFAULT 0,
	`teamsCreated` int NOT NULL DEFAULT 0,
	`contestsWon` int NOT NULL DEFAULT 0,
	`contestsJoined` int NOT NULL DEFAULT 0,
	`bestRank` int,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `user_stats_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_stats_userId_unique` UNIQUE(`userId`)
);
--> statement-breakpoint
CREATE TABLE `user_teams` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`matchId` int NOT NULL,
	`teamName` varchar(255) NOT NULL,
	`totalCredits` int NOT NULL DEFAULT 100,
	`creditsUsed` int NOT NULL,
	`points` int NOT NULL DEFAULT 0,
	`rank` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `user_teams_id` PRIMARY KEY(`id`)
);
