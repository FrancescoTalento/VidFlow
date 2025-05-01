const endPoint = "http://localhost:3000/videos";

async function getVideo(){
    try {
        const response = await fetch(endPoint);
        if(!response.ok)  return Promise.reject(response.statusText)
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}
async function postVideo(Titulo,Descricao,Url,Imagem) {
    try {
        const response = await fetch(endPoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titulo: Titulo,
            descricao: `${Descricao} mil visualizações`,
            url: Url,
            imagem: Imagem,
          }),
        });
        if (!response.ok) {
          throw new Error("Nao foi possivel Enviar o Video");
        }
        
        const resultado = await response.json()
        console.log("Post Criado:" + resultado)
        return true;
        
    } catch (error) {
        throw Error("Nao foi possivel Enviar o Video");
    }
}


export const api = {
    getVideo,
    postVideo
}