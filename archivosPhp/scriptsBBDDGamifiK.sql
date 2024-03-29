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

create TABLE tareaAlumno(
  idTareaAl int(11)not null,
	nickAlumnoTarea varchar(30) not null,
  puntuacion double default 0.00,
	PRIMARY KEY (idTareaAl,nickAlumnoTarea),
  FOREIGN KEY (idTareaAl) REFERENCES tareas (idTarea) on delete cascade,
  FOREIGN KEY (nickAlumnoTarea) REFERENCES alumno (nickAlumno) on delete cascade
);

--tabla tareas que ya no sirve
-- create table tareas
--   (
--   nombreTarea varchar(30),
--   nickAlumnoTarea varchar(30),
--   idRankingTarea integer,
--   puntuacion double,
--   PRIMARY KEY (nombreTarea,nickAlumnoTarea,idRankingTarea),
--   FOREIGN KEY (idRankingTarea) REFERENCES rankings (idRanking) on delete cascade,
--   FOREIGN KEY (nickAlumnoTarea) REFERENCES alumno (nickAlumno) on delete cascade
--   );

