    //quando clicar no botao
    document.querySelector("#add-time").addEventListener('click', clonefield)

function clonefield(){
    //duplicar campos
    const newfieldcontainer = document.querySelector(".schedule-item").cloneNode(true)

    //pegar campos
    const fields = newfieldcontainer.querySelectorAll('input')

    //para cada campo,limpar
    fields.forEach(function(field){
        //pega o field e limpa
        field.value = ""
    })

    //colocar pagina onde
    document.querySelector("#schedule-itens").appendChild(newfieldcontainer)
}