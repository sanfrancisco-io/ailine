import React from "react";
import cl from "./Largest.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import Image from "next/image";
import q from "../../assets/swip1.jpg";
import w from "../../assets/swip2.jpg";
import e from "../../assets/swip3.jpg";
import { useMediaQuery } from "react-responsive";
import { motion } from 'framer-motion';
const Largest = () => {
  const isPlanshet = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  return (
    <div className={cl.largest}>
      <div className={cl.largest_inner}>
        <motion.h2
          initial='hidden'
          whileInView='visible'
          viewport={{once: true}}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >Cost</motion.h2>
        <motion.div
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          viewport={{once: true}}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={cl.header}>
          <h2>
            COST {" "}
            <span className={"greenContent"}>OF OUR</span>
            SERVICES
          </h2>
          <span className={cl.typography}>
            <p>
              Below are the services of our developers, depending on their qualifications
            </p>
          </span>
        </motion.div>
        <motion.div
        viewport={{once: true}}
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
            slidesPerView={(isPlanshet && 1) || (3 && isMobile && 2) || 3}
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
                <h3>

                  payment: 1200$/month (or 10$/hour)
                  {/* <span>19 May 2021</span> */}
                </h3>
                <h2>Junior developers</h2>
                <p>
                  Average experience in software development: 1 – 1,5 years
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={w} className={cl.img} alt={"img"}/>
              <div className={cl.card_text_block}>
                <h3>

                  payment: 3500$/month (or 25$/hour)
                  {/* <span>19 May 2021</span> */}
                </h3>
                <h2>Middle developers</h2>
                <p>
                  Average experience in software development: from 3 years
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={e} className={cl.img} alt={"img"}/>

              <div className={cl.card_text_block}>
                <h3>

                  payment: 5000$/month (or 35$/hour)
                  {/* <span>19 May 2021</span> */}
                </h3>
                <h2>Senior developers</h2>
                <p>
                  Average experience in software development: from 5 years
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={q} className={cl.img} alt={"img"}/>
              <div className={cl.card_text_block}>
                <h3>

                  payment: 1200$/month (or 10$/hour)
                  {/* <span>19 May 2021</span> */}
                </h3>
                <h2>Junior developers</h2>
                <p>
                  Average experience in software development: 1 – 1,5 years
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={w} className={cl.img} alt={"img"}/>
              <div className={cl.card_text_block}>
                <h3>

                  payment: 3500$/month (or 25$/hour)
                  {/* <span>19 May 2021</span> */}
                </h3>
                <h2>Middle developers</h2>
                <p>
                  Average experience in software development: from 3 years
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={cl.swipItem}>
              <Image src={e} className={cl.img} alt={"img"}/>

              <div className={cl.card_text_block}>
                <h3>

                  payment: 5000$/month (or 35$/hour)
                  {/* <span>19 May 2021</span> */}
                </h3>
                <h2>Senior developers</h2>
                <p>
                  Average experience in software development: from 5 years
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Largest;
