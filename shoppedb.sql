-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema shoppedb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema shoppedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `shoppedb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`payment_method`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shoppedb`.`payment_method` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `discount` DOUBLE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

USE `shoppedb` ;

-- -----------------------------------------------------
-- Table `shoppedb`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shoppedb`.`categories` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(255) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  PRIMARY KEY (`category_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `shoppedb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shoppedb`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `password` VARCHAR(255) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `fullname` VARCHAR(45) NULL DEFAULT NULL,
  `phone` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `avatar` VARCHAR(255) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `role` VARCHAR(255) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `active` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 65
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `shoppedb`.`store`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shoppedb`.`store` (
  `store_id` INT NOT NULL AUTO_INCREMENT,
  `store_name` VARCHAR(255) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `description` TEXT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `active` TINYINT(1) NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`store_id`),
  INDEX `fk_store_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_store_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `shoppedb`.`users` (`user_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 61
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `shoppedb`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shoppedb`.`products` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(255) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `price` DECIMAL(10,2) NULL DEFAULT NULL,
  `image_url` VARCHAR(255) NULL DEFAULT NULL,
  `categories_category_id` INT NULL DEFAULT NULL,
  `store_store_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  INDEX `fk_products_categories1_idx` (`categories_category_id` ASC) VISIBLE,
  INDEX `fk_products_store1_idx` (`store_store_id` ASC) VISIBLE,
  CONSTRAINT `fk_products_categories1`
    FOREIGN KEY (`categories_category_id`)
    REFERENCES `shoppedb`.`categories` (`category_id`),
  CONSTRAINT `fk_products_store1`
    FOREIGN KEY (`store_store_id`)
    REFERENCES `shoppedb`.`store` (`store_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 60
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `shoppedb`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shoppedb`.`comments` (
  `comment_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `product_id` INT NULL DEFAULT NULL,
  `comment_text` TEXT CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `comment_date` DATE NULL DEFAULT NULL,
  `evaluate` DOUBLE NULL DEFAULT NULL,
  `comments_comment_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `product_id` (`product_id` ASC) VISIBLE,
  INDEX `fk_comments_comments1_idx` (`comments_comment_id` ASC) VISIBLE,
  CONSTRAINT `comments_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `shoppedb`.`users` (`user_id`),
  CONSTRAINT `comments_ibfk_2`
    FOREIGN KEY (`product_id`)
    REFERENCES `shoppedb`.`products` (`product_id`),
  CONSTRAINT `fk_comments_comments1`
    FOREIGN KEY (`comments_comment_id`)
    REFERENCES `shoppedb`.`comments` (`comment_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 30
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `shoppedb`.`payment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shoppedb`.`payment` (
  `payment_id` INT NOT NULL AUTO_INCREMENT,
  `payment` VARCHAR(255) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `payment_method_id` INT NOT NULL,
  PRIMARY KEY (`payment_id`),
  INDEX `fk_payment_payment_method1_idx` (`payment_method_id` ASC) VISIBLE,
  CONSTRAINT `fk_payment_payment_method1`
    FOREIGN KEY (`payment_method_id`)
    REFERENCES `mydb`.`payment_method` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `shoppedb`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shoppedb`.`orders` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `payment_method` VARCHAR(255) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci' NULL DEFAULT NULL,
  `order_date` DATE NULL DEFAULT NULL,
  `payments_payment_id` INT NOT NULL,
  `store_store_id` INT NOT NULL,
  PRIMARY KEY (`order_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  INDEX `fk_orders_payments1_idx` (`payments_payment_id` ASC) VISIBLE,
  INDEX `fk_orders_store1_idx` (`store_store_id` ASC) VISIBLE,
  CONSTRAINT `fk_orders_payments1`
    FOREIGN KEY (`payments_payment_id`)
    REFERENCES `shoppedb`.`payment` (`payment_id`),
  CONSTRAINT `fk_orders_store1`
    FOREIGN KEY (`store_store_id`)
    REFERENCES `shoppedb`.`store` (`store_id`),
  CONSTRAINT `orders_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `shoppedb`.`users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `shoppedb`.`orderdetails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shoppedb`.`orderdetails` (
  `order_detail_id` INT NOT NULL AUTO_INCREMENT,
  `price` DECIMAL(10,0) NULL DEFAULT NULL,
  `quantity` INT NULL DEFAULT NULL,
  `orders_order_id` INT NOT NULL,
  `products_product_id` INT NOT NULL,
  PRIMARY KEY (`order_detail_id`),
  INDEX `fk_orderdetails_orders1_idx` (`orders_order_id` ASC) VISIBLE,
  INDEX `fk_orderdetails_products1_idx` (`products_product_id` ASC) VISIBLE,
  CONSTRAINT `fk_orderdetails_orders1`
    FOREIGN KEY (`orders_order_id`)
    REFERENCES `shoppedb`.`orders` (`order_id`),
  CONSTRAINT `fk_orderdetails_products1`
    FOREIGN KEY (`products_product_id`)
    REFERENCES `shoppedb`.`products` (`product_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
