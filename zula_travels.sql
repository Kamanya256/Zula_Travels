-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 06, 2026 at 10:40 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zula_travels`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `booking_date` datetime DEFAULT current_timestamp(),
  `status` enum('pending','confirmed','cancelled','completed') NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `currency` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `user_id`, `booking_date`, `status`, `total_amount`, `currency`) VALUES
(1, 1, '2025-12-18 14:50:59', 'pending', 450.00, 'USD');

-- --------------------------------------------------------

--
-- Table structure for table `booking_audit`
--

CREATE TABLE `booking_audit` (
  `id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `table_name` varchar(50) DEFAULT NULL,
  `old_status` varchar(50) DEFAULT NULL,
  `new_status` varchar(50) DEFAULT NULL,
  `changed_by` int(11) DEFAULT NULL,
  `change_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `booking_items`
--

CREATE TABLE `booking_items` (
  `id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `service_type` enum('hotel_room','flight','car_hire','venue','tour') NOT NULL,
  `service_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT 1,
  `unit_price` decimal(10,2) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking_items`
--

INSERT INTO `booking_items` (`id`, `booking_id`, `service_type`, `service_id`, `quantity`, `unit_price`, `start_date`, `end_date`) VALUES
(2, 1, 'hotel_room', 1, 3, 150.00, '2025-01-10', '2025-01-13');

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `destination_id` int(11) NOT NULL,
  `make` varchar(100) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `plate_number` varchar(50) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `seating_capacity` int(11) DEFAULT NULL,
  `transmission` enum('manual','automatic') NOT NULL DEFAULT 'manual',
  `description` text DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `is_available` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `category` varchar(50) DEFAULT 'SUV',
  `base_rate_per_day` decimal(10,2) DEFAULT 50.00,
  `available_quantity` int(11) DEFAULT 1,
  `fuel_type` varchar(20) DEFAULT 'Petrol',
  `engine_capacity` varchar(20) DEFAULT NULL,
  `features` text DEFAULT NULL,
  `driver_included` tinyint(1) DEFAULT 0,
  `daily_rate_with_driver` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `destination_id`, `make`, `model`, `plate_number`, `year`, `seating_capacity`, `transmission`, `description`, `image_url`, `is_available`, `created_at`, `category`, `base_rate_per_day`, `available_quantity`, `fuel_type`, `engine_capacity`, `features`, `driver_included`, `daily_rate_with_driver`) VALUES
