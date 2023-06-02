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

    axios.post("https://crudcrud.com/api/1657eddcbc3d4350808edd4abce66daf/appointmentData",myObj)
    .then((response) =>{
        console.log(response.data)
    })
    .catch((err) =>{
        console.log(err)
    })
    // localStorage.setItem(myObj.name, JSON.stringify(myObj));
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

    const editbtn = document.createElement('input');
    editbtn.type = 'button'
    editbtn.value = 'Edit'
    editbtn.onclick = () =>{
        localStorage.removeItem(myObj.name);
        parentElement.removeChild(childElement);
        document.getElementById("name").value = myObj.name;
        document.getElementById("email").value = myObj.email;
        document.getElementById("phone").value = myObj.phone;
    }
    childElement.appendChild(deleteBtn);
    childElement.appendChild(editbtn);
    parentElement.appendChild(childElement);
}

window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/1657eddcbc3d4350808edd4abce66daf/appointmentData")
    .then((response) =>{
        // console.log(response)

        for(var i=0;i<response.data.length;i++){
            showUserOnScreen(response.data[i])
        }
    })
    .catch((error) =>{
        console.log(error)
    })

    console.log(data)
    // const localStorageObj = localStorage;
    // const localStorageKeys = Object.keys(localStorageObj)

    // for(var i=0;i<localStorageKeys.length;i++){
    //     const key = localStorageKeys[i]
    //     const userDetailsString = localStorageObj[key];
    //     const userDetailsObj = JSON.parse(userDetailsString);
    //     showUserOnScreen(userDetailsObj)
    // }
})
  
  