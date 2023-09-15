let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
let telegram_bot_id = "6084042694:AAHBwmkds5IWXdbpoSXDq8E5CLbGUh2WfUM"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
let chat_id = 1862692289; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
let email, text, message;
function sendtelegram() {
    email = document.getElementById("email").value;
    text = document.getElementById("text").value;
    message = document.getElementById("message").value;
    message = "email: " + email + "\ntext: " + text + "\nmessage: " + message ;
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        
    });
    document.getElementById("email").value = "";
    document.getElementById("text").value = "";
    document.getElementById("message").value = "";
    return false;
};