(1, 1, 'Toyota', 'Land Cruiser Prado', NULL, 2022, 7, 'manual', '4x4 safari vehicle suitable for long tours', '/assets/cars/prado.jpg', 1, '2025-12-31 12:38:28', 'SUV', 120.00, 1, 'Diesel', NULL, NULL, 0, NULL),
(2, 1, 'Toyota', 'RAV4', NULL, 2021, 5, 'manual', 'Comfortable SUV for city and highway travel', '/assets/cars/rav4.jpg', 1, '2025-12-31 12:38:28', 'Sedan', 80.00, 1, 'Diesel', NULL, NULL, 0, NULL),
(3, 2, 'Toyota', 'Hiace Van', NULL, 2020, 14, 'manual', 'Tour van ideal for groups and airport transfers', '/assets/cars/hiace.jpg', 1, '2025-12-31 12:38:28', 'Van', 150.00, 1, 'Diesel', NULL, NULL, 0, NULL),
(4, 3, 'Nissan', 'X-Trail', NULL, 2019, 5, 'manual', 'Reliable mid-size SUV', '/assets/cars/xtrail.jpg', 1, '2025-12-31 12:38:28', 'Sedan', 90.00, 1, 'Diesel', NULL, NULL, 0, NULL),
(5, 4, 'Toyota', 'Coaster Bus', NULL, 2018, 29, 'manual', 'Large bus for group tours and conferences', '/assets/cars/coaster.jpg', 1, '2025-12-31 12:38:28', 'Van', 220.00, 1, 'Diesel', NULL, NULL, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `car_bookings`
--

CREATE TABLE `car_bookings` (
  `id` int(11) NOT NULL,
  `booking_item_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `driver_id` int(11) DEFAULT NULL,
  `pricing_type` enum('dry','wet') NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `currency` varchar(10) DEFAULT 'USD',
  `status` enum('pending','confirmed','cancelled','completed') DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `car_hire_options`
--

CREATE TABLE `car_hire_options` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `includes_driver` tinyint(1) NOT NULL,
  `includes_fuel` tinyint(1) NOT NULL,
  `extra_cost` decimal(10,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `car_hire_rates`
--

CREATE TABLE `car_hire_rates` (
  `id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `base_rate_per_day` decimal(10,2) NOT NULL,
  `currency` varchar(10) NOT NULL,
  `available_quantity` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `car_hire_rates`
--

INSERT INTO `car_hire_rates` (`id`, `car_id`, `base_rate_per_day`, `currency`, `available_quantity`) VALUES
(1, 1, 120.00, 'USD', 1),
(2, 2, 80.00, 'USD', 1),
(3, 3, 150.00, 'USD', 1),
(4, 4, 90.00, 'USD', 1),
(5, 5, 220.00, 'USD', 1);

-- --------------------------------------------------------

--
-- Table structure for table `courier_bookings`
--

CREATE TABLE `courier_bookings` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `driver_id` int(11) DEFAULT NULL,
  `vehicle_id` int(11) NOT NULL,
  `pickup_address` text NOT NULL,
  `dropoff_address` text NOT NULL,
  `pickup_coords` varchar(100) DEFAULT NULL,
  `dropoff_coords` varchar(100) DEFAULT NULL,
  `is_surprise` tinyint(1) DEFAULT 0,
  `receiver_name` varchar(255) DEFAULT NULL,
  `receiver_phone` varchar(20) DEFAULT NULL,
  `special_instructions` text DEFAULT NULL,
  `parcel_items` varchar(255) DEFAULT NULL,
  `estimated_distance_km` decimal(6,2) DEFAULT NULL,
  `estimated_delivery_time` datetime DEFAULT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `payment_status` enum('Unpaid','Paid','Refunded') DEFAULT 'Unpaid',
  `payment_method` enum('MTN MoMo','Airtel Money','Cash','Visa','Flutterwave') DEFAULT NULL,
  `delivery_status` enum('Pending','Assigned','Picked Up','In Transit','Delivered','Cancelled') DEFAULT 'Pending',
  `tracking_id` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `current_location` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courier_bookings`
--

INSERT INTO `courier_bookings` (`id`, `customer_id`, `driver_id`, `vehicle_id`, `pickup_address`, `dropoff_address`, `pickup_coords`, `dropoff_coords`, `is_surprise`, `receiver_name`, `receiver_phone`, `special_instructions`, `parcel_items`, `estimated_distance_km`, `estimated_delivery_time`, `total_price`, `payment_status`, `payment_method`, `delivery_status`, `tracking_id`, `created_at`, `current_location`) VALUES
(1, 2, 4, 1, 'Kampala – Ntinda', 'Entebbe Airport', NULL, NULL, 0, NULL, NULL, 'Handle with care', 'Documents', NULL, NULL, 12000.00, 'Paid', 'MTN MoMo', 'In Transit', 'ZULA-TEST001', '2026-01-05 15:29:44', NULL),
(2, 3, NULL, 3, 'Makerere University', 'Bugolobi', NULL, NULL, 1, 'Mary', '0700554433', 'Surprise delivery, call before arrival', 'Birthday Gift', NULL, NULL, 30000.00, 'Unpaid', 'Cash', 'Pending', 'ZULA-TEST002', '2026-01-05 15:29:44', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `courier_fleet`
--

CREATE TABLE `courier_fleet` (
  `id` int(11) NOT NULL,
  `vehicle_name` varchar(100) NOT NULL,
  `vehicle_category` enum('Motorcycle','Car','Truck','Regional') NOT NULL,
  `base_fare` decimal(10,2) NOT NULL,
  `price_per_km` decimal(10,2) NOT NULL,
  `max_weight_kg` int(11) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `is_available` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courier_fleet`
--

INSERT INTO `courier_fleet` (`id`, `vehicle_name`, `vehicle_category`, `base_fare`, `price_per_km`, `max_weight_kg`, `image_url`, `is_available`) VALUES
(1, 'Boda Boda', 'Motorcycle', 5000.00, 1500.00, 20, '/assets/fleet/boda.jpg', 1),
(2, 'Motorcycle Express', 'Motorcycle', 7000.00, 1800.00, 25, '/assets/fleet/motorbike.jpg', 1),
(3, 'City Car', 'Car', 15000.00, 3000.00, 100, '/assets/fleet/car.jpg', 1),
(4, 'Van Delivery', 'Car', 25000.00, 4500.00, 500, '/assets/fleet/van.jpg', 1),
(5, 'Pickup Truck', 'Truck', 35000.00, 6000.00, 1000, '/assets/fleet/pickup.jpg', 1),
(6, 'Trailer / Cargo Truck', 'Regional', 60000.00, 10000.00, 5000, '/assets/fleet/trailer.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `courier_tracking`
--

CREATE TABLE `courier_tracking` (
  `id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `status_update` varchar(255) NOT NULL,
  `current_location` text DEFAULT NULL,
  `update_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courier_tracking`
--

INSERT INTO `courier_tracking` (`id`, `booking_id`, `status_update`, `current_location`, `update_time`) VALUES
(1, 1, 'Package picked up', 'Ntinda', '2026-01-05 15:30:25'),
(2, 1, 'In transit', 'Entebbe Road', '2026-01-05 15:30:25'),
(3, 2, 'Booking created', 'System', '2026-01-05 15:30:25');

-- --------------------------------------------------------

--
-- Table structure for table `courier_users`
--

CREATE TABLE `courier_users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `user_role` enum('admin','customer','driver') DEFAULT 'customer',
  `vehicle_id` int(11) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `email_verified` tinyint(1) DEFAULT 0,
  `last_login` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courier_users`
--

INSERT INTO `courier_users` (`id`, `full_name`, `email`, `password`, `phone`, `user_role`, `vehicle_id`, `is_active`, `email_verified`, `last_login`, `created_at`) VALUES
(1, 'Admin User', 'admin@zula.com', '$2b$10$hashedpassword', '0774488956', 'admin', NULL, 1, 0, NULL, '2026-01-05 15:27:14'),
(2, 'John Customer', 'john@example.com', '$2b$10$hashedpassword', '0700123456', 'customer', NULL, 1, 0, NULL, '2026-01-05 15:27:14'),
(3, 'Sarah Customer', 'sarah@example.com', '$2b$10$hashedpassword', '0700654321', 'customer', NULL, 1, 0, NULL, '2026-01-05 15:27:14'),
(4, 'Moses Rider', 'kasolo@zula.com', '$2b$10$hashedpassword', '0700789123', 'driver', 1, 1, 0, NULL, '2026-01-05 15:27:14'),
(5, 'Peter Rider', 'sseguya@zula.com', '$2b$10$hashedpassword', '0700998877', 'driver', 2, 1, 0, NULL, '2026-01-05 15:27:14');

-- --------------------------------------------------------

--
-- Table structure for table `destinations`
--

CREATE TABLE `destinations` (
  `id` int(11) NOT NULL,
  `country` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `destinations`
--

INSERT INTO `destinations` (`id`, `country`, `city`, `description`) VALUES
(1, 'Uganda', 'Kampala', 'Capital city of Uganda'),
(2, 'Uganda', 'Entebbe', 'International airport city'),
(3, 'Uganda', 'Jinja', 'Source of the Nile'),
(4, 'Uganda', 'Mbarara', 'Western Uganda'),
(5, 'Uganda', 'Kabale', 'Lake Bunyonyi'),
(6, 'Uganda', 'Kalangala', 'Ssese Islands');

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

CREATE TABLE `drivers` (
  `id` int(11) NOT NULL,
  `full_name` varchar(150) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `license_number` varchar(100) DEFAULT NULL,
  `experience_years` int(11) DEFAULT 0,
  `languages` varchar(100) DEFAULT NULL,
  `rating` decimal(2,1) DEFAULT NULL,
  `daily_rate` decimal(10,2) NOT NULL,
  `is_available` tinyint(1) DEFAULT 1,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `drivers`
--

INSERT INTO `drivers` (`id`, `full_name`, `phone`, `license_number`, `experience_years`, `languages`, `rating`, `daily_rate`, `is_available`, `is_active`, `created_at`) VALUES
(1, 'John Okello', '+256701234567', NULL, 8, NULL, NULL, 35.00, 1, 1, '2025-12-31 12:41:05'),
(2, 'Peter Ssemakula', '+256702345678', NULL, 5, NULL, NULL, 30.00, 1, 1, '2025-12-31 12:41:05'),
(3, 'David Mugisha', '+256703456789', NULL, 10, NULL, NULL, 40.00, 1, 1, '2025-12-31 12:41:05'),
(4, 'Michael Kato', '+256704567890', NULL, 6, NULL, NULL, 32.00, 1, 1, '2025-12-31 12:41:05'),
(5, 'Samuel Ochieng', '+256705678901', NULL, 12, NULL, NULL, 45.00, 1, 1, '2025-12-31 12:41:05');

-- --------------------------------------------------------

--
-- Table structure for table `flights`
--

CREATE TABLE `flights` (
  `id` int(11) NOT NULL,
  `origin_id` int(11) NOT NULL,
  `destination_id` int(11) NOT NULL,
  `airline` varchar(100) DEFAULT NULL,
  `flight_number` varchar(50) DEFAULT NULL,
  `flight_type` enum('domestic','international') NOT NULL,
  `departure_time` datetime NOT NULL,
  `arrival_time` datetime NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `currency` varchar(10) NOT NULL,
  `seats_total` int(11) NOT NULL,
  `seats_available` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `destination_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(500) DEFAULT NULL,
  `rating` decimal(2,1) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`id`, `destination_id`, `name`, `address`, `rating`, `description`) VALUES
(16, 1, 'Kampala Serena Hotel', 'Kintu Road, Kampala', 5.0, 'Luxury 5-star hotel'),
(17, 1, 'Sheraton Kampala Hotel', 'Ternan Avenue, Kampala', 4.8, 'Premium city hotel'),
(18, 1, 'Africana Hotel Kampala', 'Jinja Road, Kampala', 4.2, 'Affordable comfort'),
(19, 2, 'Protea Hotel Entebbe', 'Victoria Mall, Entebbe', 4.6, 'Lakefront hotel'),
(20, 6, 'Brovad Sands Lodge', 'Kalangala Island', 4.4, 'Beach resort');

-- --------------------------------------------------------

--
-- Table structure for table `hotel_rooms`
--

CREATE TABLE `hotel_rooms` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `room_type` varchar(100) NOT NULL,
  `capacity` int(11) NOT NULL,
  `price_per_night` decimal(10,2) NOT NULL,
  `currency` varchar(10) NOT NULL,
  `available_quantity` int(11) DEFAULT 0,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hotel_rooms`
--

INSERT INTO `hotel_rooms` (`id`, `hotel_id`, `room_type`, `capacity`, `price_per_night`, `currency`, `available_quantity`, `description`) VALUES
(4, 16, 'Deluxe Room', 2, 280.00, 'USD', 20, 'Elegant deluxe room with city view'),
(5, 16, 'Executive Suite', 3, 450.00, 'USD', 10, 'Luxury executive suite'),
(6, 17, 'Classic Room', 2, 240.00, 'USD', 25, 'Modern classic room'),
(7, 17, 'Club Suite', 3, 380.00, 'USD', 12, 'Premium club-level suite'),
(8, 18, 'Standard Room', 2, 120.00, 'USD', 30, 'Affordable and comfortable'),
(9, 18, 'Business Room', 2, 180.00, 'USD', 15, 'Ideal for business travelers'),
(10, 19, 'Lake View Room', 2, 260.00, 'USD', 18, 'Scenic lakefront room'),
(11, 19, 'Family Room', 4, 340.00, 'USD', 8, 'Spacious family room'),
(12, 20, 'Beach Chalet', 2, 220.00, 'USD', 14, 'Private beach chalet'),
(13, 20, 'Honeymoon Suite', 2, 300.00, 'USD', 6, 'Romantic lakeside suite');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `currency` varchar(10) NOT NULL,
  `method` varchar(50) DEFAULT NULL,
  `status` enum('pending','paid','failed') NOT NULL,
  `payment_date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `role_name`) VALUES
(1, 'admin'),
(2, 'customer'),
(5, 'driver');

-- --------------------------------------------------------

--
-- Table structure for table `surprise`
--

CREATE TABLE `surprise` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  `includes` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`includes`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tour_packages`
--

CREATE TABLE `tour_packages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `start_destination_id` int(11) NOT NULL,
  `end_destination_id` int(11) NOT NULL,
  `duration_days` int(11) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `currency` varchar(10) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `password_hash` varchar(255) NOT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role_id`, `first_name`, `last_name`, `email`, `phone`, `password_hash`, `is_active`, `created_at`) VALUES
(1, 2, 'Sseguya', 'Kasolo', 'kasoloe@test.com', '+256700000000', 'hashed_password', 1, '2025-12-16 17:56:35');

-- --------------------------------------------------------

--
-- Table structure for table `venues`
--

CREATE TABLE `venues` (
  `id` int(11) NOT NULL,
  `destination_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `venue_type` varchar(100) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  `price_per_day` decimal(10,2) DEFAULT NULL,
  `currency` varchar(10) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `booking_audit`
--
ALTER TABLE `booking_audit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking_items`
--
ALTER TABLE `booking_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `booking_id` (`booking_id`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `plate_number` (`plate_number`),
  ADD KEY `destination_id` (`destination_id`),
  ADD KEY `idx_cars_available` (`is_available`,`category`);

--
-- Indexes for table `car_bookings`
--
ALTER TABLE `car_bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `booking_item_id` (`booking_item_id`),
  ADD KEY `driver_id` (`driver_id`),
  ADD KEY `idx_car_booking_dates` (`car_id`,`start_date`,`end_date`);

--
-- Indexes for table `car_hire_options`
--
ALTER TABLE `car_hire_options`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `car_hire_rates`
--
ALTER TABLE `car_hire_rates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `courier_bookings`
--
ALTER TABLE `courier_bookings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tracking_id` (`tracking_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `vehicle_id` (`vehicle_id`),
  ADD KEY `idx_courier_bookings_status` (`delivery_status`,`created_at`),
  ADD KEY `courier_bookings_driver_fk` (`driver_id`),
  ADD KEY `idx_delivery_status` (`delivery_status`),
  ADD KEY `idx_created_at` (`created_at`);

--
-- Indexes for table `courier_fleet`
--
ALTER TABLE `courier_fleet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courier_tracking`
--
ALTER TABLE `courier_tracking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_tracking_booking` (`booking_id`);

--
-- Indexes for table `courier_users`
--
ALTER TABLE `courier_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `fk_courier_users_vehicle` (`vehicle_id`),
  ADD KEY `idx_courier_users_role` (`user_role`,`is_active`);

--
-- Indexes for table `destinations`
--
ALTER TABLE `destinations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ux_country_city` (`country`,`city`);

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flights`
--
ALTER TABLE `flights`
  ADD PRIMARY KEY (`id`),
  ADD KEY `origin_id` (`origin_id`),
  ADD KEY `destination_id` (`destination_id`);

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `destination_id` (`destination_id`);

--
-- Indexes for table `hotel_rooms`
--
ALTER TABLE `hotel_rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_id` (`hotel_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `booking_id` (`booking_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `role_name` (`role_name`);

--
-- Indexes for table `surprise`
--
ALTER TABLE `surprise`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tour_packages`
--
ALTER TABLE `tour_packages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `start_destination_id` (`start_destination_id`),
  ADD KEY `end_destination_id` (`end_destination_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `venues`
--
ALTER TABLE `venues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `destination_id` (`destination_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `booking_audit`
--
ALTER TABLE `booking_audit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `booking_items`
--
ALTER TABLE `booking_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `car_bookings`
--
ALTER TABLE `car_bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `car_hire_options`
--
ALTER TABLE `car_hire_options`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `car_hire_rates`
--
ALTER TABLE `car_hire_rates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `courier_bookings`
--
ALTER TABLE `courier_bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `courier_fleet`
--
ALTER TABLE `courier_fleet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `courier_tracking`
--
ALTER TABLE `courier_tracking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `courier_users`
--
ALTER TABLE `courier_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `destinations`
--
ALTER TABLE `destinations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `drivers`
--
ALTER TABLE `drivers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `flights`
--
ALTER TABLE `flights`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `hotel_rooms`
--
ALTER TABLE `hotel_rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `surprise`
--
ALTER TABLE `surprise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tour_packages`
--
ALTER TABLE `tour_packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `venues`
--
ALTER TABLE `venues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `booking_items`
--
ALTER TABLE `booking_items`
  ADD CONSTRAINT `booking_items_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`);

--
-- Constraints for table `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `cars_ibfk_1` FOREIGN KEY (`destination_id`) REFERENCES `destinations` (`id`);

--
-- Constraints for table `car_bookings`
--
ALTER TABLE `car_bookings`
  ADD CONSTRAINT `car_bookings_ibfk_1` FOREIGN KEY (`booking_item_id`) REFERENCES `booking_items` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `car_bookings_ibfk_2` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`),
  ADD CONSTRAINT `car_bookings_ibfk_3` FOREIGN KEY (`driver_id`) REFERENCES `drivers` (`id`),
  ADD CONSTRAINT `fk_car_bookings_cars` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `car_hire_rates`
--
ALTER TABLE `car_hire_rates`
  ADD CONSTRAINT `car_hire_rates_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`);

--
-- Constraints for table `courier_bookings`
--
ALTER TABLE `courier_bookings`
  ADD CONSTRAINT `courier_bookings_driver_fk` FOREIGN KEY (`driver_id`) REFERENCES `courier_users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `courier_bookings_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `courier_users` (`id`),
  ADD CONSTRAINT `courier_bookings_ibfk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `courier_fleet` (`id`),
  ADD CONSTRAINT `fk_courier_bookings_driver` FOREIGN KEY (`driver_id`) REFERENCES `courier_users` (`id`);

--
-- Constraints for table `courier_tracking`
--
ALTER TABLE `courier_tracking`
  ADD CONSTRAINT `courier_tracking_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `courier_bookings` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `courier_users`
--
ALTER TABLE `courier_users`
  ADD CONSTRAINT `fk_courier_users_vehicle` FOREIGN KEY (`vehicle_id`) REFERENCES `courier_fleet` (`id`);

--
-- Constraints for table `flights`
--
ALTER TABLE `flights`
  ADD CONSTRAINT `flights_ibfk_1` FOREIGN KEY (`origin_id`) REFERENCES `destinations` (`id`),
  ADD CONSTRAINT `flights_ibfk_2` FOREIGN KEY (`destination_id`) REFERENCES `destinations` (`id`);

--
-- Constraints for table `hotels`
--
ALTER TABLE `hotels`
  ADD CONSTRAINT `hotels_ibfk_1` FOREIGN KEY (`destination_id`) REFERENCES `destinations` (`id`);

--
-- Constraints for table `hotel_rooms`
--
ALTER TABLE `hotel_rooms`
  ADD CONSTRAINT `hotel_rooms_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`);

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`);

--
-- Constraints for table `tour_packages`
--
ALTER TABLE `tour_packages`
  ADD CONSTRAINT `tour_packages_ibfk_1` FOREIGN KEY (`start_destination_id`) REFERENCES `destinations` (`id`),
  ADD CONSTRAINT `tour_packages_ibfk_2` FOREIGN KEY (`end_destination_id`) REFERENCES `destinations` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);

--
-- Constraints for table `venues`
--
ALTER TABLE `venues`
  ADD CONSTRAINT `venues_ibfk_1` FOREIGN KEY (`destination_id`) REFERENCES `destinations` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
