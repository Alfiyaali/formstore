function savelocalStorage(event){
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const myObj = {
        name,
        email,
        phone
    }
    localStorage.setItem(myObj.name, JSON.stringify(myObj));
    showUserOnScreen(myObj);
}

function showUserOnScreen(myObj){
    const parentElement = document.getElementById("listOfItems");

    parentElement.innerHTML += `<li>${myObj.name} - ${myObj.email} - ${myObj.phone}</li> `;
}