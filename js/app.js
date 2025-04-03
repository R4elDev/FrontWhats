'use strict'

async function carregarContatosApi(){
    const url = `https://projeto-whats-marcel.onrender.com/v1/whatsapp/contatos-para-usuarios/11966578996`
    const response = await fetch(url)

    const data = await response.json()
    
    return data
}

async function carregarDadosConversasApi(nome) {
    const url = `https://projeto-whats-marcel.onrender.com/v1/whatsapp/conversas-cada-usuario/cont/11966578996?cont=${nome}`
    const response = await fetch(url)
    
    const data = await response.json()

    return data
}

async function abrirConversa(nome){
    const dadosMensagens = await carregarDadosConversasApi(nome)
    console.log(dadosMensagens)
    
    const containerConversa = document.getElementById('containerConversa')

    dadosMensagens.mensagens.forEach(function(item){
        const containerInvisivel = document.createElement('div')
        containerInvisivel.classList.add('containerInvisivel')
        const conversaContato = document.createElement('div')
        conversaContato.classList.add('conversaContato')
        const h1Contato = doc

        containerInvisivel.appendChild(conversaContato)
        containerConversa.appendChild(containerInvisivel)
    })
}

async function criarLiDeContatos() {
    const dadosContatos = await carregarContatosApi()

    const ul = document.getElementById('ulContatos')

    dadosContatos.forEach(function(item){
        const liContato = document.createElement('li')
        liContato.classList.add('contato')
        
        liContato.addEventListener('click', () => abrirConversa(item.nome))

        const divImage = document.createElement('div')
        divImage.classList.add('imagemContato')
        
        const divTextosCont = document.createElement('div')
        divTextosCont.classList.add =('textosContainers')
        const h1ListaContato = document.createElement('h1')
        const pListaContato = document.createElement('p')

        h1ListaContato.textContent = item.nome
        pListaContato.textContent = item.descricao



        liContato.appendChild(divImage)
        divTextosCont.appendChild(h1ListaContato)
        divTextosCont.appendChild(pListaContato)
        liContato.appendChild(divTextosCont)
        ul.appendChild(liContato)

    })

}










criarLiDeContatos()
