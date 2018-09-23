const Bcrypt = require('bcryptjs')

const RECOMMENDED_ROUNDS = 12


const userSeedData = [
  {
    id: 1,
    first_name:'Paula',
    last_name: 'Gonzalez',
    telefono: '5567984309',
    email: 'paupau@gmail.com',
    password: Bcrypt.hashSync('trapeointenso' , RECOMMENDED_ROUNDS),
    register_image_link: '',
    profile_image_link: '',
  },
  {
    id: 2,
    first_name:'Gina',
    last_name: 'Ramirez',
    telefono: '5565203984',
    email: 'ginaramirez@gmail.com',
    password: Bcrypt.hashSync('memomemo' , RECOMMENDED_ROUNDS),
    register_image_link: '',
    profile_image_link: '',
  },
  {
    id: 3,
    first_name:'Laura',
    last_name: 'Clemente',
    telefono: '5578230186',
    email: 'lauraclemente@gmail.com',
    password: Bcrypt.hashSync('gatogato' , RECOMMENDED_ROUNDS),
    register_image_link: '',
    profile_image_link: '',
  },

]


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(async function () {
      // Inserts seed entries
      await knex('users').insert(userSeedData);

      await knex.raw(`SELECT SETVAL('users_id_seq', MAX(id)) FROM users`)
      return knex
    });
};
