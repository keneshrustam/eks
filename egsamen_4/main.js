function register() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    let arr = [username,email,password];

    let jsonData = JSON.stringify(arr);
    localStorage.setItem("myData", jsonData); 
    alert(`Регистрация завершена!\nИмя пользователя: ${username}\nEmail: ${email}`);
  }


