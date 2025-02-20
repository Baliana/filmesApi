'use strict'

async function pesquisarFilme(titulo){
    const url = `curl https://imdb.iamidiotareyoutoo.com/search/${titulo}`
    const response = await fetch(url) 
    const data = await response.json() 
    const dataDescription = data.description
    const imgs = []
    dataDescription.forEach(function(filme){
        imgs.push(filme["#IMG_POSTER"])
    })

    return imgs
   
}
function criarImagem(link){
    const repertorio = document.getElementById('repertorio')
    const repertorioImg = document.createElement('img')
    repertorioImg.src = link
  
    galeria.appendChild(repertorioImg)
   
}
async function preencherRepertorios(){
    const filme = document.getElementById('filme').value
    const repertorio =  await pesquisarFilme(titulo)
    const repertorioImg = document.getElementById('repertorioImg')

    galeria.replaceChildren('')

    
    fotos.forEach(criarImagem)


}