import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import './styles.css'
function Erro(){
    return(
      
        <div className='container'>
            <Link to="/">
                <img className="Logo" src={Logo} alt="LucasFlix"></img>
            </Link>
            <h1>Erro 404 - Use Mascara - Stay Safe</h1>
            <div className="dash">
            <iframe title="myiframe" className="painel" 
            src="https://public.tableau.com/views/Covid-19Word-Header/Covid-19?:embed=y&:showVizHome=no?toolbar=no">
        </iframe>
            </div>
        </div>
       
      
    )
  }

  
export default Erro;