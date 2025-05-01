import { api } from "./conectaApi.js";




export const ux = {
    async mostraVideos(videoToShow = null){
        const listaVideoExibida = document.querySelector("[data-lista]");
        const erroMessage =
          listaVideoExibida.querySelector("[data-erroPesquisa]");
        if(erroMessage){
            erroMessage.remove();
        }
        
        const videosJson =videoToShow == null ? 
        await api.getVideo() : videoToShow
        

        if(videosJson.length > 0 && videoToShow==null){
            videosJson.forEach((video) => {
                listaVideoExibida.appendChild(this.criaCardVideo(video))
            });
        }else if(videoToShow!=null && videosJson.length>0){
            videosJson.forEach((video)=>{
                video.classList.remove("hidden")
            })
        }
        else{
            listaVideoExibida.innerHTML += '<p data-erroPesquisa>Erro ao Buscar Videos</p>'
        }
        
    },
    criaCardVideo(videoJson) {
        const video = document.createElement("li")
        video.classList.add("videos__item");

        video.innerHTML = `
            <iframe width="100%" height="72%" src="${videoJson.url}"
                title="${videoJson.titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${videoJson.imagem}" alt="logo canal alura">
                <h3 data-videoTitulo>${videoJson.titulo}</h3>
                <p>${videoJson.descricao}</p>
            </div>
        `;

        return video;
    },
    async criarVideo(){
      const titulo = document.querySelector("[data-titulo]").value;
      const url = document.querySelector("[data-url]").value;
      const imagem = document.querySelector("[data-imagem]").value;
      const descricao = Math.floor(Math.random() * 10 + 1);
     

      const urlCorrigida = url.replace("youtu.be/", "youtube.com/embed/");


      try {
        const response = await api.postVideo(
          titulo,
          descricao,
          urlCorrigida,
          imagem
        );
        window.location.href = "../pages/envio-concluido.html";
      } catch (error) {
        alert(error)
      }
    }

}