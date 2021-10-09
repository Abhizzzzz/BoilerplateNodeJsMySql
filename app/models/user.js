module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define(
        "users",
        {
          country: Sequelize.STRING(40),
          email: Sequelize.STRING(40),
          created_at: Sequelize.DATE
        },
        {
          timestamps: false
        }
    );
    return Users;
};