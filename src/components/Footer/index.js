import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
        
        
      </p>
      <a href="https://www.linkedin.com/in/olucas-ribeiro/">
        Linkedin
        </a>
        <a> | </a>
        <a href="https://twitter.com/OLucas_Alves">
          Twitter
        </a>
    </FooterBase>
  );
}

export default Footer;
