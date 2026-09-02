-- =====================================================================
-- Mahesh Mokalkar Personal Brand Website — Database Export Schema
-- Compatible with MySQL 5.7+ / 8.0+ & MariaDB (Hostinger phpMyAdmin)
-- Hostinger Shared Hosting Database Package
-- =====================================================================

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `contact_messages`;
DROP TABLE IF EXISTS `blog_posts`;
DROP TABLE IF EXISTS `gallery_items`;
DROP TABLE IF EXISTS `testimonials`;
DROP TABLE IF EXISTS `timeline_events`;
DROP TABLE IF EXISTS `initiatives`;
DROP TABLE IF EXISTS `profile_info`;
SET FOREIGN_KEY_CHECKS = 1;

-- ---------------------------------------------------------------------
-- Table: profile_info
-- ---------------------------------------------------------------------
CREATE TABLE `profile_info` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(100) NOT NULL,
  `primary_title` VARCHAR(150) NOT NULL,
  `secondary_title` VARCHAR(150) NOT NULL,
  `tagline` TEXT NOT NULL,
  `bio` TEXT NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `location` VARCHAR(150) NOT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `profile_info` (`full_name`, `primary_title`, `secondary_title`, `tagline`, `bio`, `email`, `phone`, `location`) 
VALUES (
  'Mahesh Mokalkar',
  'Assistant Engineer, Grade-II (PWD Maharashtra)',
  'Past District Governor (RID 3030)',
  'Dynamic yet dedicated; Energetic yet staid; Suave yet simple — that is Mahesh!',
  'Mahesh Mokalkar is a multi-hyphenate public figure based in Wardha, Maharashtra. Serving as Assistant Engineer (Grade-II) in PWD Govt of Maharashtra, he manages multi-crore infrastructure projects alongside a 27+ year journey in Rotary International.',
  'maheshdg1617@gmail.com',
  '+91 96898 98968',
  'Wardha, Maharashtra, India'
);

-- ---------------------------------------------------------------------
-- Table: initiatives
-- ---------------------------------------------------------------------
CREATE TABLE `initiatives` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(50) NOT NULL UNIQUE,
  `title` VARCHAR(255) NOT NULL,
  `subtitle` VARCHAR(255) NOT NULL,
  `category` ENUM('Rotary', 'Community', 'Education', 'Housing') NOT NULL,
  `year_label` VARCHAR(50) NOT NULL,
  `impact_summary` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `image_url` VARCHAR(500) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `initiatives` (`slug`, `title`, `subtitle`, `category`, `year_label`, `impact_summary`, `description`, `image_url`) VALUES
