BEGIN;

CREATE TABLE users (
  ID INTEGER PRIMARY KEY,
  Email VARCHAR(255) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  Name VARCHAR(255) NOT NULL,
  ProfilePicture VARCHAR(255),
  DateOfBirth DATE,
  Gender CHAR(1),
  Bio TEXT,
  Location VARCHAR(255)
);

CREATE TABLE posts (
  ID INTEGER PRIMARY KEY,
  UserID INTEGER NOT NULL,
  Content TEXT NOT NULL,
  Image VARCHAR(255),
  Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UserID) REFERENCES Users(ID)
);

CREATE TABLE comments (
  ID INTEGER PRIMARY KEY,
  UserID INTEGER NOT NULL,
  PostID INTEGER NOT NULL,
  Content TEXT NOT NULL,
  Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UserID) REFERENCES Users(ID),
  FOREIGN KEY (PostID) REFERENCES Posts(ID)
);

CREATE TABLE likes (
  ID INTEGER PRIMARY KEY,
  UserID INTEGER NOT NULL,
  PostID INTEGER NOT NULL,
  FOREIGN KEY (UserID) REFERENCES Users(ID),
  FOREIGN KEY (PostID) REFERENCES Posts(ID)
);

CREATE TABLE followers (
  ID INTEGER PRIMARY KEY,
  UserID INTEGER NOT NULL,
  FollowerID INTEGER NOT NULL,
  FOREIGN KEY (UserID) REFERENCES Users(ID),
  FOREIGN KEY (FollowerID) REFERENCES Users(ID)
);

COMMIT;
