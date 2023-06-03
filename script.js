function saveToLocalStorage(event){
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phonenumber = event.target.phonenumber.value;

    const myObj = {
        name,
        email,
        phonenumber
    }

    axios.post("https://crudcrud.com/api/84ee26d972024be2b7bbd101b2c18902/appointmentdata",myObj)
    .then((response) =>{
        showUserOnScreen(response.data)
        console.log(response)
    })
    .catch((err) =>{
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>"
        console.log(err);
    })
    // localStorage.setItem(myObj.name, JSON.stringify(myObj));
    // showUserOnScreen(myObj);
}

window.addEventListener("DOMContentLoaded", () =>{
    const data = axios.get("https://crudcrud.com/api/84ee26d972024be2b7bbd101b2c18902/appointmentdata")
    .then((response) =>{
        // console.log(response)

        for(var i=0;i<response.data.length;i++){
            showUserOnScreen(response.data[i])
        }
        console.log(data)
    })
    .catch((err) =>{
        console.log(err)
    })

    // const localStorageObj = localStorage;
    // const localStorageKeys = Object.keys(localStorageObj)

    // for(var i=0;i<localStorageKeys.length;i++){
    //     const key = localStorageKeys[i]
    //     const userDetailsString = localStorageObj[key];
    //     const userDetailsObj = JSON.parse(userDetailsString);
    //     showUserOnScreen(userDetailsObj)
    // }
})
  
  

function showUserOnScreen(user){
    user = {
        _id: '',
        name: '',
        email: '',
        phonenumber: ''
    }
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phonenumber').value = '';

    if(localStorage.getItem(user.email)!==null){
        removeUsersFromScreen(user.email);
    }
    const parentNode = document.getElementById("listOfItems");
    // const div = document.createElement("div");
    // div.className = "listOfItems";
    // div.id = user.email;
    // div.innerHTML = ``
    // div.innerHTML += `<h4>${user.name}</h4>`

    // const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
    // <button onclick=deleteUser('${user._id}')> Delete User</button>
    // <button onclick=editUserDetails('${user._id}')>Edit</button>
    // </li>`

    const childHTML = `<li id=${user._id}> ${user.name} - ${user.email}
    <button onclick=deleteUser('${user._id}')>Delete User</button>
    <button onclick=editUserDetails('${user._id}','${user.name}','${user.email}','${user.phonenumber}')>Edit</button> </li>`
    parentNode.innerHTML += childHTML;

}
function editUserDetails(email, name, phonenumber){
    document.getElementById('email').value = email;
    document.getElementById('name').value=name;
    document.getElementById('phonenumber').value = phonenumber;

    deleteUser(email);
}

function removeUsersFromScreen(userId){
    const parentNode = document.getElementById('listOfItems');
    const childNodeToBeDeleted = document.getElementById(userId);
    if(childNodeToBeDeleted){
        parentNode.removeChild(childNodeToBeDeleted)
    }
}

function deleteUser(userId){

    axios.delete(`https://crudcrud.com/api/84ee26d972024be2b7bbd101b2c18902/appointmentdata/${userId}`)
    .then((response) =>{
        removeUsersFromScreen(response.userId);
        console.log(response)
    })
    .catch((err)=>{
        console.log(err);
    })
    // console.log(email);
    // localStorage.removeItem(email);
    // removeUsersFromScreen(email);
}