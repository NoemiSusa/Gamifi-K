CREATE DATABASE proves;

create TABLE profesor(
	nickProfesor VARCHAR(30) PRIMARY key,
	nombreProfesor VARCHAR(20) NOT null,
	apellidosProfesor VARCHAR(40) NOT null,
	emailProfesor VARCHAR(40) NOT null,
	contrasenyaProfesor VARCHAR(50) NOT null,
	centroProfesor VARCHAR(20) NOT null,
	imagenProfesor VARCHAR(50) NOT null
);


CREATE TABLE alumno(
 	nickAlumno VARCHAR (30) PRIMARY key,
 	nombreAlumno VARCHAR (20) NOT NULL,
 	apellidosAlumno VARCHAR (40) NOT NULL,
 	emailAlumno VARCHAR (40) NOT NULL,
 	contrasenyaAlumno VARCHAR (50) NOT NULL,
 	imagenAlumno VARCHAR (50) NOT null
);

Create table rankings(
  idRanking integer auto_increment,
  nombreRanking VARCHAR(30) NOT null,
  nickProfesorRK VARCHAR(30) NOT null,
  fechaInicio VARCHAR(10) NOT null,
  codigoAcceso BIGINT(13) NOT NULL,
  fechaFinal VARCHAR(10),
  PRIMARY KEY (idRanking),
  UNIQUE(nombreRanking,nickProfesorRK,fechaInicio),
  FOREIGN KEY (nickProfesorRK) REFERENCES profesor (nickProfesor) on delete cascade
);

CREATE TABLE IF NOT EXISTS tareas (
  idTarea int(11) AUTO_INCREMENT Primary key,
  nombreTarea varchar(30) NOT NULL,
  idRankingTarea int(11) NOT NULL,
 FOREIGN KEY (idRankingTarea) REFERENCES rankings (idRanking) on delete cascade
);

create TABLE tareaAlumno
(
  idTareaAl int(11)not null,
	nickAlumnoTarea varchar(30) not null,
  puntuacion double default 0.00,
	PRIMARY KEY (idTareaAl,nickAlumnoTarea),
  FOREIGN KEY (idTareaAl) REFERENCES tareas (idTarea) on delete cascade,
  FOREIGN KEY (nickAlumnoTarea) REFERENCES alumno (nickAlumno) on delete cascade
);

--insretar las 50 tareas al crear el ranking
INSERT INTO `tareas`(`nombreTarea`, `idRankingTarea`)
VALUES
('Tarea 1',1),
('Tarea 2',1),
('Tarea 3',1),
('Tarea 4',1),
('Tarea 5',1),
('Tarea 6',1),
('Tarea 7',1),
('Tarea 8',1),
('Tarea 9',1),
('Tarea 10',1),
('Tarea 11',1),
('Tarea 12',1),
('Tarea 13',1),
('Tarea 14',1),
('Tarea 15',1),
('Tarea 16',1),
('Tarea 17',1),
('Tarea 18',1),
('Tarea 19',1),
('Tarea 20',1),
('Tarea 21',1),
('Tarea 22',1),
('Tarea 23',1),
('Tarea 24',1),
('Tarea 25',1),
('Tarea 26',1),
('Tarea 27',1),
('Tarea 28',1),
('Tarea 29',1),
('Tarea 30',1),
('Tarea 31',1),
('Tarea 32',1),
('Tarea 33',1),
('Tarea 34',1),
('Tarea 35',1),
('Tarea 36',1),
('Tarea 37',1),
('Tarea 38',1),
('Tarea 39',1),
('Tarea 40',1),
('Tarea 41',1),
('Tarea 42',1),
('Tarea 43',1),
('Tarea 44',1),
('Tarea 45',1),
('Tarea 46',1),
('Tarea 47',1),
('Tarea 48',1),
('Tarea 49',1),
('Tarea 50',1);

INSERT INTO `tareas`(`nombreTarea`, `idRankingTarea`)
VALUES
('Tarea',2),
('Tarea2',2),
('Tarea3',2),
('Tarea4',2),
('Tarea5',2),
('Tarea6',2),
('Tarea7',2),
('Tarea8',2),
('Tarea9',2),
('Tarea10',2),
('Tarea1',3),
('Tarea2',3),
('Tarea3',3),
('Tarea4',3),
('Tarea5',3),
('Tarea6',3),
('Tarea7',3),
('Tarea8',3),
('Tarea9',3),
('Tarea10',3);

-- insertar tareas_alumno en cuando un alumno se registra a un ranking
INSERT INTO `tareaalumno`(`idTareaAl`, `nickAlumnoTarea`, `puntuacion`)
VALUES
(1,'Prova1',50.60),
(2,'Prova1',80.44),
(3,'Prova1',60.77),
(4,'Prova1',90.66),
(5,'Prova1',83.23),
(6,'Prova1',87.45),
(7,'Prova1',74.32),
(8,'Prova1',65.42),
(9,'Prova1',54.60),
(10,'Prova1',76.44),
(1,'Prova2',50.60),
(2,'Prova2',80.44),
(3,'Prova2',60.77),
(4,'Prova2',90.66),
(5,'Prova2',83.23),
(6,'Prova2',87.45),
(7,'Prova2',74.32),
(8,'Prova2',65.42),
(9,'Prova2',54.60),
(10,'Prova2',76.44),
(1,'Prova3',50.60),
(2,'Prova3',80.44),
(3,'Prova3',60.77),
(4,'Prova3',90.66),
(5,'Prova3',83.23),
(6,'Prova3',87.45),
(7,'Prova3',74.32),
(8,'Prova3',65.42),
(9,'Prova3',54.60),
(10,'Prova3',76.44),
(11,'Prova1',50.60),
(12,'Prova1',80.44),
(13,'Prova1',60.77),
(14,'Prova1',90.66),
(15,'Prova1',83.23),
(16,'Prova1',87.45),
(17,'Prova1',74.32),
(18,'Prova1',65.42),
(19,'Prova1',54.60),
(20,'Prova1',76.44),
(21,'Prova2',50.60),
(22,'Prova2',80.44),
(23,'Prova2',60.77),
(24,'Prova2',90.66),
(25,'Prova2',83.23),
(26,'Prova2',87.45),
(27,'Prova2',74.32),
(28,'Prova2',65.42),
(29,'Prova2',54.60),
(30,'Prova2',76.44),
(11,'Prova3',50.60),
(12,'Prova3',80.44),
(13,'Prova3',60.77),
(14,'Prova3',90.66),
(15,'Prova3',83.23),
(16,'Prova3',87.45),
(17,'Prova3',74.32),
(18,'Prova3',65.42),
(19,'Prova3',54.60),
(20,'Prova3',76.44);


-- seleccionar todas las tareas de un solo ranking
select nombreTarea from tareas where idRankingTarea = 1

--seleccionar una tarea de todos los alumnos mostrando la puntuación
select t.nombreTarea, ta.nickAlumnoTarea,ta.puntuacion
from tareaalumno ta, tareas t
where idTarea = 1 AND
ta.idTareaAl = t.idTarea;

-- Insert de l'alumno a las tareas en cuando un alumno se registra en un ranking
INSERT INTO `tareaalumno`(`idTareaAl`,`nickAlumnoTarea`)VALUES (31,'Prova1');

--select de una tarea concreta de una tarea concreta
SELECT t.nombreTarea, ta.nickAlumnoTarea, ta.puntuacion
FROM tareas t, tareaalumno ta
where ta.idTareaAl = 31
AND ta.idTareaAl = t.idTarea;
