function getExtension(filename) {
  if (!filename.includes(".")) {
    return "none";
  } else if (filename[filename.length - 1] === ".") {
    return "none";
  } else {
    let index = filename.lastIndexOf(".");
    let extension = filename.substring(index + 1);

    return extension;
  }
}
