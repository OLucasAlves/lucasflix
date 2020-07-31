import config from '../config/index';
const URL_CATEGORIES = `${config.URL}/categorias`

function getAll() {
    return fetch(`${URL_CATEGORIES}`)
        .then(async (response) => {

            if(response.ok){
                const resposta = await response.json();

                return resposta;     
            }

            throw new Error('Não foi possivel retornar os dados');
            
        });
}

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (response) => {

            if(response.ok){
                const resposta = await response.json();

                return resposta;     
            }

            throw new Error('Não foi possivel retornar os dados');
            
        });
}
//http://localhost:8080/categorias?_embed=videos


export default {
    getAllWithVideos,
    getAll,
}