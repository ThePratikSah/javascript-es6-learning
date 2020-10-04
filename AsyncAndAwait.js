// function getUser(name) {
//   fetch(`https://api.github.com/users/${name}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (json) {
//       console.log(json);
//     });
// }

async function getUser(name) {
  const res = await fetch(`https://api.github.com/users/${name}`);
  const data = res.json();
  return data;
}

//get user data
getUser("ThePratikSah").then((data) => {
  // setting data from the github api
  let img = document.querySelector("#card-img");
  let p = document.querySelector("#card-title");
  let bio = document.querySelector(".bio");
  let url = document.querySelector("#github-url");

  img.src = data.avatar_url;
  p.innerHTML = data.name;
  bio.innerHTML = data.bio;
  url.href = data.html_url;

  document.querySelector(".loader").style.display = "none";
  document.querySelector(".card").style.display = "block";

});


