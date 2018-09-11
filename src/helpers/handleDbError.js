module.exports = function(res, err){
  let statusCode = 500

  if(err && typeof err.data === 'object' && err.data.statusCode) {
    statusCode = err.data.statusCode
  }
  console.error(err)
  return res.status(statusCode).send(err.toString())
}
