-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 01, 2020 at 05:17 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

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
  `about` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productId`, `productName`, `picture`, `price`, `typeId`, `subtypeId`, `about`) VALUES
(2, 'Ilustracije', '', 0, NULL, NULL, ''),
(3, 'Printovi', '', 0, NULL, NULL, ''),
(4, 'slika1', 'images/slika1.jpg', 5000, 2, 1, 'Lorem ispum dolor sit amet, Lorem ispum dolor sit amet, Lorem ispum dolor sit amet, Lorem ispum dolor sit amet.'),
(5, 'slika2', 'images/slika2.jpg', 3500, 2, 1, 'Lorem ispum dolor sit amet, Lorem ispum dolor sit amet, Lorem ispum dolor sit amet.'),
(6, 'slika3', 'images/slika3.jpg', 2300, 2, 1, 'Lorem ispum dolor sit amet, Lorem ispum dolor sit amet.'),
(7, 'slika4', 'images/slika4.jpg', 1100, 2, 1, 'Lorem ispum dolor sit amet, Lorem ispum dolor sit amet, Lorem ispum dolor sit amet, Lorem ispum dolor sit amet, Lorem ispum dolor sit amet, Lorem ispum dolor sit amet.'),
(8, 'slika5', 'images/slika5.jpg', 1150, 2, 1, 'Lorem ispum dolor sit amet'),
(9, 'slika6', 'images/slika6.jpg', 3000, 2, 1, 'Lorem ispum dolor sit amet, Lorem ispum dolor sit amet, Lorem ispum dolor sit amet, Lorem ispum dolor sit amet.'),
(10, 'Slislika7', 'images/slika7.jpg', 1150, 2, 1, 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.'),
(11, 'slika8', 'images/slika8.jpg', 550, 2, 1, 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, vLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.'),
(12, 'slika9', 'images/slika9.jpg', 2700, 2, 1, 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.');

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
(1, 'Wallpapers');

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
(1, 'piljarnica\r\n'),
(2, 'Cvecara');

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
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `subtype`
--
ALTER TABLE `subtype`
  MODIFY `subtypeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `type`
--
ALTER TABLE `type`
  MODIFY `typeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userid` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

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
