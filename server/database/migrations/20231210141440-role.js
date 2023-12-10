// 角色迁移
'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { INTEGER, STRING, DATE, TEXT } = Sequelize
    // 角色
    await queryInterface.createTable(
      'role',
      {
        id: {
          type: INTEGER(20),
          primaryKey: true,
          autoIncrement: true,
          comment: '角色ID'
        },
        rol_code: {
          type: STRING(40),
          allowNull: false,
          defaultValue: '',
          comment: '角色编号'
        },
        rol_name: {
          type: STRING(30),
          allowNull: false,
          defaultValue: '',
          comment: '角色名'
        },
        rol_desc: {
          type: TEXT,
          allowNull: false,
          defaultValue: '',
          comment: '角色描述'
        },
        rol_status: {
          type: INTEGER,
          allowNull: false,
          defaultValue: 1,
          comment: '状态'
        },
        created_time: DATE,
        updated_time: DATE
      },
      {
        engine: 'InnoDB',
        autoIncrement: 6,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci'
      }
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('role')
  }
}

