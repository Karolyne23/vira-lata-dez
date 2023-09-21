let btn = document.querySelector("#button")
let modal = document.querySelector("#containerModal")

btn.addEventListener("click", () => {

    document.querySelector('#spanErroNome').classList.add('hidden')
    document.querySelector('#spanErroEmail').classList.add('hidden')
    document.querySelector('#spanErroQtdAnimais').classList.add('hidden')

    let InputNome = document.querySelector("#InputNome").value
    let InputEmail = document.querySelector("#InputEmail").value
    let InputQtdAnimais = document.querySelector("#InputQtdAnimais").value

    let InputCastracao = document.querySelector("#InputCastracao").checked
    let InputCheckup = document.querySelector("#InputCheckup").checked
    let InputBanhoTosa = document.querySelector("#InputBanhoTosa").checked

    if(InputNome == '')
        document.querySelector('#spanErroNome').classList.remove('hidden')

    if(InputEmail == '')
        document.querySelector('#spanErroEmail').classList.remove('hidden')

    if(InputQtdAnimais == '')
        document.querySelector('#spanErroQtdAnimais').classList.remove('hidden')


    let valor = 0

    if(InputCastracao == true)
        valor += 300

    if(InputCheckup == true)
        valor += 60

    if(InputBanhoTosa == true)
        valor += 60

    valor = valor * InputQtdAnimais

    document.querySelector('#valorTotal').innerHTML = valor
})
