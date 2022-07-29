import React, { useState } from 'react';
import cl from './PreFooter.module.scss';
import { motion } from 'framer-motion';
const PreFooter = () => {
    const [value, setValue] = useState('');

    return (
        <div className={cl.pre_footer}>
            <div className={cl.pre_footer2}>
                <motion.div
                    viewport={{ once: true }}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.5 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                    className={cl.pre_footer2_inner}>
                    <div className={cl.pre_footer2_inner_left}>
                        <h1>Looking for a reliable subcontractor? Then AILINE LLC invites you to long-term cooperation!</h1>
                    </div>
                    <div className={cl.pre_footer2_inner_right}>
                        <input type="email" placeholder='Your email address' value={value}
                            onChange={(e) => setValue(e.target.value)} />
                        <button>SUBSCRIBE</button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PreFooter;