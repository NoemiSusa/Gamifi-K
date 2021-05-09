-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 07-05-2021 a las 18:56:11
-- Versión del servidor: 5.6.34
-- Versión de PHP: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proves`
--
CREATE DATABASE IF NOT EXISTS `proves` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `gamifik`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `nickAlumno` varchar(30) NOT NULL,
  `nombreAlumno` varchar(20) NOT NULL,
  `apellidosAlumno` varchar(40) NOT NULL,
  `emailAlumno` varchar(40) NOT NULL,
  `contrasenyaAlumno` varchar(50) NOT NULL,
  `imagenAlumno` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`nickAlumno`, `nombreAlumno`, `apellidosAlumno`, `emailAlumno`, `contrasenyaAlumno`, `imagenAlumno`) VALUES
('Prova1', 'prova1', 'proves1', 'prova1@prova.com', 'jq1FYsySThs/nay8GJIs3w==', 'Alumno'),
('Prova2', 'prova2', 'proves2', 'prova2@prova2.com', '+OX4dCoRl6wlW2v7MN00Vg==', 'Alumno'),
('Prova3', 'prova3', 'proves3', 'prova3@prova3.com', 'wdjY7xzfALFfrEsdjUXBmg==', 'Alumno');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `nickProfesor` varchar(30) NOT NULL,
  `nombreProfesor` varchar(20) NOT NULL,
  `apellidosProfesor` varchar(40) NOT NULL,
  `emailProfesor` varchar(40) NOT NULL,
  `contrasenyaProfesor` varchar(50) NOT NULL,
  `centroProfesor` varchar(20) NOT NULL,
  `imagenProfesor` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`nickProfesor`, `nombreProfesor`, `apellidosProfesor`, `emailProfesor`, `contrasenyaProfesor`, `centroProfesor`, `imagenProfesor`) VALUES
('Prova10', 'prova10', 'proves10', 'prova10@prova10.com', 'G9iM/UM6cTiyVp6hfTBxSw==', 'centroProva10', 'Profe'),
('Prova11', 'prova10', 'proves11', 'prova11@prova11.com', 'SNFKbZzVXYHWvS7tXj2OgQ==', 'centroProva11', 'Profe11'),
('Prova9', 'prova9', 'Proves9', 'Prova@prova.com', 'N+6uPjNlO+jt7bywyMBB/g==', 'centreProva9', 'Profe9');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rankings`
--

