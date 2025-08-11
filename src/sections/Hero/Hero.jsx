import styles from './HeroStyles.module.css';

// Assets
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

// Context
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  // Icon selection based on theme
  const icons = {
    theme: theme === 'light' ? sun : moon,
    twitter: theme === 'light' ? twitterLight : twitterDark,
    github: theme === 'light' ? githubLight : githubDark,
    linkedin: theme === 'light' ? linkedinLight : linkedinDark,
  };

  return (
    <section id="hero" className={styles.container}>
      {/* Profile & Theme Toggle */}
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Syed Sufiyan"
        />
        <img
          className={styles.colorMode}
          src={icons.theme}
          alt="Toggle theme"
          onClick={toggleTheme}
        />
      </div>

      {/* Info Section */}
      <div className={styles.info}>
        <h1>
          Syed <br /> Sufiyan Ameen
        </h1>
        <h2>MERN Stack Developer</h2>

        {/* Social Links */}
        <span>
          <a href="https://x.com/syedsufyan_sufi" target="_blank" rel="noopener noreferrer">
            <img src={icons.twitter} alt="Twitter" />
          </a>
          <a href="https://github.com/syedsufyansufi" target="_blank" rel="noopener noreferrer">
            <img src={icons.github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/syedsufiyan7/" target="_blank" rel="noopener noreferrer">
            <img src={icons.linkedin} alt="LinkedIn" />
          </a>
        </span>

        {/* Description */}
        <p className={styles.description}>
          Passionate MERN Stack Developer skilled in building responsive, scalable web applications. 
          Focused on creating modern, user-friendly interfaces and delivering seamless user experiences.
        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1NxOSBhrYdsILrAiR3JmBTTmMJh2gvkeI/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
