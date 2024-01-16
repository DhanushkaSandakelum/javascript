const { data1 } = require("../data/data");

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        let data = data1;

        resolve(data);
      } else {
        reject(new Error("Failed to fatech data"));
      }
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data fetched: ", data);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error.message);
  });
