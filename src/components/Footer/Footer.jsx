import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane';
import s from './Footer.module.scss';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made with ❤️ by Tushar Kumar</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/Tushar5903"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tushar__kumar_05/"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tusharkumar0509/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
