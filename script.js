let searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");
    navBar.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}
let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = () =>{
    shoppingCart.classList.toggle("active");
    navBar.classList.remove("active");
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
}
let loginForm = document.querySelector(".login-form");
document.querySelector("#user-btn").onclick = () =>{
    loginForm.classList.toggle("active");
    navBar.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
}
let navBar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () =>{
    navBar.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}

window.onscroll = () =>{
    navBar.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");
}
