import React from "react";
import cl from "./Skill.module.scss";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div className={cl.skill}>
      <div className={cl.skill_left}>
        <motion.h5
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          Our Skill company
        </motion.h5>
        <motion.h1
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          Biggest Skill <span> Mistakes You Can It-Service </span>Easily Avoid.
        </motion.h1>
        <motion.div
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={cl.left_border}
        >
          <p>
            In our opinion, the IT help desk is one the most important functions
            you can have in any service-oriented organization. Having a help
            desk in place means that there’s a single point of contact for the
            business to engage with IT, end-user requests and incidents are
            managed centrally, and nothing is lost, ignored, or forgotten about.
          </p>
        </motion.div>
        <motion.h4
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          Excellence in Things We Are Skill Company
        </motion.h4>
        <motion.p
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          we denounce with righteous indignation and dislike men who are so
          beguiled and demoralized by the charms of pleasure of.
        </motion.p>
        <motion.div
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={cl.progress}
        >
          <div className={cl.progress_first}>
            <div className={cl.progress_first_text_block}>
              <span>Our Service</span>
              <span>90%</span>
            </div>
            <div className={cl.progress_first_line}>
              <motion.div
                className={cl.progress_first_line_inner_90}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                variants={{
                  visible: { opacity: 1, width: "90%" },
                  hidden: { opacity: 0, width: "0%" },
                }}
              />
            </div>
          </div>
          <div className={cl.progress_first}>
            <div className={cl.progress_first_text_block}>
              <span>Projects Complete</span>
              <span>75%</span>
            </div>
            <div className={cl.progress_first_line}>
              <motion.div
                className={cl.progress_first_line_inner_75}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 1 }}
                variants={{
                  visible: { opacity: 1, width: "75%" },
                  hidden: { opacity: 0, width: "0%" },
                }}
              />
            </div>
          </div>
          <div className={cl.progress_first}>
            <div className={cl.progress_first_text_block}>
              <span>IT-Solution</span>
              <span>92%</span>
            </div>
            <div className={cl.progress_first_line}>
              <motion.div
                className={cl.progress_first_line_inner_92}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 1.5 }}
                variants={{
                  visible: { opacity: 1, width: "92%" },
                  hidden: { opacity: 0, width: "0%" },
                }}
              />
            </div>
          </div>
        </motion.div>
        <motion.button
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          Read More
        </motion.button>
      </div>
      <motion.div
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        className={cl.skill_right}
      />
    </div>
  );
};

export default Skill;
