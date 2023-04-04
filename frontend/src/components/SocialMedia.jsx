import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/ninshad-m/">
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a href="https://m.facebook.com/ninshadm.mnn">
      <div>
        <FaFacebookF />
      </div>
    </a>
    <a href="https://www.instagram.com/ninshad_m/">
      <div>
        <BsInstagram />
      </div>
    </a>
  </div>
);

export default SocialMedia;
