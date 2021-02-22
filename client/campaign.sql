-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2021 at 06:36 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ad_node_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `campaign`
--

CREATE TABLE `campaign` (
  `campaign_id` int(11) NOT NULL,
  `media_objective` varchar(225) DEFAULT NULL,
  `platform` varchar(225) DEFAULT NULL,
  `handle` varchar(225) DEFAULT NULL,
  `url` varchar(225) DEFAULT NULL,
  `brand_name` varchar(225) DEFAULT NULL,
  `phone_number` varchar(225) DEFAULT NULL,
  `store_name` varchar(225) DEFAULT NULL,
  `collect_lead` varchar(225) DEFAULT NULL,
  `ios_link` varchar(225) DEFAULT NULL,
  `android_link` varchar(225) DEFAULT NULL,
  `gender` varchar(225) DEFAULT NULL,
  `language` varchar(225) DEFAULT NULL,
  `age` varchar(225) DEFAULT NULL,
  `country` varchar(225) DEFAULT NULL,
  `city` varchar(225) DEFAULT NULL,
  `interest` varchar(225) DEFAULT NULL,
  `channel` varchar(225) DEFAULT NULL,
  `start_date` varchar(225) DEFAULT NULL,
  `end_date` varchar(225) DEFAULT NULL,
  `total_budget` varchar(35) DEFAULT NULL,
  `fb_page_id` varchar(200) DEFAULT NULL,
  `instagram_page_id` varchar(200) DEFAULT NULL,
  `fb_message` text,
  `fb_heading1` text,
  `fb_heading2` text,
  `fb_image` varchar(225) DEFAULT NULL,
  `fb_link` varchar(225) DEFAULT NULL,
  `insta_message` text,
  `insta_link` text,
  `insta_image` varchar(225) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `created_on` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `campaign`
--
ALTER TABLE `campaign`
  ADD PRIMARY KEY (`campaign_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `campaign`
--
ALTER TABLE `campaign`
  MODIFY `campaign_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
