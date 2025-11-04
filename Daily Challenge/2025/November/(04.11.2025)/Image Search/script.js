function imageSearch(images, term) {
  term = term.toLowerCase();
  return images.filter(img => img.toLowerCase().includes(term));
}
