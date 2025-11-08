function canPost(message) {
  const length = message.length;

  if (length <= 40) {
    return "short post";
  } else if (length <= 80) {
    return "long post";
  } else {
    return "invalid post";
  }
}
