const { Post } = require('../models');
// id, date, price, title, location, contact, image, subject_id
const postData = [
  {

    description:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {

    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {

    description:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {

    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
