const userInput = document.getElementById("userString");
const directLink = document.getElementById("directLink");

function ConvertToDirectLink() {
    directLink.textContent = userInput.value.replace(/dropbox/g, "dl.dropboxusercontent")
    directLink.href = directLink.textContent;
}