import fs from "fs";

function copyResult(error, source, destination) {
  if (error) throw error;
  console.log(source + " was copied to " + destination);
}

function copyFile(source = "source.txt", destination = "destination.txt") {
  fs.copyFile(source, destination, (error) =>
    copyResult(error, source, destination)
  );
}

copyFile("README.md", "src/markdown/readme.md");
