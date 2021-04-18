//create variable that stores button in a JavaScript variable
let firstButton = document.querySelector("#firstButton")
let gifs;

//add an event listener to the button.
//Run the function sendApiRequest when the button is clicked
firstButton.addEventListener("click", () => {
    sendApiRequest() //API, "#input
})

//fetch data from the API
async function sendApiRequest() { //API_KEY

    //get the user input value from the input text field
    let userInput = document.querySelector('#firstInput').value;

    //send the request for data. Hope for status code: 200
    let response = await fetch(`/giphySearch/${userInput}`);
    console.log(response);

    //get data in form of usable .json
    gifs = await response.json();
    // console.log(gifs);

    //call the function that does something with the .json data
    useApiData(gifs);

}

//do something with the API data you've just received
function useApiData(gifs) {
    document.querySelector('#firstImage').innerHTML = `<img id="gif" src="${gifs.data[0].images.original.url}">`
}







