const NodeGeocoder = require('node-geocoder');


const hi =async ()=>{
    
const options = {
    provider: 'google',
  
    fetch: customFetchImplementation,
    apiKey: 'AIzaSyDWfkwz4R2XskO5KWbUqG3OoSDz09FqTRU', // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
  };
  
  const geocoder = NodeGeocoder(options);
  
  
  const res = await geocoder.reverse({ lat: 45.767, lon: 4.833 });

}


hi()