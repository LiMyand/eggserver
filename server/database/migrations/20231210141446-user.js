// 用户迁移
'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const { INTEGER, STRING, DATE, ENUM } = Sequelize
    // 用户
    await queryInterface.createTable(
      'user',
      {
        id: {
          type: INTEGER(20),
          primaryKey: true,
          autoIncrement: true,
          comment: '用户ID'
        },
        code: {
          type: STRING(40),
          allowNull: false,
          defaultValue: '',
          comment: '用户编号'
        },
        nickname: {
          type: STRING(30),
          allowNull: false,
          defaultValue: '',
          comment: '用户昵称',
          unique: true
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
        },
        avatar: {
          type: STRING,
          allowNull: true,
          defaultValue: '',
          comment: '头像'
        },
        phone: {
          type: STRING(20),
          allowNull: false,
          defaultValue: '',
          comment: '手机'
        },
        sex: {
          type: ENUM,
          values: ['男', '女', '保密'],
          allowNull: false,
          defaultValue: '保密',
          comment: '性别'
        },
        age: {
          type: INTEGER(20),
          allowNull: true,
          comment: '年龄'
        },
        status: {
          type: INTEGER,
          allowNull: false,
          defaultValue: 1,
          comment: '状态'
        },
        departmentId: {
          type: INTEGER,
          allowNull: true,
          //  定义外键（重要）
          // references: {
          //   model: 'department', // 对应表名称（数据表名称）
          //   key: 'id' // 对应表的主键
          // },
          // onUpdate: 'restrict', // 更新时操作
          // onDelete: 'cascade',  // 删除时操作
          comment: '所属科室ID'
        },
        roleId: {
          type: INTEGER,
          allowNull: false,
          defaultValue: 1,
          //  定义外键（重要）
          // references: {
          //   model: 'role', // 对应表名称（数据表名称）
          //   key: 'id' // 对应表的主键
          // },
          // onUpdate: 'restrict', // 更新时操作
          // onDelete: 'cascade',  // 删除时操作
          comment: '角色ID'
        },
        created_time: DATE,
        updated_time: DATE
      },
      {
        engine: 'InnoDB',
        autoIncrement: 2,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci'
      }
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user')
  }
}

