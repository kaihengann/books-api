const Sequelize = require("sequelize");

let sequelize;
const currentEnv = process.env.NODE_ENV || "development";
if (currentEnv === "production") {
  // Create sequelize instance for production
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres"
  });
} else {
  // Create sequelize instance for dev
  sequelize = new Sequelize("booksapi", "postgres", "", {
    dialect: "postgres"
  });
}

// Initialize models
const models = {
  Book: sequelize.import("./book"),
  Author: sequelize.import("./author")
};
// Call association function in each model to link them up together
Object.keys(models).forEach(key => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

module.exports = {
  sequelize,
  ...models
};
