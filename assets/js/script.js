
function mandaZap(msg) {
    let text = msg.firstElementChild.innerText // Capturando o primeiro filho da tag pai 
    //e o seu conteudo no caso o texto
    let numero = prompt('Qual é o número?')
    let zapLink = `https://api.whatsapp.com/send?phone=55${numero}&text=${text}`

    window.open(zapLink)
}