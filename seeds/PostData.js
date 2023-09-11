const { Post } = require('../models');
// id, date, price, title, location, contact, image, subject_id
const postData = [
  {
    contact:'joe',
    price:39.99,
    location:"123 apple street MD",
    image:"", 
    title: 'Blossoming Apricot',
    date: '06/06/06', 
    description:'Branches with pink apricot blossoms against a blue background.',
  },
  {
    contact:'joe',
    price:39.99,
    location:"123 apple street MD",
    image:"",
    title: 'Cosmos Flowers',
    date: '06/06/06', 
    description: 'Pink cosmos flowers against a blue sky.',
  },
  {
    contact:'joe',
    price:39.99,
    location:"123 apple street MD",
    image:"",
    title: 'Sand + Sea = Summer',
    date: '06/06/06', 
    description: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    contact:'joe',
    price:39.99,
    location:"123 apple street MD",
    image:"",
    title: 'Beach Chairs',
    date: '06/06/06', 
    description: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    contact:'joe',
    price:39.99,
    location:"123 apple street MD",
    image:"",
    title: 'Beach Sunrise',
    date: '06/06/06', 
    description: 'Sun setting in the horizon with waves lapping the shore.',
  },
  {
    contact:'joe',
    price:39.99,
    location:"123 apple street MD",
    image:"",
    title: 'Fall Colors',
    date: '06/06/06', 
    description:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {
    contact:'joe',
    price:39.99,
    location:"123 apple street MD",
    image:"",
    title: 'Autumn Mountains',
    date: '06/06/06', 
    description:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    contact:'joe',
    price:39.99,
    location:"123 apple street MD",
    image:"",
    title: 'Frozen River',
    date: '06/06/06', 
    description:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    contact:'joe',
    price:39.99,
    location:"123 apple street MD",
    image:"",
    title: 'Winter Home',
    date: '06/06/06', 
    description:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
