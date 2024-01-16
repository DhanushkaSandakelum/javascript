const { data1 } = require("../data/data");

function fetchData(cb) {
  // Simulate fetching data Asynchronously
  setTimeout(function () {
    data = data1;

    cb(data);
  }, 1000);
}

function processFetchedData(data) {
  console.log("Processed data: ", data);
}

fetchData(processFetchedData);
