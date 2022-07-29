import React from "react";
import Image from "next/image";
import style from "./WorkingProccess.module.scss";
import Work1 from "../../assets/png/work-1.png";
import Work2 from "../../assets/png/work-2.png";
import Work3 from "../../assets/png/work-3.png";
import { motion } from "framer-motion";

const WorkingProccess = () => {
  return (
    <div className={style.wrapper}>
      <div className="container">
        <motion.h3
          className={style.title}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          Proccess of Work
        </motion.h3>
        <motion.div
          className={style.header}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <h2>
            We are{" "}
            <span className="greenContent">changing the way we work</span> with
            each project
          </h2>
          <span className={style.typography}>
            <p>
              Each project needs a thorough check from our best programmers and
              their quality development.
            </p>
          </span>
        </motion.div>
        <div className={style.items}>
          <motion.div
            className={style.item}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <div className={style.greenBackground}></div>
            <div className={style.imgBlock}>
              <Image src={Work1} alt={"img"} />
              <div className={style.number}>1</div>
            </div>
            <div className={style.contentBlock}>
              <p>High-quality and understandable code</p>
            </div>
          </motion.div>
          <motion.div
            className={style.item}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 1 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <div className={style.imgBlock}>
              <Image src={Work2} alt={"img"}/>
              <div className={style.number}>2</div>
            </div>
            <div className={style.contentBlock}>
              <p>Continuous professional growth of each of our developers</p>
            </div>
          </motion.div>
          <motion.div
            className={style.item}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 1.5 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <div className={style.imgBlock}>
              <Image src={Work3} alt={"img"}/>
              <div className={style.number}>3</div>
            </div>
            <div className={style.contentBlock}>
              <p>Well-established business processes</p>
            </div>
          </motion.div>
        </div>
        <div className={style.btn}>
          <a>View all services</a>
        </div>
      </div>
    </div>
  );
};

export default WorkingProccess;
