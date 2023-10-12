const sequelize = require('../config/connection');
const seedSubject = require('./SubjectData');
const seedPost = require('./PostData');
const seedUser = require('./UserData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSubject();

  await seedUser();

  await seedPost();

  process.exit(0);
};

seedAll();
