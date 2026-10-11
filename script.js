function contador(charlie) {
    return charlie < 10;

}

const hablar = document.querySelector("#contadordetazas")
const leli = document.querySelector("#Reservartaza");

leli.addEventListener("click", function () {
    const total = Number(hablar.textContent)


    if (contador(total)) {
        hablar.textContent = (total + 1)
        console.log("Agregaste tu taza")
        alert("Agregaste el pedido")
    } else {
        leli.textContent = ("Soul for")
        leli.disabled = true;
        console.log("Agotado")
        alert("Agotado")
    }


})

