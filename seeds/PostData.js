const { Post } = require('../models');
// id, date, price, title, location, contact, image, subject_id
const postData = [
  {
    date: '2023-09-10',
    price: 50.0,
    title: 'Vintage Table',
    location: 'New York',
    description: 'A beautiful vintage table.',
    contact: 'john.doe@example.com',
    image: 'http://via.placeholder.com/150',
    similarItem: 'Vintage Chair',
    subject_id: 1,
    user_id: 1,
  },
  {
    date: '2023-09-11',
    price: 100.0,
    title: 'Modern Chair',
    location: 'San Francisco',
    description: 'A sleek modern chair.',
    contact: 'jane.doe@example.com',
    image: 'http://via.placeholder.com/150',
    similarItem: 'Modern Table',
    subject_id: 1,
    user_id: 2,
  },
  {
    date: '2023-09-12',
    price: 150.0,
    title: 'Antique Lamp',
    location: 'Los Angeles',
    description: 'An antique lamp with intricate details.',
    contact: 'jack.doe@example.com',
    image: 'http://via.placeholder.com/150',
    similarItem: 'Antique Table',
    subject_id: 2,
    user_id: 3,
  },
  {
    date: '2023-09-13',
    price: 200.0,
    title: 'Contemporary Sofa',
    location: 'Chicago',
    description: 'A comfortable contemporary sofa.',
    contact: 'jill.doe@example.com',
    image: 'http://via.placeholder.com/150',
    similarItem: 'Contemporary Chair',
    subject_id: 2,
    user_id: 1,
  },
  {
    date: '2023-09-14',
    price: 250.0,
    title: 'Retro Coffee Table',
    location: 'Houston',
    description: 'A retro-style coffee table.',
    contact: 'jim.doe@example.com',
    image: 'http://via.placeholder.com/150',
    similarItem: 'Retro Sofa',
    subject_id: 3,
    user_id: 2,
  },
  {
    date: '2023-09-15',
    price: 300.0,
    title: 'Classic Bookshelf',
    location: 'Phoenix',
    description: 'A classic wooden bookshelf.',
    contact: 'jenny.doe@example.com',
    image: 'http://via.placeholder.com/150',
    similarItem: 'Classic Desk',
    subject_id: 3,
    user_id: 3,
  },
  {
    date: '2023-09-16',
    price: 350.0,
    title: 'Industrial Dining Table',
    location: 'Philadelphia',
    description: 'An industrial-style dining table.',
    contact: 'joe.doe@example.com',
    image: 'http://via.placeholder.com/150',
    similarItem: 'Industrial Chair',
    subject_id: 1,
    user_id: 2,
  },
  {
    date: '2023-09-17',
    price: 400.0,
    title: 'Minimalist Nightstand',
    location: 'San Antonio',
    description: 'A minimalist nightstand.',
    contact: 'jessica.doe@example.com',
    image: 'http://via.placeholder.com/150',
    similarItem: 'Minimalist Bed',
    subject_id: 1,
    user_id: 3,
  },
  {
    date: '2023-09-18',
    price: 450.0,
    title: 'Rustic Cabinet',
    location: 'San Diego',
    description: 'A rustic wooden cabinet.',
    contact: 'james.doe@example.com',
    image: 'http://via.placeholder.com/150',
    similarItem: 'Rustic Dresser',
    subject_id: 2,
    user_id: 1,
  },
  {
    date: '2023-09-19',
    price: 500.0,
    title: 'Mid-Century Modern Armchair',
    location: 'Dallas',
    description: 'A mid-century modern armchair.',
    contact: 'julia.doe@example.com',
    image: 'http://via.placeholder.com/150',
    similarItem: 'Mid-Century Modern Sofa',
    subject_id: 2,
    user_id: 2,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
