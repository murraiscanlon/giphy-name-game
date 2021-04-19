//create variable that stores button in a JavaScript variable
let firstButton = document.querySelector("#firstButton")
let secondButton = document.querySelector("#secondButton")
let thirdButton = document.querySelector("#thirdButton")
let gifs;

//add an event listener to the button.
//Run the function sendApiRequest when the button is clicked
firstButton.addEventListener("click", () => {
    sendApiRequest('#firstInput')
});

firstButton.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendApiRequest('#firstInput')
    }
});

secondButton.addEventListener("click", () => {
    sendApiRequest('#secondInput')
});

secondButton.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendApiRequest('#secondInput')
    }
});

thirdButton.addEventListener("click", () => {
    sendApiRequest('#thirdInput')
});

thirdButton.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendApiRequest('#thirdInput')
    }
});

//fetch data from the API
async function sendApiRequest(buttonId) {

    //get the user input value from the input text field
    let userInput = document.querySelector(buttonId).value;

    //send the request for data. Hope for status code: 200
    let response = await fetch(`/giphySearch/${userInput}`);
    // console.log(response);

    //get data in form of usable .json
    gifs = await response.json();
    // console.log(gifs);

    let position = '';
    if (buttonId === "#firstInput"){
        position = "#firstImage";
    } else if (buttonId === "#secondInput"){
        position = "#secondImage";
    } else {
        position = "#thirdImage";
    }

    //call the function that does something with the .json data
    useApiData(gifs, position);

}

//do something with the API data you've just received
function useApiData(gifs, imagePosition) {
    document.querySelector(imagePosition).innerHTML = `<img id="gif" src="${gifs.data[0].images.original.url}">`
}







