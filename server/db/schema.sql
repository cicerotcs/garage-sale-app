CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    username VARCHAR(100) UNIQUE,
    location VARCHAR(100),
    bio TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE listing(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    store_name VARCHAR(100) NOT NULL,
    contact TEXT NOT NULL,
    description VARCHAR(100),
    location TEXT NOT NULL,
    items TEXT NOT NULL,
    latitude numeric(15,12),
    longitude numeric(15,12)
)

"SELECT * FROM listing WHERE items::text ILIKE '%pottery%' AND CAST(latitude AS NUMERIC) <= CAST($1 AS NUMERIC) + 1 AND CAST(latitude AS NUMERIC) >= CAST($1 AS NUMERIC) -1 AND CAST(longitude AS NUMERIC) <= CAST($2 AS NUMERIC) + 1 AND CAST(longitude AS NUMERIC) >= CAST($2 AS NUMERIC) -1; "