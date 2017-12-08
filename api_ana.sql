-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 08 Dec 2017 la 17:05
-- Versiune server: 10.1.13-MariaDB
-- PHP Version: 5.5.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_ana`
--

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `listing`
--

CREATE TABLE `listing` (
  `ID` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `rooms` int(11) NOT NULL,
  `bath` int(11) NOT NULL,
  `floor` int(11) NOT NULL,
  `structure` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `image` varchar(2000) NOT NULL,
  `surface` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `zone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `listing`
--

INSERT INTO `listing` (`ID`, `title`, `rooms`, `bath`, `floor`, `structure`, `year`, `description`, `image`, `surface`, `price`, `zone`) VALUES
(2, 'Apartament 3 camere Nicolina', 3, 2, 2, 'semidecomandat', 'dupa 2010', 'Apartament 3 camere decomandat, in bloc nou din caramida, amplasat in Nicolina, Rondul Vechi, zona de case, compartimentare clasica, predare la cheie cu toate dotarile, gresie, faianta, parchet, centrala termica, tamplarie PVC cu geam termopan, geam la baie, curte interioara, se accepta credit, 65.000Euro.', 'poze/3cam.jpg', 70, 65000, 'Nicolina'),
(3, 'Apartament 2 camere Podul Ros', 2, 1, 1, 'decomandat', 'dupa 1990', 'La doar 5 minute de statia tramvaiului 9'',acest complex rezidential mai pune la dispozitia locatarilor din cadrul sau multiple avantaje: acces la supermarketul deschis la parterul primului bloc, sala de fitness, parc de joaca, gradinita privata cu program prelungit,etc \n', 'poze/2cam.jpg', 50, 50000, 'Podul Ros'),
(4, 'Apartament 1 camera Centru-Palas', 1, 1, 5, 'decomandat', 'dupa 1980', 'Va propunem spre vanzare un apartament cu 1 camera, suprafata utila de 44,64 mp, intr-un complex rezidential nou situat in inima Iasului, langa Palas Mall. Ansamblul cuprinde un imobil, avand regim de inaltime P + 4E, ce iti ofera 15 apartamente noi, cate 3 pe nivel, locuri de parcare, iar apartamentele noi de vanzare, se definesc prin functionalitate si modernism avand o compartimentare pentru gusturile tuturor.\r\n\r\nApartamentul se va preda la cheie cu toate utilitatile.\r\n\r\nComision 0!\r\n', 'poze/1cam.jpg', 45, 55000, 'Centru-Palas'),
(5, 'Apartament 2 camere Tudor Vladimirescu', 2, 1, 6, 'decomandat', 'dupa 2016', 'Se ofera spre vanzare un apartament cu 3 camere, cu o suprafata de 67 mp, amplasat in zona Nicolina, in vecinatatea statiilor mijloacelor de transport in comun.\n\nApartamentul este decomandat, iar ca si dotari dispune de centrala termica proprie, tamplarie cu geamuri termopan, gresie si faianta, parchet laminat, iar la interior dispune de usi din lemn. Imobilul se vinde partial mobilat, asta incluzand cele doua dormitoare si bucataria care se vinde mobilata si utilata.', 'poze/22cam.jpg', 65, 0, 'Tudor Vladimirescu'),
(6, 'Apartament 1 camera Nicolina-Cug', 1, 1, 3, 'decomandat', 'dupa 2000', 'Apartament cu o camera decomandat 34.45 mp, etaj intermediar!\r\n\r\nPretul apartamentului este 31.000 Euro - T.V.A. 5% inclus! \r\n\r\nLa doar 5 minute de statia tramvaiului 9'',acest complex rezidential mai pune la dispozitia locatarilor din cadrul sau multiple avantaje: acces la supermarketul deschis la parterul primului bloc, sala de fitness, parc de joaca, gradinita privata cu program prelungit,etc \r\n\r\nApartamentul este situat intr-un bloc construit pe cadre, cu pereti interiori si exteriori din caramida Brac Brikstone clasa A. Tamplaria este cu 5 camere de izolatie si 3 randuri de sticla pentru un confort sporit si un consum redus de energie.\r\n\r\nIncalzirea imobilului este prin pardoseala si va fi asigurata de o centrala proprie marca Motan cu detector de gaz si termostat pentru un control mai bun al temperaturii din apartament. Usa exterioara este antiefractie clasa A de siguranta, iar usile interioare sunt tip MDF 3D clasa premium. la interior dezvoltatorul va ofera posibilitatea de a alege gresia, faianta, parchetul si obiectele sanitare din baie.\r\n\r\nAvantajele acestui apartament sunt date de calitatea superioara a finisajelor si a dotarilor, zona linistita in care se afla, parcare privata supra-teran si subteran, acces facil spre Palas Mall, si proximitatea complexului rezidential fata de scoli, supermarketuri, cabinete medicale si statii ale mijloacelor de transport in comun.\r\n\r\n\r\nApartamentul este decomandat, iar ca si dotari dispune de centrala termica proprie, tamplarie cu geamuri termopan, gresie si faianta, parchet laminat, iar la interior dispune de usi din lemn. Imobilul se vinde partial mobilat, asta incluzand cele doua dormitoare si bucataria care se vinde mobilata si utilata.', 'poze/11cam.jpg', 34, 31000, 'Nicolina-Cug'),
(7, 'Apartament 4 camere Copou', 4, 2, 10, 'decomandat', 'dupa 2015', 'Apartament cu 4 camere, model decomandat, excelent pozitionat, situat intr-un imobil constructie 2015, din zona centrala.\r\n\r\nApartamentul este spatios, avand suprafata totala de 97mp (84.51mp utili, plus suprafata balconului, de 12.5mp, prezinta doua bai.\r\n\r\nAchizitionati aceasta locuinta la pretul de 120.000 euro!\r\n\r\nApartamentul este decomandat, iar ca si dotari dispune de centrala termica proprie, tamplarie cu geamuri termopan, gresie si faianta, parchet laminat, iar la interior dispune de usi din lemn. Imobilul se vinde partial mobilat, asta incluzand cele doua dormitoare si bucataria care se vinde mobilata si utilata.', 'poze/44cam.png', 97, 120000, 'Copou'),
(8, 'Apartament 3 camere Galata ', 3, 1, 4, 'semidecomandat', 'dupa 1970', 'Apartament cu 3 camere , decomandate , situat excelent in zona Galata 1 , la 15 minute de mers pe jos fata de centru , foarte aproape de mijloacele de transport, Lidl si complexul Oxygen ,cu o suprafata utila de 73 m*2 , bloc P+4 , etaj 1 , termosistem, 2 locuri de parcare asigurate prin contract, scara cu interfon.\r\nCompartimentat astfel: 3 camere decomandate , living , holuri , grup sanitar , bucatarie , balcon.\r\nDotari: usa metalica intrare, centrala termica, aer conditionat LG Inverter, apometre, tamplarie exterioara aluminiu cu geam termopan, gresie , faianta ,parchet laminat, cabluri TV,internet , telefonie, usi interioare de lemn.\r\nPret: 62500 euro negociabil. Persoana fizica , NU agentie cu toate actele la zi .\r\nPentru mai multe detalii ma puteti contacta zilnic pe site sau telefonic la numerele : 0744/160841 ; 0744/336470', 'poze/33cam.jpg', 73, 62500, 'Galata');