CREATE TABLE `rankings` (
  `idRanking` int(11) NOT NULL,
  `nombreRanking` varchar(30) NOT NULL,
  `nickProfesorRK` varchar(30) NOT NULL,
  `fechaInicio` varchar(10) NOT NULL,
  `codigoAcceso` bigint(13) NOT NULL,
  `fechaFinal` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `rankings`
--

INSERT INTO `rankings` (`idRanking`, `nombreRanking`, `nickProfesorRK`, `fechaInicio`, `codigoAcceso`, `fechaFinal`) VALUES
(1, 'rgk1', 'Prova9', '4/4/2021', 1234567891234, 'no'),
(2, 'rgk2', 'Prova9', '14/4/2021', 1324567891234, 'no'),
(3, 'rgk1', 'Prova10', '14/4/2021', 1324567981234, 'no'),
(4, 'rgk3', 'Prova10', '15/3/2021', 1324657981234, 'no'),
(5, 'rgk4', 'Prova9', '14/4/2021', 1324657982134, 'no'),
(6, 'rgk5', 'Prova9', '14/4/2021', 1324675982134, 'no'),
(7, 'rgk6', 'Prova9', '14/4/2021', 3124675982134, 'no'),
(8, 'rgk7', 'Prova11', '15/4/2021', 3124675982124, 'no'),
(10, 'rgk7', 'Prova11', '15/4/2020', 3124665982124, 'no'),
(11, 'rgk3', 'Prova9', '15/3/2021', 1324657991234, 'no'),
(12, 'rgk1', 'Prova11', '4/4/2021', 1234567891244, 'no'),
(14, 'rgk1', 'Prova10', '4/4/2021', 1234567491234, 'no'),
(15, 'rgk7', 'Prova9', '24/4/2021', 1324675942134, 'no');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareaalumno`
--

CREATE TABLE `tareaalumno` (
  `idTareaAl` int(11) NOT NULL,
  `nickAlumnoTarea` varchar(30) NOT NULL,
  `puntuacion` double DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tareaalumno`
--

INSERT INTO `tareaalumno` (`idTareaAl`, `nickAlumnoTarea`, `puntuacion`) VALUES
(1, 'Prova1', 50.6),
(1, 'Prova2', 50.6),
(1, 'Prova3', 50.6),
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

CREATE TABLE `tareas` (
  `idTarea` int(11) NOT NULL,
  `nombreTarea` varchar(30) NOT NULL,
  `idRankingTarea` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`idTarea`, `nombreTarea`, `idRankingTarea`) VALUES
(1, 'Tarea1', 1),
(2, 'Tarea2', 1),
(3, 'Tarea3', 1),
(4, 'Tarea4', 1),
(5, 'Tarea5', 1),
(6, 'Tarea6', 1),
(7, 'Tarea7', 1),
(8, 'Tarea8', 1),
(9, 'Tarea9', 1),
(10, 'Tarea10', 1),
(11, 'Tarea1', 2),
(12, 'Tarea2', 2),
(13, 'Tarea3', 2),
(14, 'Tarea4', 2),
(15, 'Tarea5', 2),
(16, 'Tarea6', 2),
(17, 'Tarea7', 2),
(18, 'Tarea8', 2),
(19, 'Tarea9', 2),
(20, 'Tarea10', 2),
(21, 'Tarea1', 3),
(22, 'Tarea2', 3),
(23, 'Tarea3', 3),
(24, 'Tarea4', 3),
(25, 'Tarea5', 3),
(26, 'Tarea6', 3),
(27, 'Tarea7', 3),
(28, 'Tarea8', 3),
(29, 'Tarea9', 3),
(30, 'Tarea10', 3),
(31, 'Tarea11', 1),
(32, 'Tarea12', 1),
(33, 'Tarea13', 1),
(34, 'Tarea14', 1),
(35, 'Tarea15', 1),
(36, 'Tarea16', 1),
(37, 'Tarea17', 1),
(38, 'Tarea18', 1),
(39, 'Tarea19', 1),
(40, 'Tarea20', 1),
(41, 'Tarea21', 1),
(42, 'Tarea22', 1),
(43, 'Tarea23', 1),
(44, 'Tarea24', 1),
(45, 'Tarea25', 1),
(46, 'Tarea26', 1),
(47, 'Tarea27', 1),
(48, 'Tarea28', 1),
(49, 'Tarea29', 1),
(50, 'Tarea30', 1),
(51, 'Tarea31', 1),
(52, 'Tarea32', 1),
(53, 'Tarea33', 1),
(54, 'Tarea34', 1),
(55, 'Tarea35', 1),
(56, 'Tarea36', 1),
(57, 'Tarea37', 1),
(58, 'Tarea38', 1),
(59, 'Tarea39', 1),
(60, 'Tarea40', 1),
(61, 'Tarea41', 1),
(62, 'Tarea42', 1),
(63, 'Tarea43', 1),
(64, 'Tarea44', 1),
(65, 'Tarea45', 1),
(66, 'Tarea46', 1),
(67, 'Tarea47', 1),
(68, 'Tarea48', 1),
(69, 'Tarea49', 1),
(70, 'Tarea50', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`nickAlumno`);

--
-- Indices de la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD PRIMARY KEY (`nickProfesor`);

--
-- Indices de la tabla `rankings`
--
ALTER TABLE `rankings`
  ADD PRIMARY KEY (`idRanking`),
  ADD UNIQUE KEY `nombreRanking` (`nombreRanking`,`nickProfesorRK`,`fechaInicio`),
  ADD KEY `nickProfesorRK` (`nickProfesorRK`);

--
-- Indices de la tabla `tareaalumno`
--
ALTER TABLE `tareaalumno`
  ADD PRIMARY KEY (`idTareaAl`,`nickAlumnoTarea`),
  ADD KEY `nickAlumnoTarea` (`nickAlumnoTarea`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`idTarea`),
  ADD KEY `idRankingTarea` (`idRankingTarea`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `rankings`
--
ALTER TABLE `rankings`
  MODIFY `idRanking` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `idTarea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
