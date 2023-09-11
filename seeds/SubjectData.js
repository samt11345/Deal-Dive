const { Subject } = require('../models');

const SubjectData = [
  {
    subject_name:'leggings' ,
  },
  {
    subject_name:'leggings' ,
  },
  {
    subject_name:'leggings' ,
  },
  {
    subject_name:'leggings' ,
  },
];

const seedSubject = () => Subject.bulkCreate(SubjectData);

module.exports = seedSubject;