const express = require('express')
const ejs = require('ejs')

const bodyParser = require('body-parser')

const knex = require('knex')
const { Model } = require('objection')

const passport = require('passport')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

const registerLocalStrategy = require(`./src/middleware/passport-local--registerLocalStrategy.js`)
const { configDeserializeUser, configSerializeUser } = require('./src/helpers/passport-local--sessionActions.js')


const dbConfigObj = require('./knexfile.js')

const apiRouter = require(`./src/routers/apiRouter.js`)
const authRouter = require(`./src/routers/authRouter.js`)

const app = express()
const PORT = 3000


app.use(cookieParser() )
app.use( cookieSession ({
   name: 'cookiesession',
   secret: 'supercookiesecret',
   httpOnly: true,
   signed: false

}))


app.use(passport.initialize())
app.use(passport.session())
passport.use(registerLocalStrategy())
passport.serializeUser(configSerializeUser())
passport.deserializeUser(configDeserializeUser())

const appDb = knex(dbConfigObj.development)
Model.knex(appDb)
app.locals.db = appDb

app.use( bodyParser.urlencoded({extended:false}) )
app.use( bodyParser.json())



app.use(express.static(`${__dirname}/public`) )

app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')
app.set('views', `${__dirname}/src/views`)


app.use('/api', apiRouter)
app.use('/auth', authRouter)

// app.use((req, res)=>{
//   res.send('<h3> 404 - BIG ERROR - PAGE NO EXIST </h3>')
//  })


 app.use((req, res)=>{
   res.render('reactApp.ejs')
 })

app.listen(PORT,()=>{
  console.log(`=============`);
  console.log(`App listening on localhost:${PORT}`);
  console.log(`Enviroment : ${process.env.NODE_ENV}`);
  console.log(`=============`);
})
