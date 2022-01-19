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
    var atab = window.document.getElementById('tabuada')
    var atg = document.getElementById('tab_geral')
    var status_tbl = false
    var status_tg = false

    function gerarTabuada(){
        status_div_tbl()
        var tabRes = window.document.getElementById('resultado')
        var cd = window.document.getElementById('tres')
        var vcd = window.document.getElementById('num')
        var vop = document.querySelector('input[name="opera"]:checked')
        
        resultado.innerHTML = ""
        var op = vop.value
        var n = vcd.value

        if(vcd.value != ""){
            if(op == '+'){
                for(i = 1; i <= 10; i++){
                    resultado.innerHTML += (`${n} ${op} ${i} = ` + (Number(n)+i)+"<br>")
                }
                cd.innerHTML = `Casa Decimal: ${n}`
            }
            else if(op == '-'){
                for(i = 1; i <= 10; i++){
                    resultado.innerHTML += (`${n} ${op} ${i} = ` + (Number(n)-i)+"<br>")
                }
                cd.innerHTML = `Casa Decimal: ${n}`
            }
            else if(op == 'x'){
                for(i = 1; i <= 10; i++){
                    resultado.innerHTML += (`${n} ${op} ${i} = ` + (Number(n)*i)+"<br>")
                }
                cd.innerHTML = `Casa Decimal: ${n}`
            }
            else{
                for(i = 1; i <= 10; i++){
                    resultado.innerHTML += (`${n} ${op} ${i} = ` + (Number(n)/i).toFixed(2)+"<br>")
                }
                cd.innerHTML = `Casa Decimal: ${n}`
            }
        }
    }
    function calcDecimal(n, op){
        var tgera = ""
        if(op == '+'){
            for(i = 1; i <= 10; i++){
                tgera += (`${n} ${op} ${i} = ` + (Number(n)+i)+"<br>")
            }
            return tgera
        }
        else if(op == '-'){
            for(i = 1; i <= 10; i++){
                tgera += (`${n} ${op} ${i} = ` + (Number(n)-i)+"<br>")
            }
            return tgera
        }
        else if(op == 'x'){
            for(i = 1; i <= 10; i++){
                tgera += (`${n} ${op} ${i} = ` + (Number(n)*i)+"<br>")
            }
            return tgera
        }
        else{
            for(i = 1; i <= 10; i++){
                tgera += (`${n} ${op} ${i} = ` + (Number(n)/i).toFixed(2)+"<br>")
            }
            return tgera
        }
    }

    function gerarTabuadaOp(opb){
        var t1 = window.document.getElementById('t01')
        var t2 = window.document.getElementById('t02')
        var t3 = window.document.getElementById('t03')
        var t4 = window.document.getElementById('t04')
        var t5 = window.document.getElementById('t05')
        var t6 = window.document.getElementById('t06')
        var t7 = window.document.getElementById('t07')
        var t8 = window.document.getElementById('t08')
        var t9 = window.document.getElementById('t09')
        var t10 = window.document.getElementById('t10')

        status_div_tg()

        t1.innerHTML = calcDecimal(1,opb)
        t2.innerHTML = calcDecimal(2,opb)
        t3.innerHTML = calcDecimal(3,opb)
        t4.innerHTML = calcDecimal(4,opb)
        t5.innerHTML = calcDecimal(5,opb)
        t6.innerHTML = calcDecimal(6,opb)
        t7.innerHTML = calcDecimal(7,opb)
        t8.innerHTML = calcDecimal(8,opb)
        t9.innerHTML = calcDecimal(9,opb)
        t10.innerHTML = calcDecimal(10,opb)

    }
    /*Função para controlar visibilidade das divs */
    function status_div_tbl(){
        if(status_tbl == false){
            status_tbl == true
            atab.style.display = 'block'
            atg.style.display = 'none'
            status_tg == false
        }
    }
    function status_div_tg(){
        if(status_tg == false){
            status_tg == true
            atab.style.display = 'none'
            atg.style.display = 'block'
            status_tbl == false
        }
    }