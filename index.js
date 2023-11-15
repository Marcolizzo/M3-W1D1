//Esercizio extra 1
const cancelTwitter = function () {
    let linkTwitter = document.querySelector(
        "main .p-4:last-of-type li:nth-of-type(2)"
    );
    linkTwitter.remove();
};
cancelTwitter();



//Esercizio extra 2
const firstA = document.querySelector(".jumbotron a");
const secondA = document.querySelector(".col-md-6:first-of-type>div>div a");
const thirdA = document.querySelector(".col-md-6:last-of-type>div>div a");

const cancelFather = function (e) {
    e.target.parentNode.parentNode.parentNode.style.display = "none";
};
firstA.addEventListener("click", cancelFather);
secondA.addEventListener("click", cancelFather);
thirdA.addEventListener("click", cancelFather);



//Esercizio extra 3
const firstAutor = document.querySelector("main .blog-post:first-of-type p>a")
const secondAutor = document.querySelector("main .blog-post:nth-of-type(2) p>a")
const thirdAutor = document.querySelector("main .blog-post:last-of-type p>a")

const showAlert = function (e) {
    let name = e.target.innerText
    alert(name)
}

firstAutor.addEventListener("mouseover", showAlert)
secondAutor.addEventListener("mouseover", showAlert)
thirdAutor.addEventListener("mouseover", showAlert)