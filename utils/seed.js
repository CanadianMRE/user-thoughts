const connection = require('../config/connection');
const { User, Thought } = require('../models');
const data = [
  {
    username: 'CanadianMRE',
    email: 'jaymen100@gmail.com',
  },
  {
    username: 'Webmilio',
    email: '123@gmail.com',
  },
];

connection.on('error', (err) => err);

connection.once('open', async () => {
  // Drop existing Users
  await User.deleteMany({});

  // Drop existing Thoughts
  await Thought.deleteMany({});

  await User.collection.insertMany(data);
  process.exit(0);
});
