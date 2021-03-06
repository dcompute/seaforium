ALTER TABLE `threads`  ENGINE=InnoDB,  DROP INDEX `subject`;
ALTER TABLE `threads`  ADD CONSTRAINT `FK_threads_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `acquaintances`  ADD CONSTRAINT `FK_acquaintances_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `comments`  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `comments`  ADD CONSTRAINT `FK_comments_threads` FOREIGN KEY (`thread_id`) REFERENCES `threads` (`thread_id`) ON UPDATE NO ACTION ON DELETE NO ACTION;