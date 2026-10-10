var user=[
    {
        name: "John Doe",
        gender: "Male",
        image: "john.png"
    },
    {
        name: "Jane Doe",
        gender: "Female",
        image: "jane.png"
    }
];
var index=0;
function toggleUser() {
  if(index==0){
    index = 1;
  }
  else{
    index = 0;
  }
  document.getElementById("user-name").innerText = user[index].name;
  document.getElementById("user-gender").innerText = user[index].gender;
  document.getElementById("user-image").src = user[index].image;
}
function randomuser() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const users = data.results[0];
      document.getElementById("user-name").innerText = `${users.name.first} ${users.name.last}`;
      document.getElementById("user-gender").innerText = users.gender;
      document.getElementById("user-image").src = users.picture.large;
    })
    .catch(error => console.error('Error fetching random user:', error));
}
