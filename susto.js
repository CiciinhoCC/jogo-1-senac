function criarElem(tag, atrib = null, inner = null) {
    let elem = document.createElement(tag);
    if(atrib != null){
        for (j = 0; j < atrib.length; j++) {
            elem.setAttribute(atrib[j][0], atrib[j][1]);
        }
    }
    if(inner != null){
        elem.innerHTML = inner
    }
    return elem;
}

function susto(){
    let mumia = criarElem("img",[["src","img/mumia.bmp"],["class","mumia"]]);
    mumia.style
    document.body.appendChild(mumia);
    let grito = new Audio("img/grito.mp3")
    grito.play();
    setTimeout(function(){
        mumia.remove()
    },1000)

    let gameover = criarElem("div",[["class","gameover"]],'<h2>Você Morreu</h2>')
    document.body.appendChild(gameover)

}