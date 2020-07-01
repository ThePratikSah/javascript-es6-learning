function getUser(name) {
  fetch(`https://api.github.com/users/${name}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
    });
}

async function getUser(name) {
  const res = await fetch(`https://api.github.com/users/${name}`);
  const data = res.json();
  return data;
}

//get user data
getUser("ThePratikSah").then((data) => {
  console.log(data.name);
});
