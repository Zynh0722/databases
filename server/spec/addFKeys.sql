ALTER TABLE `messages` ADD FOREIGN KEY (room) REFERENCES `rooms` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (github_handle) REFERENCES `github_handles` (`id`);