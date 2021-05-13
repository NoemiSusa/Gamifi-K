-- phpMyAdmin SQL Dump
-- version 4.7.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 07-05-2021 a las 18:08:47
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
-- Base de datos: `gamifik`
--

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
('', '', '', '', '', '', ''),
('Lucian123', 'lucian123', 'Lucians123', 'Lucian123@Lucian123.com', 'w/TbGJbjbG6fKQcap8OQlQ==', 'centroLucian123', 'Profe'),
('Prova10', 'prova10', 'proves10', 'prova10@prova10.com', 'G9iM/UM6cTiyVp6hfTBxSw==', 'centroProva10', 'Profe'),
('Prova11', 'prova10', 'proves11', 'prova11@prova11.com', 'SNFKbZzVXYHWvS7tXj2OgQ==', 'centroProva11', 'Profe11'),
('Prova9', 'prova9', 'Proves9', 'Prova9@prova.com', 'N+6uPjNlO+jt7bywyMBB/g==', 'centreProva9', 'Profe9');

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
(1, 'ranking1', 'Prova9', '4/4/2021', 1234567891234, 'no'),
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
(17, 'qwertyui', 'Lucian123', '4/5/2021', 1620150456685, '02/05/2021');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `nombreTarea` varchar(30) NOT NULL DEFAULT '',
  `nickAlumnoTarea` varchar(30) NOT NULL DEFAULT '',
  `idRankingTarea` int(11) NOT NULL DEFAULT '0',
  `puntuacion` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`nombreTarea`, `nickAlumnoTarea`, `idRankingTarea`, `puntuacion`) VALUES
('act1', 'Prova1', 1, 80.55),
('act1', 'Prova1', 2, 90.45),
('act1', 'Prova1', 3, 904.55),
('act1', 'Prova1', 5, 70.46),
('act1', 'Prova2', 3, 92.44),
('act1', 'Prova3', 3, 90.74),
('act1', 'Prova3', 4, 92.44),
('act1', 'Prova3', 5, 65.46),
('act2', 'Prova1', 1, 20.1),
('act2', 'Prova1', 5, 48.98),
('act2', 'Prova2', 4, 80.36),
('act2', 'Prova2', 5, 80.36),
('act3', 'Prova1', 1, 80),
('act3', 'Prova2', 1, 78.76),
('act3', 'Prova3', 5, 98.99);

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
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`nombreTarea`,`nickAlumnoTarea`,`idRankingTarea`),
  ADD KEY `idRankingTarea` (`idRankingTarea`),
  ADD KEY `nickAlumnoTarea` (`nickAlumnoTarea`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `rankings`
--
ALTER TABLE `rankings`
  MODIFY `idRanking` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `rankings`
--
ALTER TABLE `rankings`
  ADD CONSTRAINT `rankings_ibfk_1` FOREIGN KEY (`nickProfesorRK`) REFERENCES `profesor` (`nickProfesor`) ON DELETE CASCADE;

--
-- Filtros para la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD CONSTRAINT `tareas_ibfk_1` FOREIGN KEY (`idRankingTarea`) REFERENCES `rankings` (`idRanking`) ON DELETE CASCADE,
  ADD CONSTRAINT `tareas_ibfk_2` FOREIGN KEY (`nickAlumnoTarea`) REFERENCES `alumno` (`nickAlumno`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
