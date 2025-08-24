const promise = fetch("https://api.github.com/users/tirumalateja19");

console.log(promise);

promise
  .then((response) => response.json())
  .then((data) => {
    console.log(data.login);
    console.log(data.name);
  })
  .catch((error) => console.error("Error:", error));
