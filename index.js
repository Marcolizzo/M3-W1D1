//Esercizio extra 1
const cancelTwitter = function () {
    let linkTwitter = document.querySelector("main .p-4:last-of-type li:nth-of-type(2)")
    linkTwitter.innerHTML="<style> display: none </style>"
}
cancelTwitter()