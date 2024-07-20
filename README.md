# NodeJS CRUD - 간단한 상점 시스템

![NodeJS_CRUD_ERDiagram](https://github.com/user-attachments/assets/221359d6-2ef3-492b-ad8e-6ca317430ad8)
```SQL
CREATE TABLE `user` (
  `name` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone-number` varchar(100) NOT NULL,
  `user_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pw_hash` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `product` (
  `item_id` varchar(50) NOT NULL,
  `price` int NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `info` text NOT NULL,
  `moq` int NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `order` (
  `item_id` varchar(100) DEFAULT NULL,
  `time` timestamp NOT NULL,
  `date` date NOT NULL,
  `pay` int NOT NULL,
  `status` varchar(50) NOT NULL,
  `user_id` varchar(100) DEFAULT NULL,
  KEY `product_id` (`item_id`),
  KEY `order_user_FK` (`user_id`),
  CONSTRAINT `order_user_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `product_id` FOREIGN KEY (`item_id`) REFERENCES `product` (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

