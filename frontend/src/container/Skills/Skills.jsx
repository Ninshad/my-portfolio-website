import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [backendSkills, setBackendSkills] = useState([]);
  const [theme, setTheme] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    const backendSkillsQuery = '*[_type == "backendSkills"]';
    const themeQuery = '*[_type == "theme"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data?.reverse());
    });

    client.fetch(backendSkillsQuery).then((data) => {
      setBackendSkills(data);
    });

    client.fetch(themeQuery).then((data) => {
      setTheme(data);
    });
  }, []);

  console.log('theme', theme);
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <div className="app__skills-list-container">
          <h4>Frontend</h4>
          <motion.div className="app__skills-list">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text-skills">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>

          <h4>Backend</h4>
          <motion.div className="app__skills-list">
            {backendSkills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text-skills">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="experiance-timeline">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={experience.year}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

              >
                <div className="app__skills-exp">

                  <motion.div
                    className="app__skills-exp-item"
                    key={experience.year}
                  >
                    <div className="app__skills-exp-year">
                      <p className="bold-text">{experience.year}</p>
                    </div>
                    <motion.div className="app__skills-exp-works">
                      {experience.works.map((work) => (
                        <>
                          <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-exp-work"
                            data-tip
                            data-for={work.name}
                            key={work.name}
                          >
                            <h4 className="bold-text">{work.name}</h4>
                            <p className="p-text">{work.company}</p>
                          </motion.div>
                          <ReactTooltip
                            id={work.name}
                            effect="solid"
                            arrowColor="#fff"
                            className="skills-tooltip"
                          >
                            {work.desc}
                          </ReactTooltip>
                        </>
                      ))}
                    </motion.div>
                  </motion.div>

                </div>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
