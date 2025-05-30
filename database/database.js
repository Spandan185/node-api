import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('practice', 'root', 'Spandan@007', {
  host: 'localhost',
  port:3306,
  dialect: 'mysql'
});

export default sequelize;
