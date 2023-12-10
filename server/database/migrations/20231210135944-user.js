'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { INTEGER, STRING, DATE, ENUM, TEXT } = Sequelize
    await queryInterface.createTable('user', {
      id: {
        type: INTEGER(20),
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: STRING(30),
        allowNull: false,
        defaultValue: '',
        comment: '用户名',
        unique: true
      },
      password: {
        type: STRING,
        allowNull: false,
        defaultValue: '',
        comment: '密码'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user')
  }
}

