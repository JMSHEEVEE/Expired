--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;



CREATE TABLE user (
	"user_id" integer NOT NULL,
	"github_id" varchar,
	CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE food (
	"food_id" integer NOT NULL,
	"best_buy" integer NOT NULL,
	CONSTRAINT "food_pkey" PRIMARY KEY ("food_id")
) WITH (
  OIDS=FALSE
);


-- CREATE TABLE fridge (
-- 	"fridge_id" integer NOT NULL,
-- 	"foodtype" varchar,
-- 	"link" varchar,
--     "add_by_user" integer,
-- 	CONSTRAINT "resto_pkey" PRIMARY KEY ("resto_id")
-- ) WITH (
--   OIDS=FALSE
-- );
