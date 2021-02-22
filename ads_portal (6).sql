-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2021 at 01:31 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ads_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `campaign`
--

CREATE TABLE `campaign` (
  `campaign_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
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
  `behaviour` text DEFAULT NULL,
  `channel` varchar(225) DEFAULT NULL,
  `start_date` varchar(225) DEFAULT NULL,
  `end_date` varchar(225) DEFAULT NULL,
  `total_budget` varchar(35) DEFAULT NULL,
  `fb_page_id` varchar(200) DEFAULT NULL,
  `fb_page_name` varchar(225) DEFAULT NULL,
  `fb_profile_image` text DEFAULT NULL,
  `insta_page_name` varchar(225) DEFAULT NULL,
  `instagram_page_id` varchar(200) DEFAULT NULL,
  `fb_message` text DEFAULT NULL,
  `fb_heading1` text DEFAULT NULL,
  `fb_heading2` text DEFAULT NULL,
  `fb_image` varchar(225) DEFAULT NULL,
  `fb_link` varchar(225) DEFAULT NULL,
  `insta_message` text DEFAULT NULL,
  `insta_link` text DEFAULT NULL,
  `insta_image` varchar(225) DEFAULT NULL,
  `google_heading1` varchar(225) DEFAULT NULL,
  `google_heading2` varchar(225) DEFAULT NULL,
  `google_heading3` varchar(225) DEFAULT NULL,
  `google_url` text DEFAULT NULL,
  `google_message1` varchar(225) DEFAULT NULL,
  `google_message2` varchar(225) DEFAULT NULL,
  `youtube_link` text DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `created_on` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `campaign`
--

INSERT INTO `campaign` (`campaign_id`, `user_id`, `media_objective`, `platform`, `handle`, `url`, `brand_name`, `phone_number`, `store_name`, `collect_lead`, `ios_link`, `android_link`, `gender`, `language`, `age`, `country`, `city`, `behaviour`, `channel`, `start_date`, `end_date`, `total_budget`, `fb_page_id`, `fb_page_name`, `fb_profile_image`, `insta_page_name`, `instagram_page_id`, `fb_message`, `fb_heading1`, `fb_heading2`, `fb_image`, `fb_link`, `insta_message`, `insta_link`, `insta_image`, `google_heading1`, `google_heading2`, `google_heading3`, `google_url`, `google_message1`, `google_message2`, `youtube_link`, `amount`, `status`, `created_on`) VALUES
(68, 9, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '30 - 38', 'AF', 'Andkhoy', 'uoouop', 'facebook,instagram', '30-01-2021', '30-01-2021', '100000', '107069551332679', NULL, NULL, NULL, '107069551332679', 'ghjgjjgj', 'jgjgj', 'jgjjgjgjg', '', 'http://test.com', 'asdadada', 'http://test.com', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 100000, 1, 1611990079145),
(83, 6, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '31 - 40', 'AF', 'Andkhoy', 'test', 'facebook,instagram', '02-02-2021', '05-02-2021', '10', 'Glasier Php', NULL, 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=107069551332679&height=50&width=50&ext=1614857868&hash=AeQcQCVbY6wN7QcZZbE', '', '', 'wdfsafsaf', 'fssf', 'fsfsff fsfsfsfsf', '1612265928711-blury_search_background.jpg', 'http://localhost:3000/', 'fdfsfs fsfsfsf', 'http://localhost:3000/', '1612265928712-png-clipart-social-media-marketing-youtube-digital-marketing-business-video-youtube-icon-you-tube-logo-angle-content-marketing.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 10, 1, 1612265928694),
(84, 9, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '31 - 40', 'AF', 'Andkhoy', 'test', 'facebook,google,instagram,youtube', '03-02-2021', '13-02-2021', '50', 'Glasier Php', NULL, 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=107069551332679&height=50&width=50&ext=1614919710&hash=AeTgp24d7fPqNZWjFNs', '', '', 'fsfsfsf', 'fafafafa', 'fasfafafaf', '1612327913939-dessin-uiafrica_786.png', 'http://localhost:3000/', 'fasfaff wafafaf', 'http://localhost:3000/adfafaff', '1612327913944-logo_786.jpg', 'afffafa fsffas fff1', 'fafaffffsff2', 'fafafflklliojk3', 'http://localhost:3000/aff4545faff', 'afdff fafaf fafafaff 1', 'khkgkgftwtetet 2', 'http://localhost:3000/dadd6313', 50, 1, 1612327913906),
(85, 14, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '30 - 40', 'AF', 'Andkhoy', 'nmgjjgj', 'facebook', '03-02-2021', '06-02-2021', '100', 'Glasier Php', NULL, 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=107069551332679&height=50&width=50&ext=1614942863&hash=AeTuz9ZsMo5tGR3Snj8', NULL, NULL, 'ddadad', 'dadd', 'dadadada', '1612351350261-logo_786.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 100, 0, 1612351350240),
(86, 14, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '30 - 40', 'AF', 'Asadabad', 'ddd', 'youtube', '03-02-2021', '04-02-2021', '100', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'http://localhost:3000/ViewCampaign?id=85', 100, 0, 1612352139708),
(87, 14, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '30 - 40', 'AF', 'Andkhoy', NULL, 'facebook', '03-02-2021', '04-02-2021', '100', 'Glasier Php', NULL, 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=107069551332679&height=50&width=50&ext=1614944190&hash=AeSEe6H9bH1DxJbL0YY', NULL, NULL, 'adadadad', 'dadad', 'adadadad', '1612352215457-dessin-uiafrica_786.png', 'http://localhost:3000/Campaigns', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 100, 0, 1612352215440),
(88, 6, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '30 - 40', 'AF', 'Andkhoy', NULL, 'google,instagram,youtube', '03-02-2021', '06-02-2021', '100', NULL, NULL, NULL, '', '', NULL, NULL, NULL, NULL, NULL, '', '', NULL, 'ddad', 'dadad', 'dadad', 'http://localhost:3000/', 'faff', 'affff', '', 100, 0, 1612355901920),
(89, 6, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '33 - 40', 'AF', 'Andkhoy', NULL, 'facebook,google,instagram,youtube', '03-02-2021', '05-02-2021', '100', '107069551332679', 'Glasier Php', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=107069551332679&height=50&width=50&ext=1614948097&hash=AeRV6a5T2P4TVmSB1IQ', '', '', '', '', '', NULL, '', '', '', NULL, '', '', '', '', '', '', 'http://localhost:3000/', 100, 0, 1612356131009),
(90, 6, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '33 - 40', 'AF', 'Andkhoy', 'test', 'google', '03-02-2021', '05-02-2021', '10', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'fsff', 'fsfsfs', 'fsfsfs', 'http://localhost:3000/Campaigns', 'fsfsf', 'fsfsfsf', NULL, 10, 0, 1612356450596),
(91, 7, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Men', 'English', '34 - 40', 'AF', 'Andkhoy', NULL, 'instagram', '04-02-2021', '06-02-2021', '20', NULL, NULL, NULL, '', '', NULL, NULL, NULL, NULL, NULL, 'hgryhryryry', '', '1612423831141-copy-of-hiring-poster---made-with-postermywall.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 20, 0, 1612423831124),
(92, 7, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '36 - 40', 'AF', 'Andkhoy', NULL, 'facebook', '04-02-2021', '05-02-2021', '50', '107069551332679', 'Glasier Php', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=107069551332679&height=50&width=50&ext=1615015942&hash=AeQqPaXGhg5t8umY05k', NULL, NULL, 'ffsfsf', 'sffsf', 'fsfsf', '1612423953460-copy-of-hiring-poster---made-with-postermywall.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 50, 0, 1612423953443),
(93, 9, '6', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '32 - 40', 'AF', 'Andkhoy', NULL, 'google', '04-02-2021', '06-02-2021', '20', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'khksfhakfh', 'kdadadakddd kjdadhd', 'ssjdjsdsdjsk jkjjjsdsdjdksd kjskdjs', 'http://localhost:3000/', 'dad dada', 'adadadd', NULL, 20, 0, 1612431180636),
(94, 9, '1', 'WhatsApp', '919974177408', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '31 - 40', 'AF', 'Andkhoy', NULL, 'instagram', '04-02-2021', '06-02-2021', '100', NULL, NULL, NULL, '', '', NULL, NULL, NULL, NULL, NULL, 'gkkjkg', '', '1612436744869-diwali.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 100, 0, 1612436744848),
(95, 9, '1', 'Facebook_Instagram_DM', '#MediaObjective', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '37 - 40', 'AF', 'Andkhoy', NULL, 'facebook', '04-02-2021', '06-02-2021', '100', '107069551332679', 'Glasier Php', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=107069551332679&height=50&width=50&ext=1615028943&hash=AeSZLYeC_KRgSlTYslA', NULL, NULL, 'test', 'dddada dadadad', 'adadad dadad', '1612436963961-copy-of-hiring-poster---made-with-postermywall.jpg', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 100, 0, 1612436963927),
(96, 9, '3', NULL, NULL, NULL, NULL, '89898989989', NULL, NULL, NULL, NULL, 'All', 'English', '39 - 40', 'AF', 'Andkhoy', NULL, 'instagram', '04-02-2021', '13-02-2021', '200', NULL, NULL, NULL, '', '', NULL, NULL, NULL, NULL, NULL, 'thtrhtrrrrrrrrrrrrrrrrrrrr hryh', '', '1612439483087-chart.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 200, 0, 1612439483071),
(97, 7, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '34 - 40', 'AL', 'Bashkia Devoll', NULL, 'google,instagram,youtube', '04-02-2021', '06-02-2021', '1000', NULL, NULL, NULL, '', '', NULL, NULL, NULL, NULL, NULL, 'dfsfs', '', '1612442281475-diwali.jpg', 'fsfsf', 'fsfsf', 'sfsfsf', 'http://localhost:3000/', 'fsfsf', 'fsfsf', 'http://localhost:3000/', 1000, 0, 1612442281450),
(98, 9, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '33 - 40', 'AF', 'Andkhoy', 'test', 'google', '08-02-2021', '12-02-2021', '100', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'google test heading 1', 'google test heading 2', 'google test heading 3', 'http://localhost:3000/Campaigns', 'google test message 1', 'google test message 2', NULL, 100, 0, 1612764216663),
(99, 9, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '32 - 40', 'AF', 'Andkhoy', NULL, 'facebook', '10-02-2021', '13-02-2021', '1', '107069551332679', 'Glasier Php', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=107069551332679&height=50&width=50&ext=1615542759&hash=AeS0sY9hBLRCJ9TXcNY', NULL, NULL, 'ssssss', '', '', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 1612950781392),
(100, 9, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '34 - 40', 'AF', 'Andkhoy', NULL, 'facebook,google,instagram,youtube', '10-02-2021', '13-02-2021', '100', '107069551332679', 'Glasier Php', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=107069551332679&height=50&width=50&ext=1615552661&hash=AeT2bcEFMrcorl5pwYY', '', '', 'ffafafafafaff', 'ffaqfafaff', 'fafafafaf', '1612960817157-diwali.jpg', '', 'fsafsfsfsf', 'http://localhost:3000/', '1612960817162-d.png', 'fsfsfsf', 'sfsfsf', 'fsfsfsfsfsf', 'http://localhost:3000/', 'dasdadada', 'dadadadadad', 'http://localhost:3000/', 100, 0, 1612960817144),
(101, 9, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '33 - 40', 'AF', 'Andkhoy', 'dddd', 'facebook,google,instagram,youtube', '13-02-2021', '20-02-2021', '100', '107069551332679', 'Glasier Php', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=107069551332679&height=50&width=50&ext=1615790351&hash=AeQp4Yc8RCdY48xsyPM', '', '', 'facebook heading', 'facebook heading 1', 'facebook heading 2', '1613198665833-pexels-photo-kamal.jpeg', 'http://localhost:3000/ViewCampaign?id=100', 'Instagram message', 'http://localhost:3000/instagram?id=100', '1613198665836-dessin-uiafrica_786.png', 'heading 1', 'heading 2', 'heading 3', 'http://localhost:3000/ViewCampaign?id=100', 'google message 1', 'google message 2', 'https://www.youtube.com/embed/hoNb6HuNmU0', 100, 0, 1613198665813),
(102, 21, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'Both', '30 - 40', 'AF', 'Asadabad', NULL, 'facebook,google,instagram,youtube', '18-02-2021', '20-02-2021', '100', '107069551332679', 'Glasier Php', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=107069551332679&height=50&width=50&ext=1616234592&hash=AeTFsJDvvld9gu29H5s', '', '', 'fvb cvbcb', 'bdbd', 'bdd', '1613642678288-pexels-photo-kamal.jpeg', 'http://localhost:3001/', 'xcv cvbc', 'http://localhost:3001/', '1613642678289-pexels-photo-kamal.jpeg', 'sfsfs', 'fsfsfsf', 'sfsfsfsf', 'http://localhost:3001/', 'dadda adfadfad', 'dadadada ', 'https://www.youtube.com/embed/NBOzO9bMEhQ', 100, 0, 1613642678267),
(103, 21, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '30 - 40', 'AF', 'Andkhoy', 'fgdsfdsgdg', 'facebook,instagram', '19-02-2021', '27-02-2021', '100', NULL, 'undefined', NULL, '', '', 'teytetyeyt', 'tetet', 'tetet', '1613727270184-pexels-photo-kamal.jpeg', '', 'tgetetet', '', '1613727270185-sss.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 100, 0, 1613727270162),
(104, 21, '6', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '30 - 40', 'AF', 'Andkhoy', NULL, 'facebook,instagram,youtube', '19-02-2021', '19-02-2021', '500', NULL, NULL, NULL, '', '', 'fdfd', 'fg', 'gdg', '1613732387601-banners-homepage_0..jpg', '', 'dfgdsg', '', '1613732387655-about_1.png', NULL, NULL, NULL, NULL, NULL, NULL, 'https://youtu.be/vunhMBRfhL8', 500, 0, 1613732387586),
(105, 21, '6', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'All', 'English', '30 - 40', 'AF', 'Andkhoy', NULL, 'facebook,instagram', '19-02-2021', '19-02-2021', '555', NULL, NULL, NULL, '', '', 'fff', '', '', '1613738657597-about_1.png', '', 'fff', '', '1613738657667-banners-homepage_0..jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 555, 0, 1613738657573);

-- --------------------------------------------------------

--
-- Table structure for table `google_sitelinks`
--

CREATE TABLE `google_sitelinks` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `campaign_id` int(11) DEFAULT NULL,
  `site_heading` text DEFAULT NULL,
  `description1` text DEFAULT NULL,
  `description2` text DEFAULT NULL,
  `site_url` varchar(225) DEFAULT NULL,
  `created_at` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `google_sitelinks`
--

INSERT INTO `google_sitelinks` (`id`, `user_id`, `campaign_id`, `site_heading`, `description1`, `description2`, `site_url`, `created_at`) VALUES
(9, 9, 93, 'test', 'ii', 'uyuiyib', 'http://localhost:3000/', 1612431180642),
(10, 9, 98, 'site link heading 1', 'site link dis 1', 'site link dis 2', 'http://localhost:3000/Campaigns/sitelink', 1612764216673),
(11, 9, 98, 'site link heading 2', 'site link dis 1', 'site link dis 2', 'http://localhost:3000/Campaigns/sitelink2', 1612764216673),
(12, 9, 101, 'sitelink 1', 'site description 1 ', 'site description 2 ', 'http://localhost:3000/ViewCampaign?id=100', 1613198665821),
(13, 9, 101, 'sitelink 2', 'site description 1 ', 'site description 2 ', 'http://localhost:3000/ViewCdsdsdsdampaign?id=100', 1613198665821);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `frist_name` varchar(30) DEFAULT NULL,
  `last_name` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `mobile` varchar(25) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `user_image` varchar(225) DEFAULT NULL,
  `user_status` int(11) DEFAULT 1 COMMENT '1=Active,0=Inactive',
  `login_type` int(11) DEFAULT 1 COMMENT '1=web,2=Facebook,3=Google',
  `social_id` varchar(225) DEFAULT NULL,
  `user_type` int(11) DEFAULT 1 COMMENT '1=User,2=Admin',
  `userToken` varchar(225) DEFAULT NULL,
  `creation_date` bigint(20) DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `frist_name`, `last_name`, `email`, `mobile`, `password`, `user_image`, `user_status`, `login_type`, `social_id`, `user_type`, `userToken`, `creation_date`, `update_date`) VALUES
(6, 'PHP Glasier', NULL, 'php@glasierinc.com', NULL, NULL, 'https://lh4.googleusercontent.com/-CmELE1s26RQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmRhgzEuSXplKcoYP0UYn6uhZpokw/s96-c/photo.jpg', 1, 3, '108410768520792808496', 1, NULL, 1609929013065, '2021-01-06 10:30:13'),
(7, 'Glasier Php', NULL, 'php@glasierinc.com', NULL, NULL, 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=107069551332679&height=50&width=50&ext=1612521108&hash=AeS2JUG-rAZ6g4bc-Aw', 1, 2, '107069551332679', 1, NULL, 1609929106709, '2021-01-06 10:31:46'),
(9, 'kamal', 'Sharma', 'kamal@glasier.in', '7777777777', '89a369b5f4581388b55e0ec77873160b', NULL, 1, 1, NULL, 1, NULL, 1609939706307, '2021-01-06 13:28:26'),
(10, 'kamal', 'Sharma', 'kamals@glasier.in', '7777777777', '88c50e8c4c06cbe03d05cfc7f8ae5fef6b0117f260b6102d0da1dd873b742ee0da1d429fb2869530762fe2351c94720a53b62bba0fbf0978207b553b736dd7d5a9a12ce446a7a7fdb3b2a6bbe882ea331a8c3584e2a82b214f5b23ecafc88d4938ff84e5', NULL, 1, 1, NULL, 1, NULL, 1609940372655, '2021-01-06 13:39:32'),
(11, 'rama', 'Kumar', 'rama@gmail.com', '878787878', 'e10adc3949ba59abbe56e057f20f883e', NULL, 1, 1, NULL, 1, NULL, 1610000019505, '2021-01-07 06:13:39'),
(12, 'sasas', 'asasasas', 'kamalddddd@glasier.in', '7777777777', '84f80f654d587f166d3a3520503bbb09', NULL, 1, 1, NULL, 1, NULL, 1610000370281, '2021-01-07 06:19:30'),
(13, 'sasas', 'asasasas', 'kamalddddddddddd@glasier.in', '7777777777', '84f80f654d587f166d3a3520503bbb09', NULL, 1, 1, NULL, 1, NULL, 1610000428857, '2021-01-07 06:20:28'),
(14, 'admin', 'User', 'admin@glasier.in', '8888888888', '0e7517141fb53f21ee439b355b5a1d0a', NULL, 1, 1, NULL, 2, NULL, 1611917259987, '2021-01-29 10:47:39'),
(17, 'test', 'test', 'test@gmail.com', '9999999999', 'efa53e23513b29349a9d9c25c7710307', NULL, 1, 1, NULL, 1, NULL, 1611918279699, '2021-01-29 11:04:39'),
(18, 'kamal', 'sharma', 'kamal786@gmail.com', '8989898987', 'e10adc3949ba59abbe56e057f20f883e', NULL, 1, 1, NULL, 1, NULL, 1611983120498, '2021-01-30 05:05:20'),
(19, 'test', 'test', 'testdata@gmail.com', '619777797979', 'e10adc3949ba59abbe56e057f20f883e', NULL, 1, 1, NULL, 1, NULL, 1612438163320, '2021-02-04 11:29:23'),
(20, 'fsffsfsf', 'fsfsfsf', 'sfdsfsff@gmail.com', '919898989878', '37e3dc3942c150b1370722e0885424ef', NULL, 1, 1, NULL, 1, NULL, 1612957376495, '2021-02-10 11:42:56'),
(21, 'Pragnesh', 'Kadia', 'pragnesh@glasier.in', '19999999999', 'de6f22a97be5f81a5c9efd9c6b5b0479', NULL, 1, 1, NULL, 1, NULL, 1613642481664, '2021-02-18 10:01:21');

-- --------------------------------------------------------

--
-- Table structure for table `user_interest`
--

CREATE TABLE `user_interest` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `campaign_id` int(11) DEFAULT NULL,
  `category` varchar(32) DEFAULT NULL,
  `sub_category` varchar(32) DEFAULT NULL,
  `created_at` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_interest`
--

INSERT INTO `user_interest` (`id`, `user_id`, `campaign_id`, `category`, `sub_category`, `created_at`) VALUES
(36, 9, 68, 'Business and Industry', 'Advertising', 1611990079153),
(37, 9, 68, 'Business and Industry', 'Agriculture', 1611990079153),
(55, 6, 83, 'Business and Industry', 'Advertising', 1612265928701),
(56, 6, 83, 'Business and Industry', 'Agriculture', 1612265928701),
(57, 9, 84, 'Business and Industry', 'Advertising', 1612327913925),
(58, 14, 85, 'Business and Industry', 'Advertising', 1612351350248),
(59, 14, 85, 'Business and Industry', 'Agriculture', 1612351350248),
(60, 14, 86, 'Business and Industry', 'Advertising', 1612352139715),
(61, 14, 86, 'Business and Industry', 'Agriculture', 1612352139715),
(62, 14, 87, 'Business and Industry', 'Advertising', 1612352215446),
(63, 14, 87, 'Business and Industry', 'Agriculture', 1612352215446),
(64, 6, 88, 'Business and Industry', 'Advertising', 1612355901927),
(65, 6, 89, 'Business and Industry', 'Advertising', 1612356131017),
(66, 6, 89, 'Business and Industry', 'Agriculture', 1612356131017),
(67, 6, 90, 'Business and Industry', 'Advertising', 1612356450603),
(68, 6, 90, 'Business and Industry', 'Agriculture', 1612356450603),
(69, 7, 91, 'Business and Industry', 'Advertising', 1612423831128),
(70, 7, 91, 'Business and Industry', 'Banking', 1612423831128),
(71, 7, 92, 'Business and Industry', 'Advertising', 1612423953449),
(72, 7, 92, 'Business and Industry', 'Architecture', 1612423953450),
(73, 9, 93, 'Business and Industry', 'Advertising', 1612431180642),
(74, 9, 94, 'Business and Industry', 'Advertising', 1612436744856),
(75, 9, 94, 'Business and Industry', 'Agriculture', 1612436744856),
(76, 9, 95, 'Business and Industry', 'Advertising', 1612436963949),
(77, 9, 95, 'Business and Industry', 'Banking', 1612436963949),
(78, 9, 96, 'Business and Industry', 'Advertising', 1612439483078),
(79, 7, 97, 'Business and Industry', 'Advertising', 1612442281456),
(80, 9, 98, 'Business and Industry', 'Advertising', 1612764216673),
(81, 9, 98, 'Business and Industry', 'Agriculture', 1612764216673),
(82, 9, 99, 'Business and Industry', 'Advertising', 1612950781400),
(83, 9, 100, 'Business and Industry', 'Advertising', 1612960817146),
(84, 9, 101, 'Business and Industry', 'Advertising', 1613198665821),
(85, 9, 101, 'Business and Industry', 'Architecture', 1613198665821),
(86, 9, 101, 'Investment banking', 'Online banking', 1613198665821),
(87, 21, 102, 'Business and Industry', 'Advertising', 1613642678274),
(88, 21, 103, 'Business and Industry', 'Architecture', 1613727270172),
(89, 21, 103, 'Business and Industry', 'Agriculture', 1613727270172),
(90, 21, 103, 'Business and Industry', 'Banking', 1613727270172),
(91, 21, 104, 'Business and Industry', 'Advertising', 1613732387588),
(92, 21, 105, 'Business and Industry', 'Advertising', 1613738657581);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `campaign`
--
ALTER TABLE `campaign`
  ADD PRIMARY KEY (`campaign_id`);

--
-- Indexes for table `google_sitelinks`
--
ALTER TABLE `google_sitelinks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `google_sitelinks_ibfk_1` (`campaign_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_interest`
--
ALTER TABLE `user_interest`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_interest_ibfk_1` (`campaign_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `campaign`
--
ALTER TABLE `campaign`
  MODIFY `campaign_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `google_sitelinks`
--
ALTER TABLE `google_sitelinks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `user_interest`
--
ALTER TABLE `user_interest`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `google_sitelinks`
--
ALTER TABLE `google_sitelinks`
  ADD CONSTRAINT `google_sitelinks_ibfk_1` FOREIGN KEY (`campaign_id`) REFERENCES `campaign` (`campaign_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_interest`
--
ALTER TABLE `user_interest`
  ADD CONSTRAINT `user_interest_ibfk_1` FOREIGN KEY (`campaign_id`) REFERENCES `campaign` (`campaign_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
