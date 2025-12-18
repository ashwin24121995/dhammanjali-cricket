CREATE TABLE `api_cache` (
	`id` int AUTO_INCREMENT NOT NULL,
	`endpoint` varchar(255) NOT NULL,
	`lastFetched` timestamp NOT NULL,
	`hitsToday` int NOT NULL DEFAULT 0,
	`hitsLimit` int NOT NULL DEFAULT 100,
	`status` varchar(50) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `api_cache_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `matches` ADD `externalId` varchar(255);--> statement-breakpoint
ALTER TABLE `matches` ADD `score` text;--> statement-breakpoint
ALTER TABLE `matches` ADD `lastUpdated` timestamp;--> statement-breakpoint
ALTER TABLE `players` ADD `externalId` varchar(255);--> statement-breakpoint
ALTER TABLE `players` ADD `lastUpdated` timestamp;--> statement-breakpoint
ALTER TABLE `matches` ADD CONSTRAINT `matches_externalId_unique` UNIQUE(`externalId`);--> statement-breakpoint
ALTER TABLE `players` ADD CONSTRAINT `players_externalId_unique` UNIQUE(`externalId`);