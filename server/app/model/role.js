module.exports = (app) => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize
  const moment = require('moment')
  // 配置（重要：一定要配置详细，一定要！！！）
  const Role = app.model.define('role', {
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
      defaultValue: 0,
      comment: '状态'
    },
    created_time: DATE,
    updated_time: DATE
  })
  Role.associate = () => {
    app.model.Role.hasOne(app.model.User, { foreignKey: 'roleId' })
  }


  return Role
}