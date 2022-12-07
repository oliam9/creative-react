import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Image, Hide } from '../styles';
//framer motion
import { motion } from 'framer-motion';

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2
              variants={titleAnim}
              initial="hidden"
              animate="show"
            >
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dream</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography
          ideas that you have. We are professionals with
          amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img
          src={home1}
          alt="guy with camera"
        />
      </Image>
    </About>
  );
};

//styled components

export default AboutSection;
