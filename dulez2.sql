-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2020 at 09:21 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dulez2`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `blogId` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `category1` varchar(255) NOT NULL,
  `category2` varchar(255) NOT NULL,
  `category3` varchar(255) NOT NULL,
  `category4` varchar(255) NOT NULL,
  `category5` varchar(255) NOT NULL,
  `category6` varchar(255) NOT NULL,
  `category7` varchar(255) NOT NULL,
  `category8` varchar(255) NOT NULL,
  `category9` varchar(255) NOT NULL,
  `category10` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`blogId`, `date`, `title`, `text`, `image`, `tags`, `category1`, `category2`, `category3`, `category4`, `category5`, `category6`, `category7`, `category8`, `category9`, `category10`) VALUES
(1, '2020-11-01 20:28:56', 'Novi proizvod', 'Ovde kucam teks koji ce neko kasnije citati. Tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst, tekst.', 'images/blog1.jpg', '#ovo #ono #umetnost #test #plantart', 'Art', 'Dizajn', 'Umetnost', 'Ideja', 'Lepota', 'Print', 'Nesto', '', '', ''),
(2, '2020-11-02 20:29:07', 'Proizvod koji kida!', 'Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum.', 'images/blog2.jpg', '', '', '', '', '', '', '', '', '', '', ''),
(3, '2020-11-03 20:50:16', 'Novi naslov', 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet\r\n', 'images/blog3.jpg', '', '', '', '', '', '', '', '', '', '', ''),
(4, '2020-11-04 21:07:59', 'Tekst 4', 'Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum ', 'images/blog4.jpg', '', '', '', '', '', '', '', '', '', '', ''),
(5, '2020-11-04 21:07:59', 'Tekst 5', 'Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum ', 'images/blog5.jpg', '', '', '', '', '', '', '', '', '', '', ''),
(6, '2020-11-04 21:09:36', 'Tekst 6', 'Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum Lorel ipsum vv', 'images/blog6.jpg', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `commentId` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `commentText` text NOT NULL,
  `date` datetime NOT NULL,
  `blogId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `orderId` int(11) NOT NULL,
  `orderDate` date NOT NULL,
  `orderAmount` double NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orderitem`
--

CREATE TABLE `orderitem` (
  `itemId` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `productID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productId` int(11) NOT NULL,
  `productName` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `typeId` int(11) DEFAULT NULL,
  `subtypeId` int(11) DEFAULT NULL,
  `shortdescription` varchar(255) NOT NULL,
  `fulldescription` varchar(255) NOT NULL,
  `angle1` varchar(255) NOT NULL,
  `angle2` varchar(255) NOT NULL,
  `angle3` varchar(255) NOT NULL,
  `info` varchar(255) NOT NULL,
  `comments` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productId`, `productName`, `picture`, `price`, `typeId`, `subtypeId`, `shortdescription`, `fulldescription`, `angle1`, `angle2`, `angle3`, `info`, `comments`) VALUES
(1, 'Prod 1', 'images/prod1.jpg', 2000, 1, 1, '', '', '', '', '', '', ''),
(2, 'Prod 2', 'images/prod2.jpg', 1100, 1, 1, '', '', '', '', '', '', ''),
(3, 'Prod 3', 'images/prod3.jpg', 2300, 1, 1, '', '', '', '', '', '', ''),
(4, 'Proizvod 1', 'images/proizvod1.jpg', 2000, 2, 1, 'Opai proizvoda ukratko. Nekoliko reci o proizvodu.', 'Detaljan opis proizvoda, detaljan opis proizvoda, detaljan opis proizvoda, detaljan opis proizvoda, detaljan opis proizvoda, detaljan opis proizvoda, detaljan opis proizvoda, detaljan opis proizvoda, detaljan opis proizvoda, detaljan opis proizvoda.', 'images/slika7.jpg', 'images/slika8.jpg', 'images/slika9.jpg', 'Detaljne informacije vezane za proizvod, detaljne informacije vezane za proizvod, detaljne informacije vezane za proizvod, detaljne informacije vezane za proizvod.', ''),
(6, 'Proizvod 2', 'images/proizvod2.jpg', 3500, 2, 1, 'short description - nesto o proizvodu', 'Full description - detaljno o ovom proizvodu.', 'images/slika9.jpg', 'images/slika8.jpg', 'images/slika7.jpg', 'Information about product, product info, product info', ''),
(7, 'Proizvod 3', 'images/proizvod3.jpg', 5000, 2, 1, 'opis opis opis opis', 'detaljno detaljnno detaljno detaljno', 'images/slika7.jpg', 'images/slika8.jpg', 'images/slika9.jpg', 'Ovde popuniti detaljne informacije vezane za proizvod.', ''),
(8, 'Slika 1', 'images/slika1.jpg', 1000, 1, 2, 'hflkxzjhxcbxcnfxasfd', 'asdasdasdasdasdadadasdaoixvzmxcnvkjhgqwdv\\shvcxc', 'images/vesti1.jpg', 'images/vesti2.jpg', 'images/vesti3.jpg', 'something about product', ''),
(9, 'Slika 2', 'images/slika2.jpg', 1300, 1, 2, 'opis opis opis opis opis opis opis opis opis opis opis opis opis opis opis', 'full descrption ', 'images/vesti3.jpg', 'images/vesti2.jpg', 'images/vesti1.jpg', 'prod info prod info prod info', ''),
(10, 'Slika 3', 'images/slika3.jpg', 4500, 1, 2, 'Opis proizvoda', 'Detaljan opis proizvoda!', 'images/slika7.jpg', 'images/slika8.jpg', 'images/slika9.jpg', 'informacije o proizvodu', ''),
(11, 'Slika 4', 'images/slika4.jpg', 3150, 1, 2, 'opis opis opis opis opis opis ', 'detaljan opis detaljan opis detaljan opis detaljan opis detaljan opis detaljan opis detaljan opis detaljan opis detaljan opis ', 'images/slika9.jpg', 'images/slika8.jpg', 'images/slika7.jpg', 'detaljne informacije detaljne informacije detaljne informacije detaljne informacije detaljne informacije ', '');

