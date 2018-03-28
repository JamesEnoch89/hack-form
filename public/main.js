const postForm = () =>{

  // const hackURL= "http://metro-node-texting.herokuapp.com/send/message";

  var data = {
    "number": document.querySelector("#phone").value,
    "name": document.querySelector("#name").value,
    "message": document.querySelector("#request").value,
  };
  
  // fetch(hackURL, {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: new Headers({
  //     'Content-Type': 'application/json'
  //   })
  // }).then(res => res.json())
  // .catch(error => console.error('Error:', error))
  // .then(response => console.log('Success:', response));

  //document.querySelector("#thankyou").textContent = submitText;

  document.querySelector("#form").classList.add("hideForm");
  document.querySelector("#thankyou").classList.remove("hideForm");
}



