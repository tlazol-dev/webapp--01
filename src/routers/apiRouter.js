const Router = require(`express`).Router;
const User = require('../models/User.js')
const Journey = require('../models/Journey.js')


const apiRouter = Router()


const showRoute = (req, res)=>{
  res.json({
    '/api/passengers' : 'Show passengers',
    '/api/drivers' : 'Show drivers'
  })
}



const fetchManyPassengers = (req, res)=>{
    Passenger.query()
    .eager('passengerJourneys')
    .then((recordsWhitPassengers)=>{
      res.status(200).json(recordsWhitPassengers)
    })
    .catch((err)=>{
      console.log(err);
      var errorMessage = err.toString()
      res.status(500).send(errorMessage)
    })
}



const fetchOnePassenger = (req, res)=>{
  const db=req.app.locals.db

  const idInRoute = req.params._id
    console.log(idInRoute);

    db.select('*').from('passenger_users')
      .where('id', '=', idInRoute)
      .then((dbRecordsReturned)=>{
        res.json(dbRecordsReturned)
      })
}

 const createOnePassenger = function(req, res){
   // console.log(req.body)
   Passengers.query()
     .insert(req.body)
     .then((newRecord)=>{
       res.status(200).json(newRecord)
     })
 }

 const editOnePassenger = (req, res)=>{
   Passengers.query()
      .updateAndFetchById( req.params._id, req.body)
      .then((updatedRecord)=>{
        res.status(200).json(updatedRecord)
      })
 }


const deleteOnePassenger = (req, res)=>{
   Passengers.query()
     .deleteById(req.params._id)
     .then((deleteRecord)=>{
       res.status(200).json(deleteRecord)
     })
}



const fetchManyDrivers = (req, res)=>{
    Driver.query()
     .eager('driverJourneys')
     .then((recordsWhitPassengers)=>{
       res.status(200).json(recordsWhitPassengers)
     })
     .catch((err)=>{
       var errorMessage = err.toString()
       res.status(500).send(errorMessage)
    })
  }


const fetchOneDriver = (req, res)=>{
  const db = req.app.locals.db
  const idInRoute = req.params._id
   console.log(idInRoute)

     db.select('*').from('drivers_users')
     .where('id', '=', idInRoute)
     .then((dbRecordsReturned)=>{
       res.json(dbRecordsReturned)
   })
}

const createOneDriver = function(req, res){
  // console.log(req.body)
    Driver.query()
    .insert(req.body)
    .then((newRecord)=>{
       res.status(200).json(newRecord)
    })
}

const editOneDriver = (req, res)=>{
    Driver.query()
    .updateAndFetchById( req.params._id, req.body)
    .then((updatedRecord)=>{
       res.status(200).json(updatedRecord)
    })
}

const deleteOneDriver = (req, res)=>{
    Driver.query()
    .deleteById(req.params._id)
    .then((deleteRecord)=>{
       res.status(200).json(deleteRecord)
    })
}

// ------

const fetchOnePassengerJourneys = async (req, res)=>{
  const idInRoute = req.params._id

  const records = await User.query()
      .findById(idInRoute)
      .eager("passengerJourneys")


  res.status(200).json(records)
}



apiRouter.get('/', showRoute)

apiRouter
  .get('/users', fetchManyPassengers)
  .get('/users/:_id', fetchOnePassenger)
  .get('/users/:_id/journeys/passenger', fetchOnePassengerJourneys)
  .post('/users', createOnePassenger)
  .put('/passengers/:_id', editOnePassenger)
  .delete('/passengers/:_id', deleteOnePassenger)


// apiRouter
//   .get('/passengers', fetchManyPassengers)
//   .get('/passengers/:_id', fetchOnePassenger)
//   .post('/passengers', createOnePassenger)
//   .put('/passengers/:_id', editOnePassenger)
//   .delete('/passengers/:_id', deleteOnePassenger)


apiRouter
  .get('/drivers', fetchManyDrivers)
  .get('/drivers/:_id', fetchOneDriver)
  .post('/drivers', createOneDriver)
  .put('/drivers/:_id', editOneDriver)
  .delete('/drivers/:_id', deleteOneDriver)


module.exports = apiRouter