-- --------------------------------------------------------

--
-- Structura de tabel pentru tabelul `saved`
--

CREATE TABLE `saved` (
  `ID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `listingID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `saved`
--

INSERT INTO `saved` (`ID`, `userID`, `listingID`) VALUES
(1, 1, 7),
(2, 1, 8);

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
  `adress` varchar(255) NOT NULL,
  `telephone` varchar(255) NOT NULL,
  `role` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Salvarea datelor din tabel `users`
--

INSERT INTO `users` (`ID`, `firstName`, `lastName`, `email`, `password`, `gender`, `username`, `adress`, `telephone`, `role`) VALUES
(1, 'Ana', 'Petrescu', 'admin', 'admin', 'female', 'anaPep', 'Viitorului', '0784575615', 1),
(2, 'Cosmin', 'Roca', 'cosR', 'dseY343', 'male', 'coossR', 'Tudor Vladimirescu', '0758457288', 0),
(3, 'Iulian', 'Aileni', 'iuliAli', 'bjhnhT44', 'male', 'IuliALL', 'Tudor Nicolae', '0458795548', 0),
(4, 'Maria', 'Zaharia', 'MarZar', 'kko22ee', 'female', 'MariZaharia', 'Mihai Eminescu', '0485475475', 0),
(5, 'Codrin', 'test', 'test@test.com', '123', 'male', 'codrin', 'sadadsa', '21321312', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `listing`
--
ALTER TABLE `listing`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `saved`
--
ALTER TABLE `saved`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `listing`
--
ALTER TABLE `listing`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `saved`
--
ALTER TABLE `saved`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
