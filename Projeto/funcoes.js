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
//Função realizar a contagem de acertos do quiz
    function verficaAcertos(){
        var quest1 = document.querySelector('input[name="questao1"]:checked')
        var quest2 = document.querySelector('input[name="questao2"]:checked')
        var acertos = 0;
        try{
            if(quest1.value == 'true'){
                acertos++;
            }
            if(quest2.value == 'true'){
                acertos++;
            }
            alert("Você acertou: " + acertos + " questões")
        }catch(e){
            alert("Há questões sem respostas. Verifique suas respostas.")
        }
    }
//Função para gerar a tabuada
    function gerarTabuada(n, op){
        if(op == '+'){
            for(i = 1; i <= 10; i++){
                document.write(`${n} ${op} ${i} = ` + (Number(n)+i)+"<br>")
            }
        }
        else if(op == '-'){
            for(i = 1; i <= 10; i++){
                document.write(`${n} ${op} ${i} = ` + (Number(n)-i)+"<br>")
            }
        }
        else if(op == 'x'){
            for(i = 1; i <= 10; i++){
                document.write(`${n} ${op} ${i} = ` + (Number(n)*i)+"<br>")
            }
        }
        else{
            for(i = 1; i <= 10; i++){
                document.write(`${n} ${op} ${i} = ` + (Number(n)/i)+"<br>")
            }
        }
    }