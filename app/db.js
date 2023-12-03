const { User, UserSchema } = require('./user/model/user.model');

function setupDatabase(sequelize) {
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupDatabase;
