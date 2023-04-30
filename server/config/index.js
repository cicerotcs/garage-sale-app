require("dotenv").config();

let missing = ["PORT", "DATABASE_URL", "JWT_SECRET_KEY", "JWT_EXPIRES"].filter(
  (key) => process.env[key] === undefined
);

if (missing.length > 0) {
  throw Error(`missing environment variables for ${missing.join(", ")}`);
}

module.exports = {
  port: process.env.PORT,
  db: {
    connectionString: process.env.DATABASE_URL,
  },
};
