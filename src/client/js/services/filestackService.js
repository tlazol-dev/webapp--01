import * as filestack from 'filestack-js'

const apikey = 'Aq3R3mGZ9RUqGUnwYssXZz';
const client = filestack.init(apikey);


export function uploadFile(someFile){
  return client.upload(someFile)
}
