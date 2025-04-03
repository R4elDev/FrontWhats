'use strict'

async function carregarContatosApi(){
    const url = `https://projeto-whats-marcel.onrender.com/v1/whatsapp/contatos-para-usuarios/11966578996`
    const response = await fetch(url)

    const data = await response.json()
    console.log(response)
}


carregarContatosApi()