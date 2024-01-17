const glob = require("glob");
const imageScalerSingle = require("./imageScaler-single");
const imageScalerThreaded = require("./imageScaler-threaded");

async function main() {
  await Promise.all(
    glob
      .sync("./img/*.jpg")
      .filter((img) => img.indexOf("_small") < 0)
      .map(imageScalerThreaded)
  );
}

main();
