import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Tushar Kumar, </span>

        <br />
        <br />
        I have a Diploma and Bachelor's degree in Computer Science 
        <br />
        I am a web developer with strong problem-solving skills and a robust team-player attitude. Quick at grasping and
        implementing new technologies, proficient in efficiently managing multiple tasks, and proactive in tackling
        challenges. 
        <br/>
        <br/>
        Passionate about continuous learning and improvement, always striving to enhance technical expertise
        and deliver high-quality solutions
        <br />
        <br />
        My hobbies beyond programming:
      </p>

      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>
          - Playing Games
        </li>
        <li className={s.aboutActivity}>
          - Reading
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
