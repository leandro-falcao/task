/* pegando a ul que será inserido 
os elementos filhos LIs 
*/
let ul = document.getElementById("my-list");
/*  */

/* a seguir duas funçoões
uma para adicionar elementos LIs, ou seja
adiconar itens com clique do mouse.
e criar um outra função de remover itens  caso queira
 */

/*função que adiciona um elemento,
inscrito no input e add com button add tarefa 
*/
const addTarefa = function () {
  /* um if fazendo uma condição,
  perguntando se tem um texto dentro do inputa
  e so rodas codido de adicinar se tiver texto
   */
  if (document.getElementById("task").value != "") {
    /* variavel que pesquisa o numero
    de filhos da ul de id = my-list,
    começando por 1 e nao 0
    */
    const numeroItemsFilhos = ul.childElementCount + 1;
    /*  */

    /* seguindo o if, pegando o texto
    digitado e inserido item filho 
    */
    const addTarefaDigitado = document.getElementById("task").value;
    /*  */

    /* criando um botão usando template string */
    const btnString = `<button 
                        id="botaoDel" 
                        onClick="apagarItem()"> X 
                      </button>`;
    /*  */

    /* criando uma li com
     template string e 
     inserindo butoes de remover itens 
     e texto digitado
    */
    const insert = `<li id="item${numeroItemsFilhos}">
                        ${addTarefaDigitado}
                        ${btnString}
                    </li>`;
    /*  */

    /* inserindo os items após click no botão
    usando o metodo insertAdjacentHTML
    antes do fim da ul, ou seja sempre
    abaixo dos itemas anteriores */
    let inserir = ul.insertAdjacentHTML("beforeend", insert);
    /*  */

    /* após adicionar item,
    resetar o value e deixar vazio novamente 
    */
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

  let chegarNaUl = document.querySelector("#botaoDel").parentNode.parentNode;

  // buttonDel.parentElement.parentNode.removeChild(buttonDel.parentNode);
  chegarNaUl.removeChild(buttonDel.parentElement);

  /* renumerar os item de forma progressiva */
  const renumerarItems = () => {
    /* numero de filhos do ul, a my-list, que é tamanho máximo for*/
    const numeroItems = chegarNaUl.childElementCount;

    /* array com todos filhos de UL, todas LI */
    const arrLIs = document.querySelectorAll("#my-list li");

    /* for para alterar o texto dos id para numero crecente, item1, item2...*/
    for (let i = 0; i <= numeroItems; i++) {
      arrLIs[i].id = `item${i + 1}`;
    }
  };

  return renumerarItems();
};
