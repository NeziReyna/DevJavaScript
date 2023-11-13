let getLogin = document.getElementById("loginButton")
getLogin.addEventListener("click", () =>{
  window.open("views/login.html")
});

let getCreatePost = document.getElementById("createPostButton");
getCreatePost.addEventListener("click", () => {
  window.open("views/createPost.html", "_blank");
});
