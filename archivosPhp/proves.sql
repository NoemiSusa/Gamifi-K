-- phpMyAdmin SQL Dump
-- version 4.0.4.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 10-05-2021 a las 20:06:41
-- Versión del servidor: 5.6.13
-- Versión de PHP: 5.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `proves`
--
CREATE DATABASE IF NOT EXISTS `proves` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `proves`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE IF NOT EXISTS `alumno` (
  `nickAlumno` varchar(30) NOT NULL,
  `nombreAlumno` varchar(20) NOT NULL,
  `apellidosAlumno` varchar(40) NOT NULL,
  `emailAlumno` varchar(40) NOT NULL,
  `contrasenyaAlumno` varchar(50) NOT NULL,
  `imagenAlumno` varchar(50) NOT NULL,
  PRIMARY KEY (`nickAlumno`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`nickAlumno`, `nombreAlumno`, `apellidosAlumno`, `emailAlumno`, `contrasenyaAlumno`, `imagenAlumno`) VALUES
('Prova1', 'prova1', 'proves1', 'prova1-1@prova.com', 'jq1FYsySThs/nay8GJIs3w==', 'Alumno'),
('Prova2', 'prova2', 'proves2', 'prova2@prova2.com', '+OX4dCoRl6wlW2v7MN00Vg==', 'Alumno'),
('Prova3', 'prova3', 'proves3', 'prova3@prova3.com', 'wdjY7xzfALFfrEsdjUXBmg==', 'Alumno');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE IF NOT EXISTS `profesor` (
  `nickProfesor` varchar(30) NOT NULL,
  `nombreProfesor` varchar(20) NOT NULL,
  `apellidosProfesor` varchar(40) NOT NULL,
  `emailProfesor` varchar(40) NOT NULL,
  `contrasenyaProfesor` varchar(50) NOT NULL,
  `centroProfesor` varchar(20) NOT NULL,
  `imagenProfesor` varchar(50) NOT NULL,
  PRIMARY KEY (`nickProfesor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`nickProfesor`, `nombreProfesor`, `apellidosProfesor`, `emailProfesor`, `contrasenyaProfesor`, `centroProfesor`, `imagenProfesor`) VALUES
('Prova10', 'prova10', 'proves10', 'prova10@prova10.com', 'G9iM/UM6cTiyVp6hfTBxSw==', 'centroProva10', 'Profe'),
('Prova11', 'prova10', 'proves11', 'prova11@prova11.com', 'SNFKbZzVXYHWvS7tXj2OgQ==', 'centroProva11', 'Profe11'),
('Prova9', 'prova9', 'Proves9', 'Prova9@prova.com', 'N+6uPjNlO+jt7bywyMBB/g==', 'centreProva9', 'Profe9');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rankings`
--

CREATE TABLE IF NOT EXISTS `rankings` (
  `idRanking` int(11) NOT NULL AUTO_INCREMENT,
  `nombreRanking` varchar(30) NOT NULL,
  `nickProfesorRK` varchar(30) NOT NULL,
  `fechaInicio` varchar(10) NOT NULL,
  `codigoAcceso` bigint(13) NOT NULL,
  `fechaFinal` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idRanking`),
  UNIQUE KEY `nombreRanking` (`nombreRanking`,`nickProfesorRK`,`fechaInicio`),
  KEY `nickProfesorRK` (`nickProfesorRK`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=39 ;

--
-- Volcado de datos para la tabla `rankings`
--

INSERT INTO `rankings` (`idRanking`, `nombreRanking`, `nickProfesorRK`, `fechaInicio`, `codigoAcceso`, `fechaFinal`) VALUES
(1, 'ranking1', 'Prova9', '04/04/2021', 1234567891234, 'no'),
(2, 'rkg2', 'Prova9', '14/04/2021', 1324567891234, 'no'),
(3, 'rkg1', 'Prova10', '14/04/2021', 1324567981234, 'no'),
(4, 'rkg3', 'Prova10', '15/03/2021', 1324657981234, 'no'),
(5, 'rkg4', 'Prova9', '14/04/2021', 1324657982134, 'no'),
(6, 'rkg5', 'Prova9', '14/04/2021', 1324675982134, 'no'),
(7, 'rkg6', 'Prova9', '14/04/2021', 3124675982134, 'no'),
(8, 'rkg7', 'Prova11', '15/04/2021', 3124675982124, 'no'),
(10, 'rkg7', 'Prova11', '15/04/2020', 3124665982124, 'no'),
(11, 'rkg3', 'Prova9', '15/03/2021', 1324657991234, 'no'),
(12, 'rkg1', 'Prova11', '04/04/2021', 1234567891244, 'no'),
(14, 'rkg1', 'Prova10', '04/04/2021', 1234567491234, 'no'),
(16, 'prova de Rkg', 'Prova9', '09/05/2021', 1620590951068, '10/05/2021'),
(17, 'rkg Prova2', 'Prova9', '09/05/2021', 1620591184137, '23/05/2021'),
(23, 'Ranking 23 No 50t', 'Prova9', '10/5/2021', 1620650787671, '17/05/2021'),
(24, 'Ranking 24 no 50t', 'Prova9', '10/5/2021', 1620651559907, '17/05/2021'),
(25, 'Ranking 25 50t', 'Prova9', '10/5/2021', 1620651820387, '17/05/2021'),
(26, 'Ranking 26 50t', 'Prova9', '10/5/2021', 1620652220997, '17/05/2021'),
(27, 'Ranking 27 50t', 'Prova9', '10/5/2021', 1620652676907, '17/05/2021'),
(28, 'Ranking 28 50t', 'Prova9', '10/5/2021', 1620652851523, '17/05/2021'),
(29, 'Ranking 29 50t', 'Prova9', '10/5/2021', 1620652922491, '17/05/2021'),
(30, 'Ranking 30 50t', 'Prova9', '10/5/2021', 1620653024051, '17/05/2021'),
(31, 'Ranking 31 50t', 'Prova9', '10/5/2021', 1620653094827, '17/05/2021'),
(32, 'Ranking 32 50t', 'Prova9', '10/5/2021', 1620653192443, '17/05/2021'),
(33, 'Ranking 33 50t', 'Prova9', '10/5/2021', 1620653260967, '17/05/2021'),
(34, '', '', '', 0, ''),
(35, 'Ranking 34 50t', 'Prova9', '10/5/2021', 1620656907833, '17/05/2021'),
(36, 'Ranking 35 50t', 'Prova9', '10/5/2021', 1620657516202, '17/05/2021'),
(37, 'Ranking 36 50t', 'Prova9', '10/5/2021', 1620657725505, '17/05/2021'),
(38, 'Ranking 37 50t', 'Prova9', '10/5/2021', 1620657844696, '17/05/2021');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareaalumno`
--

CREATE TABLE IF NOT EXISTS `tareaalumno` (
  `idTareaAl` int(11) NOT NULL,
  `nickAlumnoTarea` varchar(30) NOT NULL,
  `puntuacion` double DEFAULT '0',
  PRIMARY KEY (`idTareaAl`,`nickAlumnoTarea`),
  KEY `nickAlumnoTarea` (`nickAlumnoTarea`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tareaalumno`
--

INSERT INTO `tareaalumno` (`idTareaAl`, `nickAlumnoTarea`, `puntuacion`) VALUES
(1, 'Prova1', 5.6),
(1, 'Prova2', 1.66),
(1, 'Prova3', 2.99),
(2, 'Prova1', 80.44),
(2, 'Prova2', 80.44),
(2, 'Prova3', 80.44),
(3, 'Prova1', 60.77),
(3, 'Prova2', 60.77),
(3, 'Prova3', 60.77),
(4, 'Prova1', 90.66),
(4, 'Prova2', 90.66),
(4, 'Prova3', 90.66),
(5, 'Prova1', 83.23),
(5, 'Prova2', 83.23),
(5, 'Prova3', 83.23),
(6, 'Prova1', 87.45),
(6, 'Prova2', 87.45),
(6, 'Prova3', 87.45),
(7, 'Prova1', 74.32),
(7, 'Prova2', 74.32),
(7, 'Prova3', 74.32),
(8, 'Prova1', 65.42),
(8, 'Prova2', 65.42),
(8, 'Prova3', 65.42),
(9, 'Prova1', 54.6),
(9, 'Prova2', 54.6),
(9, 'Prova3', 54.6),
(10, 'Prova1', 76.44),
(10, 'Prova2', 76.44),
(10, 'Prova3', 76.44),
(11, 'Prova1', 50.6),
(11, 'Prova3', 50.6),
(12, 'Prova1', 80.44),
(12, 'Prova3', 80.44),
(13, 'Prova1', 60.77),
(13, 'Prova3', 60.77),
(14, 'Prova1', 90.66),
(14, 'Prova3', 90.66),
(15, 'Prova1', 83.23),
(15, 'Prova3', 83.23),
(16, 'Prova1', 87.45),
(16, 'Prova3', 87.45),
(17, 'Prova1', 74.32),
(17, 'Prova3', 74.32),
(18, 'Prova1', 65.42),
(18, 'Prova3', 65.42),
(19, 'Prova1', 54.6),
(19, 'Prova3', 54.6),
(20, 'Prova1', 76.44),
(20, 'Prova3', 76.44),
(21, 'Prova2', 50.6),
(22, 'Prova2', 80.44),
(23, 'Prova2', 60.77),
(24, 'Prova2', 90.66),
(25, 'Prova2', 83.23),
(26, 'Prova2', 87.45),
(27, 'Prova2', 74.32),
(28, 'Prova2', 65.42),
(29, 'Prova2', 54.6),
(30, 'Prova2', 76.44),
(31, 'Prova1', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE IF NOT EXISTS `tareas` (
  `idTarea` int(11) NOT NULL AUTO_INCREMENT,
  `nombreTarea` varchar(30) NOT NULL,
  `idRankingTarea` int(11) NOT NULL,
  PRIMARY KEY (`idTarea`),
  KEY `idRankingTarea` (`idRankingTarea`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=251 ;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`idTarea`, `nombreTarea`, `idRankingTarea`) VALUES
(1, 'Tarea 01', 1),
(2, 'Tarea 02', 1),
(3, 'Tarea 03', 1),
(4, 'Tarea 04', 1),
(5, 'Tarea 05', 1),
(6, 'Tarea 06', 1),
(7, 'Tarea 07', 1),
(8, 'Tarea 08', 1),
(9, 'Tarea 09', 1),
(10, 'Tarea 10', 1),
(11, 'Tarea 01', 2),
(12, 'Tarea 02', 2),
(13, 'Tarea 03', 2),
(14, 'Tarea 04', 2),
(15, 'Tarea 05', 2),
(16, 'Tarea 06', 2),
(17, 'Tarea 07', 2),
(18, 'Tarea 08', 2),
(19, 'Tarea 09', 2),
(20, 'Tarea 10', 2),
(21, 'Tarea 01', 3),
(22, 'Tarea 02', 3),
(23, 'Tarea 03', 3),
(24, 'Tarea 04', 3),
(25, 'Tarea 05', 3),
(26, 'Tarea 06', 3),
(27, 'Tarea 07', 3),
(28, 'Tarea 08', 3),
(29, 'Tarea 09', 3),
(30, 'Tarea 10', 3),
(31, 'Tarea 11', 1),
(32, 'Tarea 12', 1),
(33, 'Tarea 13', 1),
(34, 'Tarea 14', 1),
(35, 'Tarea 15', 1),
(36, 'Tarea 16', 1),
(37, 'Tarea 17', 1),
(38, 'Tarea 18', 1),
(39, 'Tarea 19', 1),
(40, 'Tarea 20', 1),
(41, 'Tarea 21', 1),
(42, 'Tarea 22', 1),
(43, 'Tarea 23', 1),
(44, 'Tarea 24', 1),
(45, 'Tarea 25', 1),
(46, 'Tarea 26', 1),
(47, 'Tarea 27', 1),
(48, 'Tarea 28', 1),
(49, 'Tarea 29', 1),
(50, 'Tarea 30', 1),
(51, 'Tarea 31', 1),
(52, 'Tarea 32', 1),
(53, 'Tarea 33', 1),
(54, 'Tarea 34', 1),
(55, 'Tarea 35', 1),
(56, 'Tarea 36', 1),
(57, 'Tarea 37', 1),
(58, 'Tarea 38', 1),
(59, 'Tarea 39', 1),
(60, 'Tarea 40', 1),
(61, 'Tarea 41', 1),
(62, 'Tarea 42', 1),
(63, 'Tarea 43', 1),
(64, 'Tarea 44', 1),
(65, 'Tarea 45', 1),
(66, 'Tarea 46', 1),
(67, 'Tarea 47', 1),
(68, 'Tarea 48', 1),
(69, 'Tarea 49', 1),
(70, 'Tarea 50', 1),
(71, 'Tarea 11', 2),
(72, 'Tarea 12', 2),
(73, 'Tarea 13', 2),
(74, 'Tarea 14', 2),
(75, 'Tarea 15', 2),
(76, 'Tarea 16', 2),
(77, 'Tarea 17', 2),
(78, 'Tarea 18', 2),
(79, 'Tarea 19', 2),
(80, 'Tarea 20', 2),
(81, 'Tarea 21', 2),
(82, 'Tarea 22', 2),
(83, 'Tarea 23', 2),
(84, 'Tarea 24', 2),
(85, 'Tarea 25', 2),
(86, 'Tarea 26', 2),
(87, 'Tarea 27', 2),
(88, 'Tarea 28', 2),
(89, 'Tarea 29', 2),
(90, 'Tarea 30', 2),
(91, 'Tarea 31', 2),
(92, 'Tarea 32', 2),
(93, 'Tarea 33', 2),
(94, 'Tarea 34', 2),
(95, 'Tarea 35', 2),
(96, 'Tarea 36', 2),
(97, 'Tarea 37', 2),
(98, 'Tarea 38', 2),
(99, 'Tarea 39', 2),
(100, 'Tarea 40', 2),
(101, 'Tarea 41', 2),
(102, 'Tarea 42', 2),
(103, 'Tarea 43', 2),
(104, 'Tarea 44', 2),
(105, 'Tarea 45', 2),
(106, 'Tarea 46', 2),
(107, 'Tarea 47', 2),
(108, 'Tarea 48', 2),
(109, 'Tarea 49', 2),
(110, 'Tarea 50', 2),
(111, 'Tarea 11', 3),
(112, 'Tarea 12', 3),
(113, 'Tarea 13', 3),
(114, 'Tarea 14', 3),
(115, 'Tarea 15', 3),
(116, 'Tarea 16', 3),
(117, 'Tarea 17', 3),
(118, 'Tarea 18', 3),
(119, 'Tarea 19', 3),
(120, 'Tarea 20', 3),
(121, 'Tarea 21', 3),
(122, 'Tarea 22', 3),
(123, 'Tarea 23', 3),
(124, 'Tarea 24', 3),
(125, 'Tarea 25', 3),
(126, 'Tarea 26', 3),
(127, 'Tarea 27', 3),
(128, 'Tarea 28', 3),
(129, 'Tarea 29', 3),
(130, 'Tarea 30', 3),
(131, 'Tarea 31', 3),
(132, 'Tarea 32', 3),
(133, 'Tarea 33', 3),
(134, 'Tarea 34', 3),
(135, 'Tarea 35', 3),
(136, 'Tarea 36', 3),
(137, 'Tarea 37', 3),
(138, 'Tarea 38', 3),
(139, 'Tarea 39', 3),
(140, 'Tarea 40', 3),
(141, 'Tarea 41', 3),
(142, 'Tarea 42', 3),
(143, 'Tarea 43', 3),
(144, 'Tarea 44', 3),
(145, 'Tarea 45', 3),
(146, 'Tarea 46', 3),
(147, 'Tarea 47', 3),
(148, 'Tarea 48', 3),
(149, 'Tarea 49', 3),
(150, 'Tarea 50', 3),
(151, 'Tarea 01', 5),
(152, 'Tarea 02', 5),
(153, 'Tarea 03', 5),
(154, 'Tarea 04', 5),
(155, 'Tarea 05', 5),
(156, 'Tarea 06', 5),
(157, 'Tarea 07', 5),
(158, 'Tarea 08', 5),
(159, 'Tarea 09', 5),
(160, 'Tarea 10', 5),
(161, 'Tarea 11', 5),
(162, 'Tarea 12', 5),
(163, 'Tarea 13', 5),
(164, 'Tarea 14', 5),
(165, 'Tarea 15', 5),
(166, 'Tarea 16', 5),
(167, 'Tarea 17', 5),
(168, 'Tarea 18', 5),
(169, 'Tarea 19', 5),
(170, 'Tarea 20', 5),
(171, 'Tarea 21', 5),
(172, 'Tarea 22', 5),
(173, 'Tarea 23', 5),
(174, 'Tarea 24', 5),
(175, 'Tarea 25', 5),
(176, 'Tarea 26', 5),
(177, 'Tarea 27', 5),
(178, 'Tarea 28', 5),
(179, 'Tarea 29', 5),
(180, 'Tarea 30', 5),
(181, 'Tarea 31', 5),
(182, 'Tarea 32', 5),
(183, 'Tarea 33', 5),
(184, 'Tarea 34', 5),
(185, 'Tarea 35', 5),
(186, 'Tarea 36', 5),
(187, 'Tarea 37', 5),
(188, 'Tarea 38', 5),
(189, 'Tarea 39', 5),
(190, 'Tarea 40', 5),
(191, 'Tarea 41', 5),
(192, 'Tarea 42', 5),
(193, 'Tarea 43', 5),
(194, 'Tarea 44', 5),
(195, 'Tarea 45', 5),
(196, 'Tarea 46', 5),
(197, 'Tarea 47', 5),
(198, 'Tarea 48', 5),
(199, 'Tarea 49', 5),
(200, 'Tarea 50', 5),
(201, 'Tarea 01', 38),
(202, 'Tarea 02', 38),
(203, 'Tarea 03', 38),
(204, 'Tarea 04', 38),
(205, 'Tarea 05', 38),
(206, 'Tarea 06', 38),
(207, 'Tarea 07', 38),
(208, 'Tarea 08', 38),
(209, 'Tarea 09', 38),
(210, 'Tarea 10', 38),
(211, 'Tarea 11', 38),
(212, 'Tarea 12', 38),
(213, 'Tarea 13', 38),
(214, 'Tarea 14', 38),
(215, 'Tarea 15', 38),
(216, 'Tarea 16', 38),
(217, 'Tarea 17', 38),
(218, 'Tarea 18', 38),
(219, 'Tarea 19', 38),
(220, 'Tarea 20', 38),
(221, 'Tarea 21', 38),
(222, 'Tarea 22', 38),
(223, 'Tarea 23', 38),
(224, 'Tarea 24', 38),
(225, 'Tarea 25', 38),
(226, 'Tarea 26', 38),
(227, 'Tarea 27', 38),
(228, 'Tarea 28', 38),
(229, 'Tarea 29', 38),
(230, 'Tarea 30', 38),
(231, 'Tarea 31', 38),
(232, 'Tarea 32', 38),
(233, 'Tarea 33', 38),
(234, 'Tarea 34', 38),
(235, 'Tarea 35', 38),
(236, 'Tarea 36', 38),
(237, 'Tarea 37', 38),
(238, 'Tarea 38', 38),
(239, 'Tarea 39', 38),
(240, 'Tarea 40', 38),
(241, 'Tarea 41', 38),
(242, 'Tarea 42', 38),
(243, 'Tarea 43', 38),
(244, 'Tarea 44', 38),
(245, 'Tarea 45', 38),
(246, 'Tarea 46', 38),
(247, 'Tarea 47', 38),
(248, 'Tarea 48', 38),
(249, 'Tarea 49', 38),
(250, 'Tarea 50', 38);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tareaalumno`
--
ALTER TABLE `tareaalumno`
  ADD CONSTRAINT `tareaalumno_ibfk_1` FOREIGN KEY (`idTareaAl`) REFERENCES `tareas` (`idTarea`) ON DELETE CASCADE,
  ADD CONSTRAINT `tareaalumno_ibfk_2` FOREIGN KEY (`nickAlumnoTarea`) REFERENCES `alumno` (`nickAlumno`) ON DELETE CASCADE;

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `tareas_ibfk_1` FOREIGN KEY (`idRankingTarea`) REFERENCES `rankings` (`idRanking`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
