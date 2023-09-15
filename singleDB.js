const urlParams = new URLSearchParams(window.location.search); //it will bring data form url which is after ?
const userId = urlParams.get('userid'); //  it will get only value of that perameter which is after ? 
async function detail(userId) {
    const url = await fetch(`https://dummyjson.com/users/${userId}`);
    const res = await url.json();
const container = document.querySelector('.userDetail')

const image = document.createElement('img');
image.src = res.image;

const name = document.createElement('h4')
name.innerHTML = `NAME : ${res.firstName} ${res.lastName}`;

const id = document.createElement('h4')
id.innerHTML = `ID : ${res.id}`;

const userName = document.createElement('h4');
userName.innerHTML = `USER NAME : ${res.username}`;

const pass = document.createElement('h4');
pass.innerHTML =`PASSWORD : ${res.password}`

const userage = document.createElement('h4');
userage.innerHTML = `AGE : ${res.age}`

const usergender = document.createElement('h4');
usergender.innerHTML = `GENDER : ${res.gender}`

const useremail = document.createElement('h4');
useremail.innerHTML = `EMAIL : ${res.email}`;


const usernum = document.createElement('h4');
usernum.innerHTML = `PHONE : ${res.phone}`


container.appendChild(image)
container.appendChild(name)
container.appendChild(id)
container.appendChild(userName)
container.appendChild(pass)
container.appendChild(userage)
container.appendChild(usergender)
container.appendChild(useremail)
container.appendChild(usernum)

}

detail(userId);
