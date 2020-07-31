import React, { useState } from 'react';


function useForm(valoresIniciais) {
    const [valores, setValores] = useState(valoresIniciais);
  
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
  
    function clearForm(){
      setValores(valoresIniciais);
    }
  
    return {
      valores,
      handleChange,
      clearForm
    };
  }

  export default useForm;