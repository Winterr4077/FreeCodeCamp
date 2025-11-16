function generateSignature(name, title, company) {

  if (/^[A-I]/i.test(name)) {
    return ">>" +name + ", " + title + " at " + company;
  } else if (/^[J-R]/i.test(name)){
    return "--" +name + ", " + title + " at " + company;
  } else if (/^[S-Z]/i.test(name)){
    return "::" +name + ", " + title + " at " + company; 
  }
}
