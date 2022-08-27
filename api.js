const url = 'https://randomuser.me/api/?results=10';

(function loadUser(){
    fetch(url)
    .then(res => res.json())
    .then( data => displayUser(data.results))
    }) ();
    

const displayUser = users =>{
    const displayUser = document.getElementById('user');
    for(const user of users){
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
        <h2> User Name : ${user.name.title} ${user.name.first} ${user.name.last} </h2>
        <p> User Email : ${user.email}</p>
        <p> user Location : ${user.location.city}</p>
        <p></p>
        `;
        userDiv.classList.add('user')
        displayUser.appendChild(userDiv);
    }

}
