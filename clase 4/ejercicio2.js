const Sequelize = require('sequelize');

const sequelize = new Sequelize('clase4', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class Article extends Sequelize.Model {}
Article.init({
  code: Sequelize.INTEGER,
  description:Sequelize.STRING,
  amount: Sequelize.DOUBLE
}, { sequelize, modelName: 'articles' });


/* crea 1 articulo*/
sequelize.sync()
  .then(() => Article.create({
    code: 55,
    description: 'SmartWatch Apple',
    amount: 120195.99
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  /* Elimina el registro con codigo 55 */

Article.destroy({
  where: { code: 55 }
}).then( () => {
  console.log("Borrado")
})

  

