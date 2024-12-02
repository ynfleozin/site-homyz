import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./imgs/logo2.png" alt="" width={120} />

          <span className="secondaryText">
            Nossa visão é fazer com que todas as pessoas <br />
            tenham o melhor lugar para viver.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Informações</span>
          <span className="secondaryText">Rua das Palmeiras, 123 - Centro, São Paulo, SP, 01001-000, Brasil</span>

          <div className="flexCenter f-menu">
            <span>Propriedades</span>
            <span>Serviços</span>
            <span>Produtos</span>
            <span>Sobre Nós</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
