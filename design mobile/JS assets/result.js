const paragraph = document.querySelector('#welcome-name-profile');

const params = new URLSearchParams(window.location.search);

params.forEach((value, key) => {
    paragraph.append(`${key} = ${value}`);
    paragraph.append(document.createElement('br'));
});



// Create a new URLSearchParams object with the current URL's search parameters
const urlParams = new URLSearchParams(window.location.search);

// Set a new parameter
urlParams.set("username", "fulcain");
urlParams.set("phoneNumber", "09999999");