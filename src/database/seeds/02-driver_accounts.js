

const driverSeedData= [
  {
    id: 1,
    user_id: 5,
    vehicle_make: '',
    vehicle_name: '',
    vehicle_licplates : 'MJR-5864',
    criminal_record: false,
    behavior_test: true,
    certification_test: true,
    active: true
  },
  {
    id: 2,
    user_id: 6,
    vehicle_make: '',
    vehicle_name: '',
    vehicle_licplates : 'LML-675',
    criminal_record: false,
    behavior_test: true,
    certification_test: true,
    active: true
  },
  {
    id: 3,
    user_id: 7,
    vehicle_make: '',
    vehicle_name: '',
    vehicle_licplates : 'CHC-986',
    criminal_record: false,
    behavior_test: true,
    certification_test: true,
  },
  {
    id: 4,
    user_id: 8,
    vehicle_make: '',
    vehicle_name: '',
    vehicle_licplates : 'CHC-986',
    criminal_record: false,
    behavior_test: true,
    certification_test: true,
  },
]


exports.seed = function(knex, Promise) {
  // s ALL existing entries
  return knex('driver_accounts').del()
    .then(async function () {
      // Inserts seed entries
      await knex('driver_accounts').insert(driverSeedData);
      await knex.raw(`SELECT SETVAL('driver_accounts_id_seq', MAX(id)) FROM driver_accounts`)
      return knex

    });
};
