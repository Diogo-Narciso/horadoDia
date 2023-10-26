
function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        img.src = 'manhã.jpg'
        document.body.style.backgroundImage = 'url(fundo.jpg)'
        //Bom dia!
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#bc6a1e'
        //boa tarde !
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#121923'
        //boa noite !
    }
}

