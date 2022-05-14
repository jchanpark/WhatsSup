DROP TABLE IF EXISTS recipes CASCADE;

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  recipe_id VARCHAR(255) NOT NULL,
  title VARCHAR(255),
  image VARCHAR(255)
);