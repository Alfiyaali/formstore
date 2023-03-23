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
    const childElement = document.createElement('li');

    childElement.textContent = myObj.name + " - "+myObj.email+" - "+myObj.phone

    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button'
    deleteBtn.value = 'Delete'
    deleteBtn.onclick = () =>{
        localStorage.removeItem(myObj.name);
        parentElement.removeChild(childElement)
    }
    childElement.appendChild(deleteBtn);
    parentElement.appendChild(childElement);
}