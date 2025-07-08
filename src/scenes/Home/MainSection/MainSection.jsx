import { LazyLoadImage } from 'react-lazy-load-image-component';
import handIcon from '../../../assets/hand.png';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import s from './MainSection.module.scss';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <div className={s.greetingContainer}>
          <h2 className={s.title}>
            Greetings!
          </h2>
          <img 
            src={handIcon} 
            className={s.handIcon} 
          />
        </div>

        <h1 className={s.mainTitle}>
          I'M
          <strong className={s.mainName}> Tushar Kumar</strong>
        </h1>

        <div className={s.typewriter}>
          <Typewriter
            strings={[
              'Continuously Learning',
              'Web Development',
            ]}
            wrapperClassName={s.typewriterInner}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <div className={s.spacer} />

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src="https://res.cloudinary.com/dyaz7lhkb/image/upload/v1751885328/home_page_mia3lw.png"
        wrapperClassName={s.homeMainIcon}
        width="396"
        height="400"
      />
    </section>
  );
};

export default MainSection;
