import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';
import { client, urlFor } from '../../client';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const query = '*[_type == "profile"]';

    client.fetch(query).then((data) => {
      setProfileData(data);
    });
  }, []);

  console.log('profileImage', profileData);

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >

        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20, width: '100%' }}>
              <TypeAnimation
                sequence={['Hello,', 1000, 'Hello, I am Ninshad', 1000]}
                style={{ fontSize: '1.5em', color: '#ff2b61' }}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
        {/* <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div style={{ marginLeft: 20, width: '100%' }}>
            <TypeAnimation
              sequence={['Hello,', 1000, 'Hello, I am', 1000, 'Hello, I am Ninshad', 1000]}
              style={{ fontSize: '1.5em', color: '#00d100' }}
              wrapper="div"
              repeat={Infinity}
            />
            <TypeAnimation
              sequence={['I am a Web developer', 1000, 'I am a Freelancer', 1000]}
              style={{ fontSize: '1.5em', color: '#00A500' }}
              wrapper="div"
              repeat={Infinity}
            />

          </div>
        </div>

        <div className="badge-cmp app__flex">
          <div style={{ marginLeft: 20, width: '100%' }}>
            <TypeAnimation
              sequence={['Skills: React JS', 1000,
                'Skills: Redux', 1000,
                'Skills: Next JS', 1000,
                'Skills: Node JS', 1000,
                'Skills: Mongo db', 1000,
                'Skills: graph ql', 3000]}
              style={{ fontSize: '1.3em', color: '#00A500' }}
              wrapper="div"
              repeat={Infinity}
            />
          </div>
        </div>

      </div> */}

      </motion.div>

      {profileData.map((data) => (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          {/* <img src={images.NinshadProfile} alt="profile_bg" /> */}
          <img src={urlFor(data?.profileImage)} alt={data?.name} />

          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            src={images.circle}
            alt="profile_circle"
            className="overlay_circle"
          />
        </motion.div>

      ))}

      {profileData.map((data, index) => (
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={urlFor(data?.icon1)} alt="profile_bg" />
          </div>
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={urlFor(data?.icon2)} alt="profile_bg" />
          </div>
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={urlFor(data?.icon3)} alt="profile_bg" />
          </div>

          {/* {[images.react, images.redux, images.sass].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={urlFor(data?.icon1)} alt="profile_bg" />
            </div>
          ))} */}
        </motion.div>
      ))}
    </div>
  );
};

export default AppWrap(Header, 'home');
