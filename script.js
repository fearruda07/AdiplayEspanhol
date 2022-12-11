let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let Puntadas = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img')  // ADICIONE
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    imagem       : '0',  
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
    

}
const q1 = {
    numQuestao   : 1,
    imagem       : 'superstar.gif',  
    pergunta     : "En 1970 aparece el icono de la superestrella el primer tenis con barril bajo hecho inicialmente para las canchas de baloncesto se hizo viral a través del jugador....",
    alternativaA : "Bill Russel",
    alternativaB : "Stephen Curry",
    alternativaC : "Abdul-Jabbar",
    alternativaD : "Jerry West",
    correta      : "Abdul-Jabbar",
    
    
}
const q2 = {
    numQuestao   : 2,
    imagem       : '11.jpg',  
    pergunta     : "EMMNXT tiene como objetivo transformar el viaje del consumidor en una tienda.....",
    alternativaA : "Más objetivo",
    alternativaB : "A través de la técnica F.A.B",
    alternativaC : "La conexión, la participación y la inspiración",
    alternativaD : "Más diversión",
    correta      : "La conexión, la participación y la inspiración",
 
}
const q3 = {
    numQuestao   : 3,
    imagem       : '748.jpg',  
    pergunta     : "El programa especializado en running y mujeres fue creado con el objetivo de...",
    alternativaA : "Transformando vidas",
    alternativaB : "Traer más empleados calificados a las tiendas",
    alternativaC : "Disminuir la rotación",
    alternativaD : "Disminuya la conversión en la tienda",
    correta      : "Traer más empleados calificados a las tiendas",
    
}
const q4 = {
    numQuestao   : 4,
    imagem       : '4dfwd.gif',  
    pergunta     : "El tenis 4dfwd tiene una tecnología que genera retroalimentación de energía al impulsarte a.. ",
    alternativaA : "Principales pasos para guardar",
    alternativaB : "Pasos de ahorro frontal",
    alternativaC : "Ambas partes",
    alternativaD : "Pasos de reducción de espalda",
    correta      : "Pasos de ahorro frontal",
}
const q5 = {
    numQuestao   : 5,
    imagem       : 'logo adi.gif',  
    pergunta     : "Este logotipo representa qué segmento?",
    alternativaA : "Performance",
    alternativaB : "Originals",
    alternativaC : "Apparel",
    alternativaD : "Performance e Originals",
    correta      : "Performance",
    
}
const q6 = {
    numQuestao   : 6,
    imagem       : 'adi.jpg',  
    pergunta     : "En qué año nació oficialmente Adidas? y en que ciudad se instaló inicialmente?",
    alternativaA : "1948 en Oberhausen",
    alternativaB : "1951 en Hanôver",
    alternativaC : "1949 en Lyon (Rhône-Alpes)",
    alternativaD : "1949 en Herzogenarauch",
    correta      : "1949 en Herzogenarauch",
    
}
const q7 = {
    numQuestao   : 7,
    imagem       : 'top-center.jpg',  
    pergunta     : "En 2022 abrió un concept store con 700m en formato estadio en AV.paulista, qué tienda era esta?",
    alternativaA : "Top Center",
    alternativaB : "City center",
    alternativaC : "Nomura center",
    alternativaD : "Bourbon center",
    correta      : "Top Center",
    
}
const q8 = {
    numQuestao   : 8,
    imagem       : 'IN STORE.png',  
    pergunta     : "Qué propósito tiene el programa de coach en tienda?",
    alternativaA : "Tener mayor productividad y rentabilidad con el equipo de ventas",
    alternativaB : "Conozca los productos",
    alternativaC : "Más información sobre adidas culture only",
    alternativaD : "Aumentar la rotación",
    correta      : "Tener mayor productividad y rentabilidad con el equipo de ventas",
    
}
const q9 = {
    numQuestao   : 9,
    imagem       : 'vende que é gol.png',  
    pergunta     : "En la campaña de incentivos VENDE QUE ES GOL tuvimos 15 ganadores de tiendas BCS, qué tienda quedó en 1er lugar?",
    alternativaA : "BCS- Porto Alegre",
    alternativaB : "BCS- Foz do Iguaçu,Cataratas",
    alternativaC : "BCS- Brasilia, Iguatemi",
    alternativaD : "BCS- Rio Branco,Via Verde",
    correta      : "BCS- Rio Branco,Via Verde",
  
}
const q10 = {
    numQuestao   : 10,
    imagem       : 'jeans va.gif',  
    pergunta     : "Sabemos que los jeans usan mucha agua en su confección, cuántos litros se usan para hacer 2 piezas de jeans?",
    alternativaA : "500 a 800 litros",
    alternativaB : "1000 litros",
    alternativaC : "6.800 a 8.000 litros",
    alternativaD : "5.000 litros",
    correta      : "6.800 a 8.000 litros",
    
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
imgQuestao.setAttribute('src', 'images/'+q1.imagem)  // ADICIONE
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'images/'+questoes[nQuestao].imagem) // ADICIONE
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    Puntadas -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && Puntadas == 110) { Puntadas = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        Puntadas += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && Puntadas == 20) { Puntadas = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = Puntadas
    instrucoes.textContent = "Puntadas " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    Puntadas == 0 ? s = '' : s = s
    instrucoes.textContent = "Gracias por jugar! Has llegado " + Puntadas + " Puntada" + s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        Puntadas = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'IMPOSSIBLE IS NOTHING'
    }, 8000)

}