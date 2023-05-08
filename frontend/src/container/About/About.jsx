import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [resumeURL, setResumeURL] = React.useState('');

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    const resumeQuery = '*[_type == "resume"]';

    client.fetch(query).then((data) => {
      setAbouts(data);

      client.fetch(resumeQuery).then((url) => {
        setResumeURL(url);
      });
    });
  }, []);

  const resUrl = resumeURL[0]?.file.asset;

  const resUrlValue = resUrl ? Object.values(resUrl)[0] : null;

  const exactResumeUrl = resUrlValue ? resUrlValue.split('file-')[1] : null;

  const finalResumeUrl = exactResumeUrl?.replace('-pdf', '.pdf');

  const handleDownloadClick = (e) => {
    e.preventDefault();
    window.open(`https://cdn.sanity.io/files/tssk1d9h/production/${finalResumeUrl}`, '_blank');
  };

  return (
    <>
      {/* <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2> */}

      {abouts.map((about) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          // whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-about-item"

        >
          {/* <p>I’m a front-end developer who loves building user-friendly websites and web apps, enjoys writing documentation and loves helping people learn how to code.   I like to define myself by the work I want to do than the work I’ve done. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</p> */}

          <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>

          {/* <div>
          <button onClick={handleDownloadClick}>Download PDF</button>
        </div> */}

          <div className="app__resume">
            <div
              onClick={handleDownloadClick}
              className="item-active"
            >Download Resume
            </div>
          </div>

        </motion.div>
      ))}

    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
