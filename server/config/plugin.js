/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  
  
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}
exports.cors = {
  enable: true,
  package: 'egg-cors'
}

exports.valparams = {
  enable: true,
  package: 'egg-valparams'
}