let campoIdade;
let campoterror;
let campoAcao;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("10");
  campoterror = createCheckbox("Gosta de terror?");
  campoAcao = createCheckbox("Gosta de acao?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoterror.checked();
  let gostaDeAcao = campoAcao.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAcao);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeterror, gostaDeAcao) {
  if (idade >= 15) {
    if (idade >= 18) {
      return "kings man";
    } else {
      if (idade >= 12) {
        if(gostaDeterror || gostaDeAcao) {
          return "Corra";          
        } else{
         return "trolls 3";
        }
      } else {
        if (gostaDeterror) {
          return "Panico";
        } else {
          return "Wonka";
        }
      }
    }
  } else {
    if (gostaDeterror) {
      return "Senhor dos aneis";
    } else {
      return "velozes e furiosos";
    }
  }
}
