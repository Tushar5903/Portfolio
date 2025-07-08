import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Tilt from 'react-parallax-tilt';
import avatar from '../../../assets/avatar.svg';
import s from './IntroSection.module.scss';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I'm a  web developer with strong problem-solving skills and a robust team-player attitude
              <br />
              creating Responsive Web Pages supporting multiple platforms.
            </p>

            <p>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                   modern web development technologies.
                </b>
              </i>
              <br />
              I have hands-on experience in integrating various third-party libraries,<br />
               implementing API integration, managing push
              notifications.
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}> Technologies and Products</b>
              </i>
            </p>
          </div>
        </div>

        <div trackOnWindow={true} className={s.homeimage}>
          <img alt="avatar" effect="blur" src="https://res.cloudinary.com/dyaz7lhkb/image/upload/v1751301146/StudyNotion/eycsyfbqvi3auvxz054u.png" />
        </div>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/Tushar5903"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.instagram.com/tushar__kumar_05/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaInstagram />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/tusharkumar0509/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
