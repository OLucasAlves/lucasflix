import React,{useState,useEffect} from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';



function CadastroVideo() {
  const history = useHistory();
  const [categorias,setcCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { handleChange, valores } = useForm({
    titulo: "",
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer)=>{
      setcCategorias(categoriasFromServer);
    });
  },[]);

  return (
    <PageDefault>

      <h1>Cadastro de Video</h1>
      <form onSubmit={(e) => {
        e.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === valores.categoria;
        });
        console.log('categoria Escolhida',categoriaEscolhida);
        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: categoriaEscolhida.id,
        }).then(()=>{
          history.push('/');
        });

        
      }}>

        <FormField
          label="Titulo do video"
          name="titulo"
          type="text"
          value={valores.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do video"
          name="url"
          type="text"
          value={valores.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={valores.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>


      <Link to="/cadastro/categoria">
        Cadastrar Categoria
        </Link>
    </PageDefault>
  )
}


export default CadastroVideo;