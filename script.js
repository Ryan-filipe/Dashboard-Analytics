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

function renderizarTabela(lista){
      tabela.innerHTML = "";
    for (let i = 0; i < lista.length; i++){
        const linha = document.createElement('tr')
        linha.innerHTML =`
<td>${lista[i].titulo}</td>
<td>${lista[i].views}</td>
<td>${lista[i].curtidas}</td>
<td>${lista[i].inscritos}</td>
`
       
        
       tabela.append(linha)
    }
  
}
renderizarTabela(videos);

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

const videosFiltrados= videos.filter((Video)=>{
    return Video.titulo.toLowerCase().includes("gato".toLowerCase());
})
console.log(videosFiltrados )

const inputBusca= document.querySelector("#inputBusca");

inputBusca.addEventListener('input', () => {
    const inputFiltrados = videos.filter((Videopt)=>{
       return Videopt.titulo.toLowerCase().includes(inputBusca.value.toLowerCase());
    });
    console.log(inputFiltrados);
    tabela.innerHTML ="";
renderizarTabela(inputFiltrados);
});

const videosOrdenadosPorViews = [...videos].sort((a, b)=>{
    return b.views - a.views;
})
console.log(videosOrdenadosPorViews)

const btnOrdenar = document.querySelector('#btnOrdenar');

btnOrdenar.addEventListener('click', () => {
    const buttonOrder = [...videos].sort((a, b) => {
        return b.views - a.views;
    });
    renderizarTabela(buttonOrder);
});

const titulos = videos.map((video)=>{
    return video.titulo;
})


const viewsS = videos.map((video)=>{
    return video.views;
})

console.log(viewsS)