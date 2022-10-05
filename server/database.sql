CREATE TABLE "user_accounts" (
  "user_id" serial NOT NULL,
  "user_name" varchar(25) NOT NULL,
  "email" varchar(50) NOT NULL,
  "phone_number" int,
  "first_name" varchar(20) NOT NULL,
  "last_name" varchar(20),
  "gender" varchar(1),
  "password" varchar(50) NOT NULL,
  PRIMARY KEY ("user_id")
);

CREATE TABLE "Posts" (
  "user_id" int NOT NULL,
  "text_area" varchar(300),
  "posts_photo_id" int NOT NULL,
  "time" time NOT NULL,
  PRIMARY KEY ("user_id"),
  CONSTRAINT "FK_Posts.user_id"
    FOREIGN KEY ("user_id")
      REFERENCES "user_account"("user_id")
);

CREATE TABLE "Photos" (
  "posts_photo_id" int NOT NULL,
  "cdn_path_location" string NOT NULL,
  "private" bool NOT NULL,
  PRIMARY KEY ("posts_photo_id"),
  CONSTRAINT "FK_Photos.posts_photo_id"
    FOREIGN KEY ("posts_photo_id")
      REFERENCES "Posts"("posts_photo_id")
);

