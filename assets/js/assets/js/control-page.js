const isLoggedIn = localStorage.getItem("isLoggedIn");
const url = new URL(window.location.href);
const currentPage = url.pathname.split('/').pop().toLowerCase();


if (!isLoggedIn && !currentPage.includes('login.html')) {
    window.location.href = 'login.html';
}else if(isLoggedIn && currentPage.includes('login.html')){
    window.location.href = 'index.html';
}

function logout(){
    localStorage.removeItem("isLoggedIn")
    window.location.href = 'login.html';
}
