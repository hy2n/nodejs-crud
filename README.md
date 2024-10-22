# NodeJS CRUD with MVC Pattern

MVC패턴을 적용한 간단한 상점 (Order,Prodect,User) 서버입니다

![image](https://github.com/user-attachments/assets/de875fa3-050f-4858-a4eb-ef37d7ae9c77)


```SQL
CREATE TABLE `product` (
  `item_id` varchar(50) NOT NULL,
  `price` int NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `info` text NOT NULL,
  `moq` int NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `name` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone-number` varchar(100) NOT NULL,
  `user_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pw_hash` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `order` (
  `time` datetime DEFAULT CURRENT_TIMESTAMP,
  `pay` int DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `order_id` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `item_id` varchar(100) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `fk_user` (`user_id`),
  KEY `fk_item` (`item_id`),
  CONSTRAINT `fk_item` FOREIGN KEY (`item_id`) REFERENCES `product` (`item_id`),
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

