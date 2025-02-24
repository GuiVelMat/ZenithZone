DELETE FROM `horarios`;
DELETE FROM `deportes`;
DELETE FROM `pistas`;
DELETE FROM `pista_privadas`;
DELETE FROM `images`;
DELETE FROM `usuarios`;
DELETE FROM `entrenadores`;
DELETE FROM `entrenamientos`;
DELETE FROM `admins`;
DELETE FROM `salas`;
DELETE FROM `reservas`;
DELETE FROM `graficas`;
DELETE FROM `favorites`;
DELETE FROM `follows`;
DELETE FROM `deporte_pista`;
DELETE FROM `entrenamiento_profile`;

INSERT INTO `horarios` (`id`, `hora`) VALUES
(1, 'mañana'),
(2, 'mediodia'),
(3, 'tarde'),
(4, 'noche');

INSERT INTO `deportes` (`id`, `nombre`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Futbol', 'Futbol--123', '2024-11-17 14:33:24', '2024-11-17 14:33:24'),
(2, 'Baloncesto', 'Baloncesto--123', '2024-11-17 14:33:24', '2024-11-17 14:33:24'),
(3, 'Tenis', 'Tenis--123', '2024-11-17 14:33:24', '2024-11-17 14:33:24'),
(4, 'Volleyball', 'Volleyball--123', '2024-11-17 14:33:24', '2024-11-17 14:33:24'),
(5, 'Escalada', 'Escalada--123', '2024-11-17 14:33:24', '2024-11-17 14:33:24'),
(6, 'Ciclismo', 'Ciclismo--123', '2024-11-17 14:33:24', '2024-11-17 14:33:24'),
(7, 'Natación', 'Natación--123', '2024-11-17 14:33:24', '2024-11-17 14:33:24'),
(8, 'Padel', 'Padel--123', '2024-11-17 14:33:24', '2024-11-17 14:33:24');

INSERT INTO `pistas` (`id`, `nombre`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Pista Atletismo', 'pista-atletismo', '2024-11-17 15:42:34', '2024-11-17 15:42:34'),
(2, 'Piscina olímpica', 'piscina-olimpica', '2024-11-17 15:42:57', '2024-11-17 15:42:57'),
(3, 'Rocódromo', 'rocodromo', '2024-11-17 15:42:57', '2024-11-17 15:42:57'),
(4, 'Pista de Padel', 'pista-padel', '2024-11-17 15:44:29', '2024-11-17 15:44:29'),
(5, 'Pista Ciclismo interior', 'pista-ciclismo-interior', '2024-11-17 15:44:29', '2024-11-17 15:44:29'),
(6, 'Cancha de Baloncesto', 'cancha-baloncesto', '2024-11-17 16:10:00', '2024-11-17 16:10:00'),
(7, 'Campo de Futbol 11', 'campo-futbol-11', '2024-11-17 16:10:00', '2024-11-17 16:10:00'),
(8, 'Pista de Tenis', 'pista-tenis', '2024-11-17 16:10:00', '2024-11-17 16:10:00'),
(9, 'Cancha de Volleyball', 'cancha-volleyball', '2024-11-17 16:10:00', '2024-11-17 16:10:00'),
(10, 'Velódromo', 'velodromo', '2024-11-17 16:10:00', '2024-11-17 16:10:00'),
(11, 'Campo de Rugby', 'campo-rugby', '2024-12-02 10:00:00', '2024-12-02 10:00:00'),
(12, 'Pista de Patinaje', 'pista-patinaje', '2024-12-02 10:00:00', '2024-12-02 10:00:00'),
(13, 'Sala de Artes Marciales', 'sala-artes-marciales', '2024-12-02 10:00:00', '2024-12-02 10:00:00'),
(14, 'Zona CrossFit', 'zona-crossfit', '2024-12-02 10:00:00', '2024-12-02 10:00:00'),
(15, 'Estadio de Atletismo', 'estadio-atletismo', '2024-12-02 10:00:00', '2024-12-02 10:00:00'),
(16, 'Zona de Tiro con Arco', 'zona-tiro-arco', '2024-12-02 10:00:00', '2024-12-02 10:00:00'),
(17, 'Campo de Beisbol', 'campo-beisbol', '2024-12-02 10:00:00', '2024-12-02 10:00:00'),
(18, 'Parque de Calistenia', 'parque-calistenia', '2024-12-02 10:00:00', '2024-12-02 10:00:00'),
(19, 'Sala de Esgrima', 'sala-esgrima', '2024-12-02 10:00:00', '2024-12-02 10:00:00'),
(20, 'Zona de Karts', 'zona-karts', '2024-12-02 10:00:00', '2024-12-02 10:00:00');

INSERT INTO `pista_privadas` (`id`, `nombre`, `slug`, `info`, `created_at`, `updated_at`) VALUES
(1, 'Pista privada 1', 'Pista-privada-1', "", '2024-11-17 15:42:34', '2024-11-17 15:42:34'),
(2, 'Pista privada 2', 'Pista-privada-2', "", '2024-11-17 15:42:57', '2024-11-17 15:42:57'),
(3, 'Pista privada 3', 'Pista-privada-3', "", '2024-11-17 15:42:57', '2024-11-17 15:42:57'),
(4, 'Pista privada 4', 'Pista-privada-4', "", '2024-11-17 15:44:29', '2024-11-17 15:44:29'),
(5, 'Pista privada 5', 'Pista-privada-5', "", '2024-11-17 15:55:14', '2024-11-17 15:55:14'),
(6, 'Pista privada 6', 'Pista-privada-6', "", '2024-11-17 16:11:00', '2024-11-17 16:11:00'),
(7, 'Pista privada 7', 'Pista-privada-7', "", '2024-11-17 16:11:00', '2024-11-17 16:11:00'),
(8, 'Pista privada 8', 'Pista-privada-8', "", '2024-11-17 16:11:00', '2024-11-17 16:11:00'),
(9, 'Pista privada 9', 'Pista-privada-9', "", '2024-11-17 16:11:00', '2024-11-17 16:11:00'),
(10, 'Pista privada 10', 'Pista-privada-10', "", '2024-11-17 16:11:00', '2024-11-17 16:11:00');

INSERT INTO `images` (`image_url`, `imageable_type`, `imageable_id`) VALUES
('futbol.jpg', 'App\\Models\\Deporte', 1),
('baloncesto.jpg', 'App\\Models\\Deporte', 2),
('tenis.jpg', 'App\\Models\\Deporte', 3),
('volleyball.jpg', 'App\\Models\\Deporte', 4),
('escalada.webp', 'App\\Models\\Deporte', 5),
('ciclismo.jpg', 'App\\Models\\Deporte', 6),
('natacion.webp', 'App\\Models\\Deporte', 7),
('padel.png', 'App\\Models\\Deporte', 8),
('pista_atletismo.jpg', 'App\\Models\\Pista', 1),
('piscina.jpg', 'App\\Models\\Pista', 2),
('rocodromo.jpg', 'App\\Models\\Pista', 3),
('pista_padel.jpg', 'App\\Models\\Pista', 4),
('pista_ciclismo.jpg', 'App\\Models\\Pista', 5),
('maria.jpg', 'App\\Models\\Entrenador', 3),
('luis.jpg', 'App\\Models\\Entrenador', 2),
('laura.jpg', 'App\\Models\\Entrenador', 1);


INSERT INTO `usuarios` (`id`,`email`, `password`) VALUES
(1, 'juan.perez@example.com', '$2a$10$A12RsAXyZ6L8y/SmFFSSQORyA3oCqx1mzRsI3BWb1Zdp/lSQIG3Kq'),
(2, 'ana.garcia@example.com', '$2a$10$A12RsAXyZ6L8y/SmFFSSQORyA3oCqx1mzRsI3BWb1Zdp/lSQIG3Kq'),
(3,'carlos.lopez@example.com', '$2a$10$A12RsAXyZ6L8y/SmFFSSQORyA3oCqx1mzRsI3BWb1Zdp/lSQIG3Kq');

INSERT INTO `profiles` (`id`,`numerosocio`, `nombre`, `apellidos`, `bio`, `image`, `edad`) VALUES
(1, '12345678', 'Juan', 'Pérez', '', '', 30),
(2,  '87654321', 'Ana', 'García', '', '', 25),
(3, '22223333','Carlos', 'López', '', '', 28);

INSERT INTO `entrenadores` (`id`, `nombre`, `apellidos`, `numeroEntrenador`, `email`, `password`, `deporte_id`, `edad`) VALUES
(1, 'Laura', 'Martínez', 'Laura-4532', 'laura.martinez@example.com', '$2y$12$9X9mukcZO.xjHYRmBCKWCO9xq4ySP1GWnDx60x5D6IJVRbasYU.Ru', 1, 35),
(2, 'Luis', 'Fernández', 'Luis-8233', 'luis.fernandez@example.com', '$2y$12$vCM7aGEpVWF0Zhw.lc\/DKe0E9.btFHJSB.3vZdzeGfei7Amxa0RA6', 2, 40),
(3, 'María', 'Gómez', 'Maria-9267', 'maria.gomez@example.com', '$2y$12$gqMbj6IVYkc0FnZzmglFLeJoiwNpvacdKmAD7yLhXLdxbNmUDfKj6', 3, 32);

INSERT INTO `entrenamientos` (`id`, `nombre`, `slug`, `descripcion`, `dia`, `duracion`, `max_plazas`, `precio`,`status`, `deporte_id`, `horario_id`, `pista_privada_id`,`entrenador_id`, `created_at`, `updated_at`) VALUES
(1, 'Clase Básica A', 'clase-basica-a', 'Clase de iniciación al deporte A', 'Domingo', 60, 20, 15,"pending", 1, 1, 1, 2,'2024-11-17 15:47:05', '2024-11-17 15:47:05'),
(2, 'Clase Avanzada B', 'clase-avanzada-b', 'Clase avanzada de deporte B', 'Martes', 90, 15, 30,"pending" ,2, 2, 1, 1,'2024-11-17 15:48:19', '2024-11-17 15:48:19'),
(3, 'Clase Intermedia C', 'clase-intermedia-c', 'Clase intermedia de deporte C', 'Jueves', 75, 25, 20, "accepted",3, 3, 2, 3,'2024-11-17 15:48:19', '2024-11-17 15:48:19'),
(4, 'Clase Intensiva D', 'clase-intensiva-d', 'Clase intensiva de deporte D', 'Domingo', 120, 10, 40,"denied", 4, 4, 3, 2,'2024-11-17 15:52:06', '2024-11-17 15:52:06'),
(5, 'Clase Adaptada E', 'clase-adaptada-e', 'Clase adaptada para personas con necesidades especiales', 'Miercoles', 60, 15, 25,"accepted", 4, 2, 4, 3,'2024-11-17 15:52:06', '2024-11-17 15:52:06'),
(6, 'Clase Avanzada F', 'clase-avanzada-f', 'Clase avanzada de deporte F', 'Viernes', 90, 20, 35, "pending", 5, 3, 5, 1, '2024-11-17 15:52:06', '2024-11-17 15:52:06'),
(7, 'Clase Básica G', 'clase-basica-g', 'Clase de iniciación al deporte G', 'Sábado', 60, 25, 20, "accepted", 6, 4, 6, 2, '2024-11-17 15:52:06', '2024-11-17 15:52:06'),
(8, 'Clase Intermedia H', 'clase-intermedia-h', 'Clase intermedia de deporte H', 'Lunes', 75, 15, 30, "denied", 7, 1, 7, 3, '2024-11-17 15:52:06', '2024-11-17 15:52:06'),
(9, 'Clase Intensiva I', 'clase-intensiva-i', 'Clase intensiva de deporte I', 'Miércoles', 120, 10, 40, "pending", 8, 2, 8, 1, '2024-11-17 15:52:06', '2024-11-17 15:52:06'),
(10, 'Clase Adaptada J', 'clase-adaptada-j', 'Clase adaptada para personas con necesidades especiales', 'Jueves', 60, 20, 25, "accepted", 1, 3, 9, 2, '2024-11-17 15:52:06', '2024-11-17 15:52:06');

INSERT INTO `admins` (`id`, `nombre`, `email`, `numeroAdmin`, `password`) VALUES
(1, 'Admin1', 'admin1@example.com','admin1-2343', 'adminpass1'),
(2, 'Admin2', 'admin2@example.com','admin2-3444' ,'$2y$12$.5jtdYndBlMFKJVPIvpWTu1m9dinBzNiJkcyGw0En8oINrxh.y2ru');

INSERT INTO `salas` (`id`, `nombre`, `tamaño`, `ubicacion`, `entrenador_id`) VALUES
(1, 'Sala de Cardio', 50, 'Edificio A', 1),
(2, 'Sala de Pesas', 70, 'Edificio B', 2),
(3, 'Sala de Yoga', 30, 'Edificio C', 3);

INSERT INTO `reservas` (`id`, `pista_id`, `profile_id`, `horario_id`, `fecha`) VALUES
 (1, 1, 1, 2, '2024-12-20'),
 (2, 1, 2, 3, '2024-12-21'),
 (3, 2, 3, 4, '2024-12-22'),
 (4, 3, 1, 1, '2024-12-23'),
 (5, 4, 2, 2, '2024-12-24'), 
 (6, 5, 3, 3, '2024-12-25'),
 (7, 6, 1, 4, '2024-12-26'), 
 (8, 1, 2, 1, '2024-12-27'), 
 (9, 2, 3, 2, '2024-12-28'), 
 (10, 3, 1, 3, '2024-12-29'), 
 (11, 4, 2, 4, '2024-12-30'), 
 (12, 5, 3, 1, '2024-12-31'), 
 (13, 6, 1, 2, '2025-01-10'), 
 (14, 1, 2, 3, '2025-01-12'), 
 (15, 2, 3, 4, '2025-01-15'), 
 (16, 3, 1, 1, '2025-01-18'), 
 (17, 4, 2, 2, '2025-01-20'), 
 (18, 5, 3, 3, '2025-01-22'), 
 (19, 6, 1, 4, '2025-01-25'), 
 (20, 1, 2, 1, '2025-01-27'); 

INSERT INTO `graficas` (`id`, `seccion`, `nivel`, `Mes`, `año`, `profile_id`) VALUES
(1, 'Motivación', 70, 1, 2024, 1),
(2, 'Agilidad', 60, 1, 2024, 1),
(3, 'Velocidad', 50, 1, 2024, 1),
(4, 'Aguante', 90, 1, 2024, 1),
(5, 'Fuerza', 80, 1, 2024, 1),
(6, 'Motivación', 80, 2, 2024, 1),
(7, 'Agilidad', 70, 2, 2024, 1),
(8, 'Velocidad', 60, 2, 2024, 1),
(9, 'Aguante', 95, 2, 2024, 1),
(10, 'Fuerza', 85, 2, 2024, 1),
(11, 'Motivación', 50, 1, 2025, 1),
(12, 'Agilidad', 60, 1, 2025, 1),
(13, 'Velocidad', 50, 1, 2025, 1),
(14, 'Aguante', 70, 1, 2025, 1),
(15, 'Fuerza', 60, 1, 2025, 1),
(16, 'Motivación', 70, 2, 2025, 1),
(17, 'Agilidad', 70, 2, 2025, 1),
(18, 'Velocidad', 55, 2, 2025, 1),
(19, 'Aguante', 90, 2, 2025, 1),
(20, 'Fuerza', 80, 2, 2025, 1);

INSERT INTO `favorites` (`profile_id`, `entrenamiento_id`) VALUES
(1, 2),
(2, 3),
(3, 4);

INSERT INTO `follows` (`follower_id`, `followed_id`) VALUES
(1, 2),
(2, 3),
(3, 1);

INSERT INTO `deporte_pista` (`deporte_id`, `pista_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2024-11-17 15:53:53', '2024-11-17 15:53:53'),
(1, 2, '2024-11-17 15:53:53', '2024-11-17 15:53:53'),
(2, 3, '2024-11-17 15:54:42', '2024-11-17 15:54:42'),
(2, 4, '2024-11-17 15:54:42', '2024-11-17 15:54:42'),
(3, 5, '2024-11-17 15:55:14', '2024-11-17 15:55:14'),
(4, 1, '2024-11-17 15:55:14', '2024-11-17 15:55:14'),
(5, 2, '2024-11-17 15:55:55', '2024-11-17 15:55:55'),
(2, 6, '2024-11-17 16:11:00', '2024-11-17 16:11:00'), -- Baloncesto - Cancha Baloncesto
(1, 7, '2024-11-17 16:11:00', '2024-11-17 16:11:00'), -- Futbol - Campo Futbol 11
(3, 8, '2024-11-17 16:11:00', '2024-11-17 16:11:00'), -- Tenis - Pista Tenis
(4, 9, '2024-11-17 16:11:00', '2024-11-17 16:11:00'), -- Volleyball - Cancha Volleyball
(6, 10, '2024-11-17 16:11:00', '2024-11-17 16:11:00'), -- Ciclismo - Velódromo
(1, 11, '2024-12-02 10:10:00', '2024-12-02 10:10:00'), -- Futbol - Campo Rugby
(7, 12, '2024-12-02 10:10:00', '2024-12-02 10:10:00'), -- Natación - Pista Patinaje (deporte alternativo indoor)
(4, 13, '2024-12-02 10:10:00', '2024-12-02 10:10:00'), -- Volleyball - Sala Artes Marciales (Cross-skill training)
(6, 14, '2024-12-02 10:10:00', '2024-12-02 10:10:00'), -- Ciclismo - Zona CrossFit (entrenamiento complementario)
(1, 15, '2024-12-02 10:10:00', '2024-12-02 10:10:00'), -- Futbol - Estadio Atletismo
(5, 16, '2024-12-02 10:10:00', '2024-12-02 10:10:00'), -- Escalada - Tiro con Arco (coordinación requerida)
(8, 17, '2024-12-02 10:10:00', '2024-12-02 10:10:00'), -- Padel - Campo Beisbol (ubicación mixta)
(4, 18, '2024-12-02 10:10:00', '2024-12-02 10:10:00'), -- Volleyball - Parque Calistenia
(3, 19, '2024-12-02 10:10:00', '2024-12-02 10:10:00'), -- Tenis - Sala Esgrima (destreza y reflejos)
(6, 20, '2024-12-02 10:10:00', '2024-12-02 10:10:00'); -- Ciclismo - Zona Karts

INSERT INTO `entrenamiento_profile` (`entrenamiento_id`, `profile_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2024-11-17 15:53:53', '2024-11-17 15:53:53'),
(1, 2, '2024-11-17 15:53:53', '2024-11-17 15:53:53'),
(2, 3, '2024-11-17 15:54:42', '2024-11-17 15:54:42'),
(2, 2, '2024-11-17 15:54:42', '2024-11-17 15:54:42'),
(3, 1, '2024-11-17 15:55:14', '2024-11-17 15:55:14'),
(4, 2, '2024-11-17 15:55:14', '2024-11-17 15:55:14'),
(5, 2, '2024-11-17 15:55:55', '2024-11-17 15:55:55');



INSERT INTO `deporte_pista_privada` (`deporte_id`, `pista_privada_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2024-11-17 15:53:53', '2024-11-17 15:53:53'),
(1, 2, '2024-11-17 15:53:53', '2024-11-17 15:53:53'),
(2, 3, '2024-11-17 15:54:42', '2024-11-17 15:54:42'),
(2, 4, '2024-11-17 15:54:42', '2024-11-17 15:54:42'),
(3, 5, '2024-11-17 15:55:14', '2024-11-17 15:55:14'),
(4, 1, '2024-11-17 15:55:14', '2024-11-17 15:55:14'),
(5, 2, '2024-11-17 15:55:55', '2024-11-17 15:55:55'),
(2, 6, '2024-11-17 16:11:00', '2024-11-17 16:11:00'),
(1, 7, '2024-11-17 16:11:00', '2024-11-17 16:11:00'),
(3, 8, '2024-11-17 16:11:00', '2024-11-17 16:11:00'),
(4, 9, '2024-11-17 16:11:00', '2024-11-17 16:11:00'),
(6, 10, '2024-11-17 16:11:00', '2024-11-17 16:11:00');