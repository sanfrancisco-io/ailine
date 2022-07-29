import React from "react";
import cl from "./Ompanies.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import Image from "next/image";
import q from '../../assets/projects/1.jpg'
import w from '../../assets/projects/2.jpg'
import e from '../../assets/projects/3.jpg'
import r from '../../assets/projects/4.jpg'
import t from '../../assets/projects/5.jpg'
import y from '../../assets/projects/6.jpg'
import u from '../../assets/projects/7.jpg'
import i from '../../assets/projects/8.jpg'
import o from '../../assets/projects/9.jpg'
import { useMediaQuery } from "react-responsive";
import { motion } from 'framer-motion';
const Ompanies = () => {
  const laptop = useMediaQuery({ query: "(max-width: 1024px)" });
  const isPlanshet = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  return (
    <div className={cl.largest}>
      <div className={cl.largest_inner}>
        <motion.h2
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >Our Best projects</motion.h2>
        <motion.div
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={cl.header}>
          <h2>
            We Business and{" "}
            <span className={"greenContent"}>It Solutions Of Total</span>
            -Services
          </h2>
          <span className={cl.typography}>
            <p>
              Below you can see some of our best projects. Among them are websites, mobile applications for android and ios
            </p>
          </span>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={cl.largest_inner_bottom}>
          <Swiper
            resizeObserver={true}
            rewind={true}
            slidesPerView={(isPlanshet && 1) || (3 && isMobile && 2) || 4}
            spaceBetween={40}
            className={cl.mySwiper}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide className={cl.swipItem}>
              <Image src={q} className={cl.img} alt={"img"}/>
              <div className={cl.card_text_block}>
                <h3>Medcheck - mobile App(IOS/Android)</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={w} className={cl.img} alt={"img"}/>
              <div className={cl.card_text_block}>
                <h3>Navi Taxi - mobile App (IOS/Android)</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={e} className={cl.img} alt={"img"}/>

              <div className={cl.card_text_block}>
                <h3>KVADRAT.KG - Web App</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={r} className={cl.img} alt={"img"}/>
              <div className={cl.card_text_block}>
                <h3>SANRIJAPAN.COM - Web App</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={t} className={cl.img} alt={"img"}/>
              <div className={cl.card_text_block}>
                <h3>Agrimatco - mobile App (Android)</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={y} className={cl.img} alt={"img"}/>
              <div className={cl.card_text_block}>
                <h3>Mayram market - mobile App (IOS/Android)</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={u} className={cl.img} alt={"img"}/>
              <div className={cl.card_text_block}>
                <h3>G Shop- mobile App (IOS/Android)</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={i} className={cl.img} alt={"img"}/>
              <div className={cl.card_text_block}>
                <h3>T-EXPRESS.US - Web App</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={o} className={cl.img} alt={"img"}/>
              <div className={cl.card_text_block}>
                <h3>DLXLIMOUSINE.COM - Web App</h3>
              </div>
            </SwiperSlide>
          </Swiper>
          <button>View all Projects</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Ompanies;
