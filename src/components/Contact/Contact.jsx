import React from "react";
import "./Contact.css";
import { MdCall, MdEmail } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="padddings innerWidth flexCenter c-container">
        {/*Left Side*/}
        <div className="flexColStart c-left">
          <span className="orangeText">Nossos Contatos</span>
          <span className="primaryText">É Fácil Nos Contatar</span>
          <span className="secondaryText">
            Estamos sempre prontos para ajudar oferecendo o melhor serviço para
            você
          </span>

          <div className="flexColStart contactModes">
            {/* First Row*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Telefone</span>
                    <span className="secondaryText">+55 00 00000000</span>
                  </div>
                </div>
                <div className="flexCenter button">Ligar Agora</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat Online</span>
                    <span className="secondaryText">Atendimento 24 horas</span>
                  </div>
                </div>
                <div className="flexCenter button">Iniciar Chat</div>
              </div>
            </div>
            {/* Second Row*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdEmail size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">E-mail</span>
                    <span className="secondaryText">homyz@email.com</span>
                  </div>
                </div>
                <div className="flexCenter button">Enviar E-mail</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">WhatsApp</span>
                    <span className="secondaryText">+55 00 00000000</span>
                  </div>
                </div>
                <div className="flexCenter button">Abrir WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
        {/*Right Side*/}
        <div className="c-right">
          <div className="image-container">
            <img src="./imgs/contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
