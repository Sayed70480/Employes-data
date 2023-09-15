async function allUsers() {
  const users = await fetch('https://dummyjson.com/users');
  const data = await users.json();
  const results = data.users;

  results.map(user => {
    const table = document.querySelector('table');

    const tablerow = document.createElement('tr');
    tablerow.style.textAlign = "center"

    const userid = document.createElement('td');
    userid.innerHTML = user.id;
    tablerow.appendChild(userid);
    const userFirstName = document.createElement('td');
    userFirstName.innerHTML = user.firstName;
    tablerow.appendChild(userFirstName);
    const userLastName = document.createElement('td')
    userLastName.innerHTML = user.lastName;
    tablerow.appendChild(userLastName)

    const details = document.createElement('td')
    tablerow.appendChild(details)
    const btn = document.createElement('button');
    btn.style.height = "6vh";
    btn.style.width = '100%';
    btn.innerHTML = "MORE DETAIL";
    btn.style.background = 'green'
    btn.style.cursor = 'pointer'
    btn.style.color = 'white'
    btn.classList.add('#but')
    btn.addEventListener('click', function () {

      window.location.href=`singleDB.html?userid=${user.id}`     
    })
      details.appendChild(btn)
      table.appendChild(tablerow)

    })

  }
allUsers();




