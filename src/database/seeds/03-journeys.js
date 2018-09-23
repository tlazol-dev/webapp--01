

const journeysData = [
  {
    id: 1,
    passenger_user_id : 1,
    driver_user_id : 2,
    driver_accepted_at: new Date(Date.now() - 388232),
    journey_initiated_at : new Date(Date.now() - 282232),
    journey_terminated_at : new Date(Date.now() - 182232),
    costo : 59,
    distancia : 3.2,
    route_image_link : ""
  },
  {
    id: 2,
    passenger_user_id : 1,
    driver_user_id : 3,
    driver_accepted_at: new Date(Date.now() - 488232),
    journey_initiated_at : new Date(Date.now() - 222232),
    journey_terminated_at : new Date(Date.now() - 23232),
    costo : 159,
    distancia : 5.2,
    route_image_link : ""
  },
  {
    id: 3,
    passenger_user_id : 3,
    driver_user_id : 2,
    driver_accepted_at: new Date(Date.now() - 384232),
    journey_initiated_at : new Date(Date.now() - 75454),
    journey_terminated_at : new Date(Date.now() - 12232),
    costo : 100,
    distancia : 4.2,
    route_image_link : ""
  }

]


exports.seed = function(knex, Promise) {
  // s ALL existing entries
  return knex('journeys').del()
    .then(async function () {
      // Inserts seed entries
      await knex('journeys').insert(journeysData);
      await knex.raw(`SELECT SETVAL('journeys_id_seq', MAX(id)) FROM journeys`)
      return knex

    });
};
