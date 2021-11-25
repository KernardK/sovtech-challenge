// Font Awesome icons
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

// Simple Icons
import { SiDjango } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import styles from "@/styles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={styles.aboutSec}>
      <h1 className={styles.title}>
        Who is <span className={styles.focus}>Kernard</span> ?
      </h1>
      <p className={styles.aboutDesc}>
        I am a self taught software engineer who solves problems in Python and
        Django. Despite having an obvious partiality to Python, I have spent a
        fair amount of time learning and teaching myself a wide variety of
        programming languages.
        <br />
        <br />
        I found a real passion for programming and decided to dedicate my time
        into learning all things software related. I decided to start teaching
        myslf Java but after Java defeated me, I thought it better to get some
        help. I enrolled into the Software Engineering Bootcamp with
        HyperionDev, an intense programming course specializing in Java and
        Python as well as the core concepts of software development, data
        structures and algorithm building, control structures and more.
        <br />
        <br />
        Not only do I feel this shows a real passion and dedication for all
        things software related, it also demonstrates my ability to learn,
        progress and challenge myself further. I believe I am capable of of
        becoming a truly great software engineer
        <br />
      </p>

      <h2 className={styles.title2}>I've got some skills</h2>

      {/* Skills Section */}
      <div className={styles.skills}>
        {/* Python Skill Card */}
        <div className={styles.skillCard}>
          <i className={styles.skill}>
            <FaPython />
          </i>
        </div>

        {/* Django Skill Card */}
        <div className={styles.skillCard}>
          <i className={styles.skill}>
            <SiDjango />
          </i>
        </div>

        {/* Java Skill Card */}
        <div className={styles.skillCard}>
          <i className={styles.skill}>
            <FaJava />
          </i>
        </div>

        {/* JavaScript Skill Card */}
        <div className={styles.skillCard}>
          <i className={styles.skill}>
            <SiJavascript />
          </i>
        </div>

        {/* Flutter Skill Card */}
        <div className={styles.skillCard}>
          <i className={styles.skill}>
            <SiFlutter />
          </i>
        </div>

        {/* Node Js Skill Card */}
        <div className={styles.skillCard}>
          <i className={styles.skill}>
            <FaNodeJs />
          </i>
        </div>

        {/* React Js Skill Card */}
        <div className={styles.skillCard}>
          <i className={styles.skill}>
            <FaReact />
          </i>
        </div>

        {/* Kotlin Js Skill Card */}
        <div className={styles.skillCard}>
          <i className={styles.skill}>
            <SiKotlin />
          </i>
        </div>
      </div>
    </div>
  );
}
