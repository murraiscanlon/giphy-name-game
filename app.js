//create variable that stores button in a JavaScript variable
let buttonFirst = document.querySelector("#getDataFirst")
let buttonMiddle = document.querySelector("#getDataMiddle");
let buttonLast = document.querySelector("#getDataLast");
const API = "q7GtPLWMSA5t8S48wDG2iXKrrDqBzGci"
let gifs;

//add an event listener to the button.
//Run the function sendApiRequest when the button is clicked
buttonFirst.addEventListener("click", () => {
    sendApiRequest(API, "#inputFirst")
})

buttonMiddle.addEventListener("click", () => {
    sendApiRequest(API, "#inputMiddle")
})

buttonLast.addEventListener("click", () => {
    sendApiRequest(API, "#inputLast")
})

//fetch data from the API
async function sendApiRequest(API_KEY, position) {

    //get the user input value from the input text field
    let userInput = document.querySelector(position).value

    //send the request for data. Hope for status code: 200
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${userInput}`)
    console.log(response)

    //get data in form of usable .json
    gifs = await response.json()
    console.log(gifs)

    let wrapper = '';
    if (position === "#inputFirst"){
        wrapper = "#first";
    } else if (position === "#inputMiddle"){
        wrapper = "#middle";
    } else {
        wrapper = "#last";
    }

    //call the function that does something with the .json data
    useApiData(gifs, wrapper)

};

//do something with the API data you've just received
function useApiData(gifs, wrapperparam) {
    document.querySelector(wrapperparam).innerHTML = `<img id="gif" src="${gifs.data[0].images.original.url}">`
}

//test push
console.log("test");





