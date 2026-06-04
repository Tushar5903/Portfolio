import { BsTerminalFill } from '@react-icons/all-files/bs/BsTerminalFill';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiJava } from "react-icons/di";
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { DiCss3 } from "@react-icons/all-files/di/DiCss3";
import { DiHtml5 } from "@react-icons/all-files/di/DiHtml5";
import { SiVercel } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import s from './TechSkills.module.scss';

const TechSkills = () => {
  return (
    <ul className={s.container}>

      <li className={s.techIcon}>
        <DiJava /> 
        <br/>
        <span className={s.text}>Java</span>
      </li>
      <li className={s.techIcon}>
        <SiSpringboot /> 
        <br/>
        <span className={s.text}>SpringBoot</span>
      </li>     
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
        <SiNodedotjs  />
        <br/>
        <span className={s.text}>Node.js</span>
      </li>
      <li className={s.techIcon}>
        <SiExpress  />
        <br/>
        <span className={s.text}>Express.js</span>
      </li>
      <li className={s.techIcon}>
        <SiMongodb />
        <br/>
        <span className={s.text}>Mongodb</span>
      </li>
      <li className={s.techIcon}>
        <SiMysql /> 
        <br/>
        <span className={s.text}>MySql</span>
      </li>
      <li className={s.techIcon}>
        <DiGithubBadge  />
        <br/>
        <span className={s.text}>GitHub</span>
      </li>
      <li className={s.techIcon}>
        <SiFramer />
        <br/>
        <span className={s.text}>Framer Motion</span>
      </li>
      <li className={s.techIcon}>
        <SiPostman />
        <br/>
        <span className={s.text}>Postman</span>
      </li>
    </ul>
  );
};

export default TechSkills;
