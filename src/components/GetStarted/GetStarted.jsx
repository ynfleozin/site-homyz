import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Comece com a Homyz</span>
          <span className="secondaryText">
            Inscreva-se e encontre cotações de preços super atrativas
          </span>
          <button className="button">
            <a href="mailto:leonardoalvarengam@gmail.com">Começar Agora</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
