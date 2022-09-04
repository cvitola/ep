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


/* Crea 3 articulos*/

const arrayArticulos = [
  {
    code: 100,
    description: 'PC Escritorio Pentium X',
    amount: 95360.11
  },
  {
    code: 101,
    description: 'loremposun 39 dsddff',
    amount: 651.51
  },
  {
    code: 102,
    description: 'Lapiz optico',
    amount: 9560.00
  }
];

arrayArticulos.forEach( (pos) => {
  sequelize.sync()
  .then(() => Article.create({
    code: pos.code,
    description: pos.description,
    amount: pos.amount
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });
})

  /* Actualiza 2 articulos */

const arrayArticulosActualizados = [
  {
    code: 101,
    description: 'Pad para el mouse generico',
    amount: 999.99
  },
  {
    code: 102,
    description: 'Lapiz Optico',
    amount: 5000
  }
];

arrayArticulosActualizados.forEach( (pos) => {
  Article.update(
    {
      description: pos.description,
      amount: pos.amount
    },{
      where: {
        code: pos.code
      }
    }).then( () => {
      console.log("Actualizados")
    })
   
})


