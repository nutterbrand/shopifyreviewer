CREATE TABLE "public"."user" (
  user_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE "public"."post" (
  post_id SERIAL PRIMARY KEY NOT NULL,
  -- created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  author_id INTEGER,
  FOREIGN KEY (author_id) REFERENCES "public"."user"(user_id)
);

CREATE TABLE "public"."profile" (
  profile_id SERIAL PRIMARY KEY NOT NULL,
  bio TEXT,
  user_id INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES "public"."user"(user_id)
);
