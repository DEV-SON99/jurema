const cepInput = document.querySelector('#cep')
cepInput.addEventListener('click', ()=> {
    let cep = cepInput.value.replace(/\D/G, '') //REMOVE CARACTERES NÃO NUMÉRICOS E NÃO ACEITA VALOR VAZIO.
    if (cep.length > 5) {
        cep = cep.substring(0,5) + '-' + cep.substring(5,8)
    }
    cepInput.value = cep
})