import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hello!&nbsp;
          <code className={styles.code}>Lovely to meet and connect with you!</code>
        </p>
      </div>


    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="/Logo.png"
        width={900}
        height={500}
        alt="Picture of the author"
        priority
      />
    </div>


      <div className={styles.grid}>
        <a
          href="/HannahPham_Resume.pdf"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Download CV <span>-&gt;</span>
          </h2>
          <p>To download my CV, simply click this button.</p>
        </a>

        <a
          href="https://new-portfolio-hanhpham1512.vercel.app/about"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About Me! <span>-&gt;</span>
          </h2>
          <p>Discover more about me and my background!</p>
        </a>

        <a
          href="https://new-portfolio-hanhpham1512.vercel.app/projects"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Projects <span>-&gt;</span>
          </h2>
          <p>Here are some projects I have worked on.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Gallery <span>-&gt;</span>
          </h2>
          <p>
          Samples that demonstrate the practical implementation of a database.
          </p>
        </a>
      </div>
    </main>
  )
}
