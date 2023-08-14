const modal = document.querySelector("#modal")
const main = document.querySelector("main")
const container = document.querySelector("#container")
const inputholder = document.querySelector('#input-holder')

document.querySelector("#sub").addEventListener("click", () => {
    const email = document.querySelector("#email").value
    if (!isValidEmail(email)) {
        inputholder.classList.add("invalid")
        return
    }

    inputholder.classList.remove("invalid")
    modal.style.display = "flex"
    container.style.display = "none"
    document.querySelector("#subscribed-mail").innerHTML = email
})

document.querySelector("#dismiss").addEventListener("click", () => {
    modal.style.display = "none"
    container.style.display = "block"
})







function isValidEmail(email) {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    return regex.test(email)
}