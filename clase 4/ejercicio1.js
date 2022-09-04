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
    code: 50,
    description: 'Teclado y Mouse Gamer',
    amount: 6199.20
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  /* actualiza 1 articulo description: "Monitor 24" Samsung 4K" */

  Article.update(
    {
      description: 'Monitor 24" Samsung 4K'
    },{
      where: {
        code: 50
      }
    }).then( () => {
      console.log("Done");
    });

  

