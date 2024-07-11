// Write your code here!
const mainNode = document.querySelector("#main");
if (mainNode) {
  mainNode.remove();
}
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Brandon Collins is the champion";
