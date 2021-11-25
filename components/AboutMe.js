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

// CSS Module
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

      <h2 className={styles.title2}>I have some skills</h2>
      <p className={styles.aboutDesc}>
        Here are some of the skills that I have acquired over the years
      </p>

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

      {/* Why Sovtech section */}
      <div className={styles.sovtech}>
        <h1 className={styles.title}>
          Why the interest in <span className={styles.focus}>SovTech</span>?
        </h1>
        <p className={styles.aboutDesc}>
          If I may speak frankly, I had not heard of Sovtech before. This all
          changed upon being invited to the HyperionDev Career Tech Expo as a
          graduate of HyperionDev. I had enjoyed the presentations but Sovtech
          stood out from the rest.
          <br />
          <br />
          The presentation given by{" "}
          <span className={styles.focus}>Yadin Badal</span> was explained in
          great detail all the cutting edge technology being used at SovTech,
          from mobile development, web development and the blockchain. The tech
          stack was impressive but what really sparked my interest was the stack
          used in the blockchain.
          <br />
          From AWS Blockchain templates, Solidity the implementation of smart
          contracts and Truffle the testing framework for blockchains using
          Ethereum Virtual Machine (EVM). I knew I wanted to join SovTech and
          contribute to all applications being developed on the blockchain.
          Besides the technical aspects and being at the bleading edge of
          technology.
          <br />
          <br />I really enjoyed the description of the working environment at
          SovTech, the presentation spoke about dev chats the opportuinity to
          speak to other developers and share experiences and guidance. It also
          spoke about the different social clubs for all sorts of interests,
          SovTech being a fluid working company having various weeks to travel
          to different areas to work. I also really loved the fact that the
          blockchain again is a standout feature at SovTech by giving developers
          a currency to reward teamwork and helpfulness at the workplace.
          <br />
          <br />
          One of the stand out features at SovTech was the ability to have a
          portion of your salary in Bitcoin, this is the kind of forward
          thinking that I love to see in organizations and this another reason
          that drew me closer to SovTech. I believe that being at SovTech will
          allow me to grow and further my skills and become a trully exceptional
          software engineer. As you can tell I am very excited for the
          opportunity to become a SovTech member and contribute to the team and
          solve challenges, helping to change the world one line of code at a
          time.
        </p>
      </div>
    </div>
  );
}
