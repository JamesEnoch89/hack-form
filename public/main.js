const hackURL :metro-node-texting.herokuapp.com/send/message;
var data = {
    "number":"555-867-5309",
    "message":"I need more cow bell!"
    "name":"Chris Walken"
};

fetch(hackURL, {
  method: 'POST', 
  body: JSON.stringify(data), 
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

// I don't know what the headers section is for? Is that pertinent/necessary?