function carregar(){
var mensagem = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()
mensagem.innerText = `Agora são ${hora}:${minutos}`

if(hora >=6 && hora < 12){
    //BOM DIA
    img.src = 'manha.png'
    mensagem.innerHTML += ('</br> BOM DIA!!!')

}
else if(hora>=12 && hora < 18){
    //BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background='#5F9EA0'
    mensagem.innerHTML +=('</br> BOA TARDE!!!')
}
else{
    //BOA NOITE
    img.src = 'noite.png'
    document.body.style.background='#363636'
    mensagem.innerHTML += ('</br>BOA NOITE!!!')
}
}