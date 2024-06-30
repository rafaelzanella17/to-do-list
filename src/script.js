const listaTarefas = document.querySelector('[data-js="listaTarefas"]')
const formulario = document.querySelector('[data-js="formulario"]')

const mensagemErro = '\nNão é possivel adicionar um campo em branco!'

const li = document.createElement('li')

// li, span, i com as class para ser inserida na tela quando a função for invocada.
const liNova = (inputSubmit) => `<li class="lista__li">
        <span>${inputSubmit}</span>
        <i class="material-symbols-outlined">delete</i>
      </li>`
        
// Valida com if se tem caracter inserido no campo input 
// Quando teclar enter se tiver caracter no input ele chama a função liNova()
// Se não tiver ele chama o alert()
const criaLista = (inputSubmit) => {
  const comValor = inputSubmit.length > 0

  if (comValor) {
    li.innerHTML += liNova(inputSubmit)    
    listaTarefas.append(li)
    return
  }

  alert(mensagemErro)  
}

// Adiciona um novo item na tela a clicar enter
formulario.addEventListener('submit', (event) => {
  event.preventDefault()
  const form = event.target
  const inputValue = form.adicionar.value.trim()
  
  criaLista(inputValue)  
  form.reset()
})

// Remover item (toda a li) da tela ao clicar na lixeira
// Aproveitando a propagação de eventos com o event delegation
listaTarefas.addEventListener('click', (event) => {
  const clickLixeira = event.target
  const convertParaArray = Array.from(clickLixeira.classList)
  const temClass = convertParaArray.includes('material-symbols-outlined')

  if (temClass) {
    clickLixeira.parentElement.remove()
  }
})

