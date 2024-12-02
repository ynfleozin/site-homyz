import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
            initial={{y: "2rem", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
                duration: 2,
                type: "spring"
            }}
            >
              Descubra o imóvel
              <br />
              mais adequado
              <br />
              para você!
            </motion.h1>
          </div>
          <div className="flexColStart hero-desc">
            <span className="secondaryText">
              Encontre uma variedade de propriedades que combinam com você com
              muita facilidade
            </span>
            <span className="secondaryText">
              Esqueça todas as dificuldades em encontrar uma residência para
              você
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Buscar</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={200} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Propriedades</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Clientes Satisfeitos</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={20} />
                <span>+</span>
              </span>
              <span className="secondaryText">Prêmio Ganhos</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <motion.div 
          initial={{x: "7rem", opacity: 0}}        
          animate={{x: 0, opacity: 1}} 
          transition={{
            duration: 2,
            type: "spring"
          }}       
          className="image-container">
            <img src="./imgs/hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
