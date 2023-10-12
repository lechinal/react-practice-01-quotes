import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './SkillShowcase.module.css';

export default function SkillShowcase() {
  return (
    <div className={styles.buttons}>
      <a href="https://www.linkedin.com/in/alin-lechintan-2582b181/">
        <button className={styles.button}>
          <FaLinkedin className={styles.icon} />
        </button>
      </a>
      <a href="https://github.com/lechinal">
        <button className={styles.button}>
          <FaGithub className={styles.icon} />
        </button>
      </a>
    </div>
  );
}
