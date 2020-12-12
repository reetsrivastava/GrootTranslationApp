var textInput = document.querySelector("#input");
var pirateTranslate = document.querySelector("#pirate");
var dothrakiTranslate = document.querySelector("#dothraki");
var grootTranslate = document.querySelector("#groot");
var outputDiv = document.querySelector("#output");

var pirateURL = "https://api.funtranslations.com/translate/pirate.json";
var dothrakiURL = "https://api.funtranslations.com/translate/dothraki.json";
var grootURL = "https://api.funtranslations.com/translate/groot.json";


function grootTranslationURL(input) {
    return grootURL+"?text="+input;
}

function errorHandler(error) {
    console.log("Error Occurred",error);
    alert("Some error occurred, Please try again after some time!");
}





function grootHandler() {
    var inputTxt = textInput.value;

    fetch(grootTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
        
    })
    .catch(errorHandler)
}


grootTranslate.addEventListener("click",grootHandler);