import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  //console.log('nome categoria-----'+nomeDaCategoria);

  function setValor(chave,valor){
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
      e.target.value)

  }

  return (
    <PageDefault>

      <h1>Cadastro de Categoria: {valores.nome} </h1>

      <form  onSubmit={function handleSubmit(e) {
        e.preventDefault();
        setCategorias([
          ...categorias,
          valores
        ]);
        setValores(valoresIniciais)
      }}>
        <FormField 
          label="Nome da Categoria" 
          name="nome" type="text" 
          value={valores.nome} 
          onChange={handleChange} 
        />

        <FormField 
          label="Descrição" 
          name="descrição" 
          type="textarea" 
          value={valores.cor}  
          onChange={handleChange} 
        />

        <FormField 
          label="Cor" 
          name="cor" 
          type="color" 
          value={valores.descricao} 
          onChange={handleChange} 
        />

        <button>
          Cadastrar
          </button>
      </form>

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