CREATE DATABASE socailmediaapp;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL,
    email VARCHAR(254) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(1),
    password VARCHAR(255) NOT NULL
);