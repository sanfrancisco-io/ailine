import React from "react";
import Image from "next/image";
import style from "./About.module.scss";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AboutImg from "../../assets/jpg/aboutBlockImg.jpg";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Founder from "../../assets/jpg/about-admin.jpg";
import Signature from "../../assets/png/signature.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className={style.aboutWrapper}>
      <div className="container">
        <div className={style.blocks}>
          <motion.div
            className={style.block}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 200 },
            }}
          >
            <div className={style.blockHeader}>
              <AccountBoxIcon sx={{ fontSize: 70 }} />
              <h4>Punctual Of Delivery</h4>
            </div>
            <p>
              While building out a new website you literally no idea of where to
              start.
            </p>
          </motion.div>
          <motion.div
            className={`${style.block} ${style.blockCenter}`}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <div className={style.blockHeader}>
              <AccountBoxIcon sx={{ fontSize: 70 }} />
              <h4>Punctual Of Delivery</h4>
            </div>
            <p>
              While building out a new website you literally no idea of where to
              start.
            </p>
          </motion.div>
          <motion.div
            className={style.block}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -200 },
            }}
          >
            <div className={style.blockHeader}>
              <AccountBoxIcon sx={{ fontSize: 70 }} />
              <h4>Punctual Of Delivery</h4>
            </div>
            <p>
              While building out a new website you literally no idea of where to
              start.
            </p>
          </motion.div>
        </div>
        <div className={style.aboutBlock}>
          <motion.div
            className={style.leftBlock}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <div className={style.greenBlock} />
            <Image src={AboutImg} alt={"img"}/>
          </motion.div>
          <motion.div
            className={style.rightBlock}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <h3>About us</h3>
            <h2>
              We develop every day, improve each of our specialist, we improve
              the quality of our code.
            </h2>
            <p>
              We strive to always be a reliable partner, improve the quality of
              our services 24/7, and bring to the market innovative IT solutions
              that increase the efficiency of our partners.
            </p>

            <div className={style.blockAbouts}>
              <motion.div
                className={style.blockAbout}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
              >
                <PowerSettingsNewIcon sx={{ color: "#ffc501", fontSize: 70 }} />
                <div>
                  <h4>About projects</h4>
                  <p>High-quality and understandable code...</p>
                </div>
              </motion.div>
              <motion.div
                className={style.blockAbout}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100 },
                }}
              >
                <PowerSettingsNewIcon sx={{ color: "#ffc501", fontSize: 70 }} />
                <div>
                  <h4>About employees</h4>
                  <p>
                    Continuous professional growth of each of our developers.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className={style.hr} />
            <div className={style.founder}>
              <div className={style.imgBlock}>
                <Image src={Founder} alt={"img"}/>
                <span>
                  <h4>Marc Antoine Brane</h4>
                  <p>Co-Founder</p>
                </span>
              </div>
              <div className={style.signature}>
                <Image src={Signature} alt={"img"}/>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
