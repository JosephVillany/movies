const { app } = require('./app');

//utils
const { sequelize } = require('./utils/database');
const { initModels } = require('./utils/initModels');

sequelize
  .authenticate()
  .then(() => console.log('authenticated'))
  .catch((err) => console.log(err));

initModels();

sequelize
  .sync()
  .then(() => console.log('base datos sinc'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`express Runing port: ${PORT}`);
});
