/* Step 1: using axios, send a GET request to the following URL 
  (replacing the palceholder with your Github name):
  https://api.github.com/users/<your name>
*/

/*
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const cardsContainer = document.querySelector('.cards');

const createCard = function(data){
  const cardz = document.createElement('div'),
  avatar = document.createElement('img'),
  cardInfo = document.createElement('div'),
  realName = document.createElement('h3'),
  userName = document.createElement('p'),
  location = document.createElement('p'),
  profile = document.createElement('p'),
  linkAddress = document.createElement('a'),
  followers = document.createElement('p'),
  following = document.createElement('p'),
  bio = document.createElement('p');

  cardz.classList.add('card')
  cardInfo.classList.add('card-info')
  realName.classList.add('name')
  userName.classList.add('username');

  const linkItem = document.createAttribute('href');
  linkAddress.setAttributeNode(linkItem);
  
    avatar.src = data.avatar_url;
    realName.textContent = data.name;
    userName.textContent = data.login;
    location.textContent = data.location;
    linkAddress.href= data.html_url;
    linkAddress.textContent = data.html_url;
    followers.textContent = `Following: ${data.followers}`;
    following.textContent = `Followers: ${data.following}`;
    bio.textContent = data.bio;

    cardz.appendChild(avatar);
    cardz.appendChild(cardInfo);
    cardInfo.appendChild(realName);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);
    profile.appendChild(linkAddress);

  return cardz;
};

// cardsContainer.appendChild(createCard(followersArray))



// API's BELOW
//MY PROFILE

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "nobro777",
  "kevin11jensen",
  "svyatokshin",
  "dakotacahill",
];


followersArray.forEach(data => {
  axios.get(`https://api.github.com/users/${data}`)
.then(response => {
  console.log('my personal github info;', response.data);
  cardsContainer.appendChild(createCard(response.data));
}).catch(error =>{
  console.log(error);
})
});





// })

// axios.get("https://api.github.com/users/nobro777")
// .then(response => {
//   console.log('my personal github info;', response.data);
//   cardsContainer.appendChild(createCard(response.data));
// }).catch(error =>{
//   console.log(error);
// })
// axios.get("https://api.github.com/users/tetondan")
// .then(response => {
//   console.log('my personal github info;', response.data);
//   cardsContainer.appendChild(createCard(response.data));
// }).catch(error =>{
//   console.log(error);
// })
// axios.get("https://api.github.com/users/dustinmyers")
// .then(response => {
//   console.log('my personal github info;', response.data);
//   cardsContainer.appendChild(createCard(response.data));
// }).catch(error =>{
//   console.log(error);
// })
// axios.get("https://api.github.com/users/justsml")
// .then(response => {
//   console.log('my personal github info;', response.data);
//   cardsContainer.appendChild(createCard(response.data));
// }).catch(error =>{
//   console.log(error);
// })
// axios.get("https://api.github.com/users/luishrd")
// .then(response => {
//   console.log('my personal github info;', response.data);
//   cardsContainer.appendChild(createCard(response.data));
// }).catch(error =>{
//   console.log(error);
// })
// axios.get("https://api.github.com/users/bigknell")
// .then(response => {
//   console.log('my personal github info;', response.data);
//   cardsContainer.appendChild(createCard(response.data));
// }).catch(error =>{
//   console.log(error);
// })

// WHO FOLLOWS ME
// axios.get("https://api.github.com/users/nobro777/followers")
// .then(response => {
//   console.log('people who follow me on github;', response.data);
//   })
// .catch(error => {
//   console.log(error);
// })


// WHO I FOLLOW
// axios.get("https://api.github.com/users/nobro777/following")
// .then(response => {
//   console.log("list of people i follow on github;", response.data);
//   response.data.forEach(elem => {
//     followersArray.push(elem);
//   })
// })
// .catch(error => {
//   console.log(error);
// })


/* Step 2: Inspect and study the data coming back, this is YOUR 
  github info! You will need to understand the structure of this 
  data in order to use it to build your component function 

  Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
  create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element: */


/* List of LS Instructors Github username's: 
  
*/
