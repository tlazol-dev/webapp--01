const Router = require(`express`).Router;
const apiRouter = Router()


apiRouter.get('/', (req, res)=>{
  res.json({
    '/api/users' : 'Show users',
    '/api/drivers' : 'Show drivers'
  })
})


apiRouter.get('/users', (req, res)=>{
  res.json([
    {
      name : 'Dana Sanchez',
      ife : 57684930209,
      municipio : 'Naucalpan',
      email : 'danasanchez@gmail.com',
      movil : 5538574672,
      userId : 1
    }
  ])
})

apiRouter.get('/drivers', (req, res)=>{
  res.json([
    {
      name : 'Paula Gonzalez',
      vehiculo : 'Mazda',
      placas : 'PALG0612',
      municipio : 'Atizapan',
      movil : 5586294886,
      driverId : 1
    }
  ])
})


module.exports = apiRouter
