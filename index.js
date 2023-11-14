//Esercizio extra 1
const cancelTwitter = function () {
    let linkTwitter = document.querySelector("main .p-4:last-of-type li:nth-of-type(2)")
    linkTwitter.remove()
}
cancelTwitter()

//Esercizio extra 2
const linkLeggi = document.querySelector(".jumbotron a")
const cancelFather = function () {
    let father = document.querySelector(".jumbotron")
    father.remove()
}
linkLeggi.addEventListener("click", cancelFather)
//Esercizio extra 3