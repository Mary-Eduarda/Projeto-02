let tarefas = []

function adicionarTarefa() {

let tarefas = []
      const inputTarefa = document.getElementById("inputTarefa")
      let tarefa = inputTarefa.value.trim()
  
      const mensagem = document.getElementById("mensagem")
  
      if (tarefa == "") {
          
          let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
          mensagem.textContent = mensagemErro} 
          
          else {
         let mensagemSucesso = "Tarefa adicionada com sucesso!"
         mensagem.textContent = mensagemSucesso
         tarefas.push(tarefa)
         renderizarTarefas()}
  

      inputTarefa.value = ""
  } 
//criado um loop para cada item da lista de tarefas
  function renderizarTarefas(){
  const listaTarefas = document.getElementById("listaTarefas")
  listaTarefas.innerHTML = "" //limpa a lista de tarefas para não duplicar  
    let i = 0//iterador, item inicial
    for (i; i< tarefas.length; i++){
        let novaTarefa = document.createElement("li")
          novaTarefa.textContent = tarefas [i]
          listaTarefas.appendChild(novaTarefa)}
        
}

