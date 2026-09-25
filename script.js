const videosSalvos= localStorage.getItem('videos')

let videos;

if (videosSalvos){
    videos= JSON.parse(videosSalvos);
}else{
 videos = [
   { titulo: "gatO MAIUUUUU", views: 1200, curtidas: 230, inscritos: 20},
   { titulo: "gato Jogador de valorant", views: 3450, curtidas: 750, inscritos: 50},
   { titulo: "gato MEmE", views: 11200, curtidas: 1250, inscritos: 103},
   { titulo: "gato Jogador de Cs2", views: 34450, curtidas: 5550, inscritos: 520}
   
];
}
localStorage.setItem('videos', JSON.stringify(videos));

const totalVideosElemento=document.querySelector("#totalVideos")
totalVideosElemento.textContent= videos.length;


const totalViews =videos.reduce((acumulador, videoAtual)=>{
    return acumulador + videoAtual.views
}, 0)


const totalVisualizacoes= document.querySelector("#totalVisualizacoes")
totalVisualizacoes.textContent=totalViews


const totalCurtidas= videos.reduce((acumulador, videoAtual)=>{
    return acumulador + videoAtual.curtidas
}, 0)


const totalCurtidasT= document.querySelector("#totalCurtida")
totalCurtidasT.textContent=totalCurtidas


const totalInscritos =videos.reduce((acumulador, videoAtual)=>{
return acumulador + videoAtual.inscritos
}, 0)



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


const videosMaisVisto = videos.reduce((maiorAtual, videoAtual)=>{
    if(videoAtual.views > maiorAtual.views){
        return videoAtual;
    }else{
        return maiorAtual;
    }
});


const videosMenorVisto = videos.reduce((menorAtual, videoAtual)=>{
    if(videoAtual.views < menorAtual.views){
        return videoAtual;
    }else{
        return menorAtual;
    }
});

const mediaViewsEl= document.querySelector("#mediaViewsEl")
mediaViewsEl.textContent = mediaViews;

const maisVistoEl = document.querySelector("#maisVistoEl")
maisVistoEl.textContent = videosMaisVisto.titulo;

const menosVistoEl = document.querySelector("#menosVistoEl")
menosVistoEl.textContent = videosMenorVisto.titulo;


const inputBusca= document.querySelector("#inputBusca");

inputBusca.addEventListener('input', () => {
    const inputFiltrados = videos.filter((Videopt)=>{
       return Videopt.titulo.toLowerCase().includes(inputBusca.value.toLowerCase());
    });
    tabela.innerHTML ="";
renderizarTabela(inputFiltrados);
});


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

const ctx = document.querySelector('#graficoViews');

new Chart(ctx,{
    type: 'bar',
    data: {
        labels:titulos,
        datasets:  [{
            label: 'Visualizações',
            data: viewsS
        }]
    },
    options:{
        scales:{
            x:{
                ticks: { color: '#ffffff'}
            },
            y:{
                ticks: { color: '#ffffff'}
            }
        },
        plugins:{
            legend:{
                labels: { color: '#ffffff'}
            }
        }
    }
});