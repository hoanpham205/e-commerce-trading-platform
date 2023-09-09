CREATE DATABASE  IF NOT EXISTS `shoppedb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `shoppedb`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: shoppedb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'sofa'),(2,'chair'),(3,'mobile'),(4,'watch'),(5,'wireless');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `comment_text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `comment_date` date DEFAULT NULL,
  `evaluate` double DEFAULT NULL,
  `comments_comment_id` int DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  KEY `fk_comments_comments1_idx` (`comments_comment_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  CONSTRAINT `fk_comments_comments1` FOREIGN KEY (`comments_comment_id`) REFERENCES `comments` (`comment_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdetails` (
  `order_detail_id` int NOT NULL AUTO_INCREMENT,
  `price` decimal(10,0) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `orders_order_id` int NOT NULL,
  `products_product_id` int DEFAULT NULL,
  PRIMARY KEY (`order_detail_id`),
  KEY `fk_orderdetails_orders1_idx` (`orders_order_id`),
  KEY `fk_orderdetails_products1_idx` (`products_product_id`),
  CONSTRAINT `fk_orderdetails_orders1` FOREIGN KEY (`orders_order_id`) REFERENCES `orders` (`order_id`),
  CONSTRAINT `fk_orderdetails_products1` FOREIGN KEY (`products_product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetails`
--

LOCK TABLES `orderdetails` WRITE;
/*!40000 ALTER TABLE `orderdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `orderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `payments_payment_id` int DEFAULT NULL,
  `store_store_id` int DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  KEY `fk_orders_payments1_idx` (`payments_payment_id`),
  KEY `fk_orders_store1_idx` (`store_store_id`),
  CONSTRAINT `fk_orders_payments1` FOREIGN KEY (`payments_payment_id`) REFERENCES `payment` (`payment_id`),
  CONSTRAINT `fk_orders_store1` FOREIGN KEY (`store_store_id`) REFERENCES `store` (`store_id`) ON DELETE SET NULL,
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (5,75,'2023-09-06',NULL,75),(6,75,'2023-09-05',NULL,75);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `payment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_method_id` int DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `fk_payment_payment_method1_idx` (`payment_method_id`),
  CONSTRAINT `fk_payment_payment_method1` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_method` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,'PayPal',NULL);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_method`
--

DROP TABLE IF EXISTS `payment_method`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_method` (
  `id` int NOT NULL AUTO_INCREMENT,
  `discount` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_method`
--

LOCK TABLES `payment_method` WRITE;
/*!40000 ALTER TABLE `payment_method` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_method` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `image_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `categories_category_id` int DEFAULT NULL,
  `store_store_id` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `fk_products_categories1_idx` (`categories_category_id`),
  KEY `fk_products_store1_idx` (`store_store_id`),
  CONSTRAINT `fk_products_categories1` FOREIGN KEY (`categories_category_id`) REFERENCES `categories` (`category_id`),
  CONSTRAINT `fk_products_store1` FOREIGN KEY (`store_store_id`) REFERENCES `store` (`store_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (64,'Stone and Beam Westview',193.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236153/lzph6zirarczkt1wdcll.png',1,75),(65,'Rivet Bigelow Modern',253.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236209/iv6rtyzpmowtbgxpgzd9.png',1,75),(66,'Amazon Brand Modern Sofa',173.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236231/fwe0btrftf7dt1vpz2ja.png',1,75),(67,'Rivet Bigelow Modern',253.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236277/rlwbbi9spiqccr54m25y.png',1,75),(68,'Fllufy Sheep Sofa',163.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236389/fj3xxcslfzkjyibrnvjz.jpg',1,75),(69,'Faux Velvet Sofa',163.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236418/i1wnmwj855dr1bqkf5cr.jpg',1,75),(70,'Fllufy Sheep Sofa',163.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236446/xfh5qewao6usvaxzhfxr.jpg',1,75),(71,'Sakarias Armchair',99.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236472/tw3ia2dtafykx8zdjvoe.png',2,75),(72,'Modern Arm Sofa',173.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236498/juqjldyljo3gulvt8005.png',1,75),(73,'Baltsar Chair',89.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236638/dbtlbedu4bptiiudvg8a.jpg',2,75),(74,'Helmar Chair',112.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236660/uynboyjeqv1cpxcnre7m.jpg',2,75),(75,'Apple iPhone 12 Pro',799.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236705/r3fzc17v0cuycieo5xld.jpg',3,75),(76,'Sakarias Armchair',99.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236743/s2ombsntlxhiygx2jma2.jpg',2,75),(77,'Apple iPhone 12 Max',799.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236771/m4po3ac1a4fp3sfqh2lj.jpg',3,75),(78,'Realme 8',599.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236811/dohhlw7h9wtev1tyemxl.png',3,75),(79,'One Plus Nord',799.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236833/hxhfcmtezfept910pdjn.jpg',3,75),(80,'Apple iPhone 13 Pro',899.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236852/nrdmvmicolvcsmelogda.jpg',3,75),(81,'Samsung Galaxy S22',699.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236872/qovispomxideldkjnqno.jpg',3,75),(82,'Rolex Watch',299.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236901/eoc5waqgpnjtb6zaf0rw.jpg',4,75),(83,'Timex Easy Reader Watch',299.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236923/y8msch4vthfqy7tnplpk.jpg',4,75),(84,'Rolex Watch',299.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236945/cixjs2xaroa6k5cfsp07.jpg',4,75),(85,'Apple Watch',399.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694236968/uoplprk0ihxkt9atuwhd.jpg',4,75),(86,'Beat Studio Wireless',199.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694237003/b0c40zlyeqiiddzd4t9w.png',5,75),(87,'Beat EP Headphones',199.00,'https://res.cloudinary.com/ddznsqfbo/image/upload/v1694237040/s4lycj5sqb4wkdnh4bin.png',5,75);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `store` (
  `store_id` int NOT NULL AUTO_INCREMENT,
  `store_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `active` tinyint(1) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`store_id`),
  KEY `fk_store_users1_idx` (`user_id`),
  CONSTRAINT `fk_store_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store`
--

LOCK TABLES `store` WRITE;
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
INSERT INTO `store` VALUES (75,'IPHONE','145 NGUYEN OANH',1,75);
/*!40000 ALTER TABLE `store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fullname` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (69,'phantan','$2a$10$nwl8.Q25EW.19UCDw95Qbu4ESpfwLCC2NRj5ryY52/VWohXpQGHUm',' 1','0372745193','phantan@gmail.com','https://res.cloudinary.com/ddznsqfbo/image/upload/v1693338779/sfhh1ceptmahwwvs1cku.jpg','ADMIN',0),(75,'tan','$2a$10$3r.uc/X5uLE8nlYbcbEYVuwEsFP0RUiuhQNWu8XRgbkxe1GcG0KNi','tan','0372745193','tan@gmail.com','https://res.cloudinary.com/ddznsqfbo/image/upload/v1693943180/pvjfqosieazdlwqygllb.jpg','EMPLOYEE',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'shoppedb'
--

--
-- Dumping routines for database 'shoppedb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-09 15:04:14
