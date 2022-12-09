/* Visit any page on the browser, and replace the content 
of all the p tags with the phrase “How’s the Josh?” using Javascript. */

const tags = document.getElementsByTagName("p");

for (let i in tags) {
  tags[i].innerHTML = "How's the Josh";
}
