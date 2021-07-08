import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const makeCard = function (user) {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then((res) => {
      //set vaule
      const data = res.data;
      const card = document.createElement("div");
      card.classList.add("card");
      const img = document.createElement("img");
      img.classList.add("img");
      img.src = data.avatar_url;
      const cardInfo = document.createElement("div");
      cardInfo.classList.add("card-info");
      const name = document.createElement("h3");
      name.classList.add("name");
      name.textContent = data.name;
      const userName = document.createElement("p");
      userName.classList.add("username");
      userName.textContent = data.login;
      const location = document.createElement("p");
      location.textContent = `Location: ${data.location}`;
      const profile = document.createElement("p");
      profile.textContent = `Profile: ${data.html_url}`;
      const followers = document.createElement("p");
      followers.textContent = `Followers: ${data.followers}`;
      const following = document.createElement("p");
      following.textContent = `Following: ${data.following}`;
      const bio = document.createElement("p");
      bio.textContent = `Bio: ${data.bio}`;
      //append info
      card.append(img);
      cardInfo.append(name);
      cardInfo.append(userName);
      cardInfo.append(location);
      cardInfo.append(profile);
      cardInfo.append(followers);
      cardInfo.append(following);
      cardInfo.append(bio);
      card.append(cardInfo);
      console.log(card);
      //append cards
      const cardsContainer = document.querySelector(".cards");
      cardsContainer.appendChild(card);
    })
    .catch((err) => console.log(err.message, `wrong lllll`));
};
makeCard("jie-chelchel");
const followersArray = [
  "rkshockey",
  "D2MBingo5",
  "Klove-A",
  "SelfCheckout94",
  "fernando817mm",
];

followersArray.forEach((user) => {
  makeCard(user);
});
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
