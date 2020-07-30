import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  // console.log('nome categoria-----'+nomeDaCategoria);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    })
  }

  function handleChange(e) {
    //const { getAttribute,value } = e.target;

    //console.log('nome categoria-----'+nomeDaCategoria);
    //console.log('nome evento-----'+e.target.value);
    setValor(
      e.target.getAttribute('name'),
      e.target.value);

  }

   useEffect(() => {
     const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://lucasflix-api.herokuapp.com/categorias';
    fetch(URL)
      .then(async (response) => {
        if (response.ok) {
          const result = await response.json();
          setCategorias(result);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);
  return (
    <PageDefault>
      <div >
        <h1>Cadastro de Categoria: {valores.nome} </h1>

        <form onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([
            ...categorias,
            valores
          ]);
          setValores(valoresIniciais)
        }}>

          <FormField
            label="Nome da Categoria"
            name="nome" 
            type="text"
            value={valores.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            name="descricao"
            type="textarea"
            value={valores.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={valores.cor}
            onChange={handleChange}
          />

         <Button>Cadastrar</Button>
        </form>
      </div>
      
        

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para Home
        </Link>
    </PageDefault>
  )
}



export default CadastroCategoria;