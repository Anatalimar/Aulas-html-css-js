/**
 * @author Anatalimar Mauricio de Lemos
 * Funções para Projeto Final da Turma TIV0120
 */

//Identificador para carregar a pagina
    var pagLink = document.querySelector('iframe')

//Função na qual se passar a página que irá carregar (utilizar no Menu)
    function chama_link(nlink){
        pagLink.src = nlink
    }
//Função na qual se passar a página que irá carregar (utilizar em DIV)
    function chama_link_img (link) {
        window.location.href = link;

    }