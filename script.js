// Temos um input, campo onde o usuário colocará as tarefas, e ao clicar no botão, a função "adicionarTarefa()" é acionada, que está na parte de JS ao final do código HTML. Neste código JS, quando a função é chamada, os comandos digitados acima serão realizados respectivamente.
// A primeira coisa que acontece é a procura pelo ID "inputTarefa". Ele está atribuído a uma variável, dentro dessa variável pegamos o valor (por isso o ".value") que é o que está escrito no campo/input. Isso está atribuído a "tarefa". No HTML está listado, e então criamos uma variável "li" no JS, e o conteúdo em uma variável. Por fim, este elemento "ul" (dentro de "novaTarefa") recebe o conteúdo de texto que você digitou no campo/input.'''

function adicionarTarefa() {

      //recebe valor do input do usuário
      const inputTarefa = document.getElementById("inputTarefa")
      let tarefa = inputTarefa.value.trim()
  
      const mensagem = document.getElementById("mensagem")
  
      // se o valor do input for vazio então mostra uma mensagem de erro para o usuário
      if (tarefa == "") {
          //mostre uma mensagem de erro
          let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
          mensagem.textContent = mensagemErro
      } else {
          //mensagem de tarefa adicionada com sucesso
          let mensagemSucesso = "Tarefa adicionada com sucesso!"
          mensagem.textContent = mensagemSucesso
  
          //cria novo item (li) e insere na (lista ul)
          const listaTarefas = document.getElementById("listaTarefas")
          let novaTarefa = document.createElement("li")
          novaTarefa.textContent = tarefa
          listaTarefas.appendChild(novaTarefa)
      }
  
      //limpa o input do usuário automaticamente apos clicar ao botão
      inputTarefa.value = ""
  }