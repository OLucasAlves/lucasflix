import config from '../config/index';
const URL_VIDEOS = `${config.URL}/videos`

function create(objetoDoVideo) {
    return fetch(`${URL_VIDEOS}`,{
       method: 'POST',
       headers: {
           'content-type': 'application/json',
       },
       
       body: JSON.stringify(objetoDoVideo),
    })
        .then(async (response) => {

            if(response.ok){
                const resposta = await response.json();

                return resposta;     
            }

            throw new Error('Não foi possivel cadastrar os dados');
            
        });
}
//http://localhost:8080/categorias?_embed=videos


export default {
    create,
}