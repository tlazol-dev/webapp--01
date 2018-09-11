/**
 * Validates id,email,password
 * @return modelInstance
 */

module.exports = function _validateModelFields(modelInstance){
  if (modelInstance.id) {
    throw new objection.ValidationError({
      id: [{
        message: "'id' value cannot defined before insert",
        keyword: null,
        params: null
      }]
    });
  }

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!modelInstance.email.match(emailRegex)) {
    throw new objection.ValidationError({
      statusCode: 401,
      id: [{
        message: "'email' field is not a valid email format; model cannot be savied/updated",
        keyword: null,
        params: null
      }]
    });
  }

  if (modelInstance.password.length < 1) {
    throw new objection.ValidationError({
      statusCode: 401,
      id: [{
        message: "'password' field needs to have a length greater than 0; model cannot be saved/updated",
        keyword: null,
        params: null
      }]
    });
  }

  return modelInstance
}
