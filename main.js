/* a ul que vamos adiciona LI filhos */
let ul = document.getElementById("my-list");
/*  */

/*   criar funçoes pra para adicionar e remover as tarefas e outras para adionar elementos */
/* e outras para adicionar e elementos e remover com o clique de botao no código abaixo */

/*função que adiciona uma tarefa */
const addTarefa = function () {
  /* se o valor texto do task for diferente de vazio faça */
  if (document.getElementById("task").value != "") {
    /* pegar o numero de filhos da ul my-list */
    const numeroItemsFilhos = ul.childElementCount + 1;

    /* texto digitao do item é adicionado */
    const textoDigitado = document.getElementById("task").value;

    /* botaão criado usando template string */
    const btnString = `<button id="botaoDel" onClick="apagarItem()">Delete me</button>`;

    /* criando a li com template string e inserindo butoes e texto */
    const insert = `<li id="item${numeroItemsFilhos}">
                        ${textoDigitado}
                        ${btnString}
                      </li>`;

    /* inserindo os items após click no botão */
    let inserir = ul.insertAdjacentHTML("beforeend", insert);

    /*adicionar valor digitado no input, e deixar vazio novamente*/
    let resetValueInput = (document.getElementById("task").value = "");
    /*  */
  } /* end if  que ver se é diferente de vazio o value de task*/
}; /* end function, add task, fim da função que adiciona items tarefa */

/*clique chama função e add item-adicionar tarefas*/
let adicionarAcao = document.getElementById("buttonTask");
adicionarAcao.addEventListener("click", addTarefa);
/*  */

/* apagar item clicado no delete deste*/
const apagarItem = () => {
  /* modelo 1 de pegar atributo botao delete me */
  let buttonDel = document.querySelector("#my-list li button");

  let buttonDel1 = document.querySelector("#botaoDel").parentNode.parentNode;

  // buttonDel.parentElement.parentNode.removeChild(buttonDel.parentNode);
  buttonDel1.removeChild(buttonDel.parentNode);
};
