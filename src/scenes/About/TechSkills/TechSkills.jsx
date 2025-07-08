import { BsTerminalFill } from '@react-icons/all-files/bs/BsTerminalFill';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { DiCss3 } from "@react-icons/all-files/di/DiCss3";
import { DiHtml5 } from "@react-icons/all-files/di/DiHtml5";
import { SiTailwindcss } from "@react-icons/all-files/si/Sitailwindcss";
import { SiVercel } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { DiGithubBadge } from "react-icons/di";
import s from './TechSkills.module.scss';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      
      <li className={s.techIcon}>
        <DiJavascript1 />
        <br/>
        <span className={s.text}>JavaScript</span>
      </li>
      <li className={s.techIcon}>
        <DiReact />
        <br/>
        <span className={s.text}>React</span>
      </li>
      <li className={s.techIcon}>
        <SiRedux />
        <br/>
        <span className={s.text}>Redux</span>
      </li>
      <li className={s.techIcon}>
        <DiGit />
        <br/>
        <span className={s.text}>Git</span>
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
        <br/>
        <span className={s.text}>CSS</span>
      </li>
      <li className={s.techIcon}>
        <BsTerminalFill />
        <br/>
        <span className={s.text}>Terminal</span>
      </li>
      <li className={s.techIcon}>
        <DiHtml5 />
        <br/>
        <span className={s.text}>HTML</span>
      </li>
      <li className={s.techIcon}>
        <SiTailwindcss />
        <br/>
        <span className={s.text}>Tailwind</span>
      </li>
      <li className={s.techIcon}>
        <SiVercel />
        <br/>
        <span className={s.text}>Vercel</span>
      </li>
      <li className={s.techIcon}>
        <SiRender />
        <br/>
        <span className={s.text}>Render</span>
      </li>
      <li className={s.techIcon}>
        <SiMongodb />
        <br/>
        <span className={s.text}>Mongodb</span>
      </li>
      <li className={s.techIcon}>
        <SiExpress />
        <br/>
        <span className={s.text}>Express</span>
      </li>
      <li className={s.techIcon}>
        <FaNode />
        <br/>
        <span className={s.text}>Node</span>
      </li>
      <li className={s.techIcon}>
        <DiGithubBadge  />
        <br/>
        <span className={s.text}>GitHub</span>
      </li>
    </ul>
  );
};

export default TechSkills;