('surgeries', '105 Pediatric Heart Surgeries', 'Giving 105 Children a New Lease on Life', 'Rotary', '2016 - 2017', '105 Surgeries (~₹1 Cr)', 'Mobilized ~₹1 Crore during District Governor tenure to fund 105 pediatric open-heart surgeries across District 3030.', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'),
('sapne-sach-hue', 'Sapne Sach Hue (Dreams Come True)', 'Memorable Experiences for Underprivileged Children', 'Community', 'Ongoing', '1,000+ Children', 'Fulfills dreams for underprivileged children and orphans through first-time flight journeys, science center trips, and dignity kits.', 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c'),
('night-school', 'Night School for Rag-Pickers Children', 'Education Beyond Daytime Barriers', 'Education', '2012 - Present', 'Govt. Funded', 'Established night learning centers for working children, recognized and funded by the Govt. of Maharashtra.', 'https://images.unsplash.com/photo-1509062522246-3755977927d7'),
('shelter-society', 'Shelter for the Shelterless Co-op', 'Collateral-Free Housing Credit Society', 'Housing', '2008 - Present', '550 Members', 'Founder-President of a 550-member housing credit co-operative enabling homeless families to build concrete homes without bank collateral.', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa');

-- ---------------------------------------------------------------------
-- Table: timeline_events
-- ---------------------------------------------------------------------
CREATE TABLE `timeline_events` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `year_label` VARCHAR(50) NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `description` TEXT NOT NULL,
  `is_highlight` TINYINT(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `timeline_events` (`year_label`, `title`, `category`, `description`, `is_highlight`) VALUES
('1997', 'Joined Rotary International', 'Rotary', 'Inducted into Rotary International, beginning over 27 years of service.', 0),
('2002 - 2005', 'Founded 3 Rotary Clubs', 'Rotary', 'Chartered Rotary Clubs of Hinganghat, Arvi, and Wani in RID 3030.', 1),
('2008', 'Founded Housing Co-op', 'Housing', 'Established 550-member Shelter for Shelterless Credit Housing Society.', 1),
('2012', 'Night School Established', 'Community', 'Night school for rag-pickers recognized and funded by Maharashtra State Govt.', 1),
('2016 - 2017', 'District Governor RID 3030', 'Rotary', 'Led District 3030; raised ₹1 Cr for 105 pediatric heart surgeries.', 1),
('2020', 'Authored GENIUS Handbook', 'Publication', 'Published authoritative engineering handbook for departmental engineers.', 0);

-- ---------------------------------------------------------------------
-- Table: testimonials
-- ---------------------------------------------------------------------
CREATE TABLE `testimonials` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `person_name` VARCHAR(100) NOT NULL,
  `person_role` VARCHAR(100) NOT NULL,
  `organization` VARCHAR(150) NOT NULL,
  `quote` TEXT NOT NULL,
  `avatar_url` VARCHAR(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `testimonials` (`person_name`, `person_role`, `organization`, `quote`, `avatar_url`) VALUES
('Rtn. Kishor Kedia', 'Past District Governor', 'Rotary District 3030', 'Mahesh Mokalkar is a visionary leader who leads from the front. His dedication during his tenure as District Governor set a benchmark for public service.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'),
('Rtn. Madhu Rughwani', 'Senior Rotarian', 'Rotary Club of Nagpur', 'Dynamic, energetic, yet deeply humble. Whether executing major infrastructure projects or driving disaster response, Mahesh passion is infectious.', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'),
('Rtn. Shabbir Shakir', 'Past District Governor', 'Rotary District 3030', 'The Shelter for the Shelterless housing co-operative and the Night School reflect Mahesh genuine empathy for the underprivileged.', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e');

-- ---------------------------------------------------------------------
-- Table: contact_messages (Hostinger live form submission receiver)
-- ---------------------------------------------------------------------
CREATE TABLE `contact_messages` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `subject` VARCHAR(200) NOT NULL,
  `message` TEXT NOT NULL,
  `ip_address` VARCHAR(45) DEFAULT NULL,
  `user_agent` VARCHAR(255) DEFAULT NULL,
  `status` ENUM('unread', 'read', 'archived') DEFAULT 'unread',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------
-- Table: blog_posts (Clean table ready for Hostinger CMS migration)
-- ---------------------------------------------------------------------
CREATE TABLE `blog_posts` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(150) NOT NULL UNIQUE,
  `title` VARCHAR(255) NOT NULL,
  `excerpt` TEXT NOT NULL,
  `content` LONGTEXT NOT NULL,
  `author` VARCHAR(100) DEFAULT 'Mahesh Mokalkar',
  `cover_image` VARCHAR(500) DEFAULT NULL,
  `published_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `status` ENUM('draft', 'published') DEFAULT 'published'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `blog_posts` (`slug`, `title`, `excerpt`, `content`, `author`, `published_at`) VALUES
('welcome-to-redesigned-portal', 'Welcome to the Redesigned Portal of Mahesh Mokalkar', 'Highlighting over two decades of public engineering service, Rotary leadership, and community initiatives.', '<p>Welcome to our official redesigned personal brand portal. Here you will find documented updates on public infrastructure developments, Rotary District 3030 initiatives, and social welfare projects.</p>', 'Mahesh Mokalkar', NOW());

-- =====================================================================
-- End of Database Export Schema
-- =====================================================================
