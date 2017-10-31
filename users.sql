-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 31 Oct 2017 la 20:45
-- Versiune server: 10.1.10-MariaDB
-- PHP Version: 5.5.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api`
--

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `users`
--

INSERT INTO `users` (`ID`, `firstName`, `lastName`, `email`, `password`, `gender`, `username`, `address`, `telephone`) VALUES
(2, 'Teodor', 'Vaipan', 'robert12@yahoo.com', 'robert456', 'male', 'robert.12', 'Socola 4', '0799526001'),
(3, 'Maria', 'Radu', 'mariaradu@yahoo.com', 'mariiia', 'female', 'maria.12', 'Sf.Ioan Romanul', '0799020112'),
(4, 'Maria', 'Radu', 'mariaradu@yahoo.com', 'mariiia', 'female', 'maria.12', 'Sf.Ioan Romanul', '0799020112'),
(6, 'OANAAAA', '', '', '', '', '', '', ''),
(8, 'Simo', 'Simonica', '', '', '', '', '', ''),
(9, 'Iolanda', 'Bursuc', 'iolanaa@yahoo.com', 'iolanda23', 'female', 'Anda', 'Nicolina', '0751245124'),
(10, 'Iolanda', 'Bursuc', 'iolanaa@yahoo.com', 'iolanda23', 'female', 'Anda', 'Nicolina', '0751245124'),
(11, '', '', '', '', '', '', '', ''),
(12, '', '', '', '', '', '', '', ''),
(13, '', '', '', '', '', '', '', ''),
(14, '', '', '', '', '', '', '', ''),
(15, '', '', '', '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
