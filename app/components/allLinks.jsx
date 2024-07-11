import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

function AllLinks() {
  return (
    <>
      <a
        target='_blank'
        href='https://github.com/JCzyszczon'
        className='duration-200 hover:-translate-y-[2px] links'
        title='Visit GitHub'
      >
        <FaGithub />
      </a>
      <a
        target='_blank'
        href='https://www.linkedin.com/in/jakub-czyszczoń-5265b02a6/'
        className='duration-200 hover:-translate-y-[2px] links'
        title='Visit Linkedin'
      >
        <FaLinkedin />
      </a>
      <a
        target='_blank'
        href='https://x.com/czycho_'
        className='duration-200 hover:-translate-y-[2px] links'
        title='Visit Twitter'
      >
        <FaTwitter />
      </a>
      <a
        target='_blank'
        href='https://www.instagram.com/czycho_/'
        className='duration-200 hover:-translate-y-[2px] links'
        title='Visit Instagram'
      >
        <FaInstagram />
      </a>
    </>
  );
}

export default AllLinks;
