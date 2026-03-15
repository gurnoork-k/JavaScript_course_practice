const xhr = new XMLHttpRequest();

xhr.addEventListener('load', ()=>{
  console.log(xhr.response);
})

xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');
xhr.send();
//xhr.open('GET', 'https://supersimplebackend.dev/h');
//^- is not supported
//status code - starts w 4 - error from our side (400, 404, 500)
//if its 5 - error for the backend's side (b crashed)
//if it starts w 2 - succeeded (200, 201, 204)

//some provide a doc page which shows a set of URLs which are supported - BACKEND API
