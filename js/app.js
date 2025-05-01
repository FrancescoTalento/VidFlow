import { ux } from "./ux.js";
import { api } from "./conectaApi.js";

const barraDePesquisa = document.querySelector("[data-inputPesquisa]");


document.addEventListener("DOMContentLoaded", async()=>{
    await ux.mostraVideos()
    
    barraDePesquisa.addEventListener("input", (event)=>{
        event.preventDefault()
        buscarVideoPorInput()
    })
})

function buscarVideoPorInput(){
    let pesquisa = barraDePesquisa.value
        const videos = Array.from( document.getElementsByClassName("videos__item"));
        videos.forEach((video)=>{
            const titulo = video.querySelector("[data-videoTitulo]");
            if(!titulo.textContent.toLowerCase().includes(pesquisa.toLowerCase())){
                video.classList.add("hidden")

            }
        })
        
        const videosAMostrar = videos.filter((video) => {
            const titulo = video.querySelector("[data-videoTitulo]");
            
            return titulo.textContent.toLowerCase().includes(pesquisa.toLowerCase());

        })
        console.log(videosAMostrar)
        ux.mostraVideos(videosAMostrar)
}