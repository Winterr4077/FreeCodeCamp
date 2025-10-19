function extractAttributes(element) {
  let index = element.indexOf(">");
  let attributes = element.slice(0, index);

  index = attributes.indexOf(" ");
  attributes = attributes.slice(index);
  attributes = attributes.trim();

  let matches = attributes.match(/([\w-]+)="([^"]*)"/g);
  if (!matches) return [];

  let result = matches.map(attr => {
    let parts = attr.split("=");
    let name = parts[0];
    let value = parts[1].replace(/"/g, "");
    return `${name}, ${value}`;
  });

  return result;
}
