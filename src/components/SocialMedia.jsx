import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/samuelgeb1" target="blank">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a
        href="https://web.facebook.com"
        target="blank"
      >
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://github.com/Gebrielsam" target="blank">
        <FaGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/obinna-samuel-381448283/"
        target="blank"
      >
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
