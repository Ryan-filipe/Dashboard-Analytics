const videos = [
   { titulo: "gatO MAIUUUUU", views: 1200, curtidas: 230, inscritos: 20},
   { titulo: "gato Jogador de valorant", views: 3450, curtidas: 750, inscritos: 50},
   { titulo: "gato MEmE", views: 11200, curtidas: 1250, inscritos: 103},
   { titulo: "gato Jogador de Cs2", views: 34450, curtidas: 5550, inscritos: 520}
   
];
console.log(videos[0].titulo)

const totalVideosElemento=document.querySelector("#totalVideos")
totalVideosElemento.textContent= videos.length;


const totalViews =videos.reduce((acumulador, videoAtual)=>{
    return acumulador + videoAtual.views
}, 0)
console.log(totalViews)

const totalVisualizacoes= document.querySelector("#totalVisualizacoes")
totalVisualizacoes.textContent=totalViews


const totalCurtidas= videos.reduce((acumulador, videoAtual)=>{
    return acumulador + videoAtual.curtidas
}, 0)
console.log( totalCurtidas)

const totalCurtidasT= document.querySelector("#totalCurtida")
totalCurtidasT.textContent=totalCurtidas


const totalInscritos =videos.reduce((acumulador, videoAtual)=>{
return acumulador + videoAtual.inscritos
}, 0)

console.log(totalInscritos)

const totalInscritosT= document.querySelector("#totalInscritos")
totalInscritosT.textContent= totalInscritos

const tabela = document.querySelector('#listaVideos')
for(let i = 0; i < videos.length; i++ ){
const linha = document.createElement('tr');

linha.innerHTML=`
<td>${videos[i].titulo}</td>
<td>${videos[i].views}</td>
<td>${videos[i].curtidas}</td>
<td>${videos[i].inscritos}</td>
`;

tabela.append(linha)
}

const mediaViews = totalViews / videos.length;
console.log(mediaViews)

const videosMaisVisto = videos.reduce((maiorAtual, videoAtual)=>{
    if(videoAtual.views > maiorAtual.views){
        return videoAtual;
    }else{
        return maiorAtual;
    }
});
console.log(videosMaisVisto)

const videosMenorVisto = videos.reduce((menorAtual, videoAtual)=>{
    if(videoAtual.views < menorAtual.views){
        return videoAtual;
    }else{
        return menorAtual;
    }
});
console.log(videosMenorVisto)