const { Subject } = require('../models');

const SubjectData = [
  {
    subject_name: 'leggings',
  },
  {
    subject_name: 'shirts',
  },
  {
    subject_name: 'shoes',
  },
  {
    subject_name: 'accessories',
  },
];

const seedSubject = () => Subject.bulkCreate(SubjectData);

module.exports = seedSubject;
