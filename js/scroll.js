window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        // document.querySelector(".navbar-brand").classList.add("d-none");
        document.querySelector(".header__logo").style.display = "none";
        document.querySelector("#header").style.cssText = "position:fixed;background-color:white;box-shadow: 0 0 10px 0 #cccccc80";
        // document.querySelectorAll("#header li>a").forEach((a) => a.style.cssText = "line-height:60px");
        document.getElementById("header__nav").style.height = "50px";
    } else {
        // document.querySelector(".navbar-brand").classList.remove("d-none");
        document.querySelector(".header__logo").style.display = "block";
        document.querySelector("#header").style.cssText = "position:;background-color:;box-shadow:";
        document.getElementById("header__nav").style.height = "";
    }
}