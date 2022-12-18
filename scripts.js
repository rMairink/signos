function showTabs(idTabs){
    // codigo para remover o conteudo que está aparecendo
    const conteudo = document.getElementsByClassName('conteudo')
    for(var i = 0; i < conteudo.length; i++){
        conteudo[i].style.display = 'none'
        document.querySelector('.signos-button-content').classList.remove('active')
    }
    // codigo para mostrar o conteudo que está sendo clicado
        document.getElementById(idTabs).style.display = 'block'
}