-- --------------------------------------------------------

--
-- Table structure for table `subscriber`
--

CREATE TABLE `subscriber` (
  `subscriberid` int(11) NOT NULL,
  `nameAndSurname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `subtype`
--

CREATE TABLE `subtype` (
  `subtypeId` int(11) NOT NULL,
  `subtypeName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subtype`
--

INSERT INTO `subtype` (`subtypeId`, `subtypeName`) VALUES
(1, 'Printovi'),
(2, 'Slike'),
(3, 'Crtezi'),
(4, 'Pozadine'),
(5, 'Vektori'),
(6, 'Paketi');

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `typeId` int(11) NOT NULL,
  `typeName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`typeId`, `typeName`) VALUES
(1, 'Cvecara'),
(2, 'Piljarnica'),
(3, 'Rasadnik');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `postNumber` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blogId`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`commentId`),
  ADD KEY `FK_5dec255234c5b7418f3d1e88ce4` (`blogId`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`orderId`),
  ADD KEY `FK_caabe91507b3379c7ba73637b84` (`userId`);

--
-- Indexes for table `orderitem`
--
ALTER TABLE `orderitem`
  ADD PRIMARY KEY (`itemId`,`orderId`),
  ADD KEY `FK_a15ebbc0e6cb61cf91be01a0028` (`orderId`),
  ADD KEY `FK_0162be860378365d3cee1a759d2` (`productID`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `FK_53bafe3ecc25867776c07c9e666` (`typeId`),
  ADD KEY `FK_683e14f40db25cb93a778ccca04` (`subtypeId`);

--
-- Indexes for table `subscriber`
--
ALTER TABLE `subscriber`
  ADD PRIMARY KEY (`subscriberid`),
  ADD UNIQUE KEY `IDX_073600148a22d05dcf81d119a6` (`email`);

--
-- Indexes for table `subtype`
--
ALTER TABLE `subtype`
  ADD PRIMARY KEY (`subtypeId`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`typeId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `blogId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `subscriber`
--
ALTER TABLE `subscriber`
  MODIFY `subscriberid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `subtype`
--
ALTER TABLE `subtype`
  MODIFY `subtypeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `typeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `FK_5dec255234c5b7418f3d1e88ce4` FOREIGN KEY (`blogId`) REFERENCES `blog` (`blogId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `FK_caabe91507b3379c7ba73637b84` FOREIGN KEY (`userId`) REFERENCES `user` (`userid`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `orderitem`
--
ALTER TABLE `orderitem`
  ADD CONSTRAINT `FK_0162be860378365d3cee1a759d2` FOREIGN KEY (`productID`) REFERENCES `product` (`productId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_a15ebbc0e6cb61cf91be01a0028` FOREIGN KEY (`orderId`) REFERENCES `order` (`orderId`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_53bafe3ecc25867776c07c9e666` FOREIGN KEY (`typeId`) REFERENCES `type` (`typeId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_683e14f40db25cb93a778ccca04` FOREIGN KEY (`subtypeId`) REFERENCES `subtype` (`subtypeId`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
