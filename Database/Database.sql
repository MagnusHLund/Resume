CREATE DATABASE IF NOT EXISTS `resumewebsite`;
USE `resumewebsite`;

CREATE TABLE IF NOT EXISTS `Visitors` (
  `visitor_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ip` VARCHAR(45) NOT NULL,
  `first_visit` DATETIME NOT NULL,
  `last_visit` DATETIME NOT NULL,

  PRIMARY KEY (`visitor_id`),
  UNIQUE KEY `ip` (`ip`),
  KEY `first_visit` (`first_visit`),
  KEY `last_visit` (`last_visit`)
);

CREATE TABLE IF NOT EXISTS `Mails` (
    `mail_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `visitor_id` INT(10) UNSIGNED NOT NULL,
    `from` VARCHAR(30) NOT NULL,
    `email` VARCHAR(320) NOT NULL,
    `message` TEXT(1024) NOT NULL,
    `sent_at` DATETIME NOT NULL,

    PRIMARY KEY (`mail_id`),
    CONSTRAINT `mails_fk_1`FOREIGN KEY (`visitor_id`) REFERENCES `Visitors` (`visitor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
    KEY `visitor_id` (`visitor_id`),
    KEY `sent_at` (`sent_at`)
);

DELIMITER //
CREATE PROCEDURE InsertOrUpdateVisitor(IN ip_in VARCHAR(45))
BEGIN
    IF EXISTS (SELECT * FROM Visitors WHERE ip = ip_in) THEN
        UPDATE Visitors SET last_visit = NOW() WHERE ip = ip_in;
    ELSE
        INSERT INTO Visitors(ip, first_visit, last_visit) VALUES(ip_in, NOW(), NOW());
    END IF;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE InsertMail(IN ip_in VARCHAR(45), IN from_in VARCHAR(30), IN email_in VARCHAR(320), IN message_in TEXT)
BEGIN
    DECLARE visitor_id_in INT(10);
    SELECT visitor_id INTO visitor_id_in FROM Visitors WHERE ip = ip_in;
    INSERT INTO Mails(visitor_id, `from`, email, message, sent_at) VALUES(visitor_id_in, from_in, email_in, message_in, NOW());
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GetTotalVisitors()
BEGIN
    SELECT COUNT(*) AS TotalVisitors FROM Visitors;
END //
DELIMITER ;
