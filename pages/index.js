import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>designleaks</title>
        <meta name="description" content="Theee place for designooooorrrrssss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Home to the next generation of designers</h1>

        <p className={styles.description}>
        We help designers break into web3. If you&apos;re a designer that&apos;s curious about the web3 but not sure where to start, this is the place for you. 
        </p>

        <div className={styles.ctaButtons}>
          <button id={styles.startProjectBtn}>
            <span id={styles.startProjectBtnText}>Start a project →</span>
          </button>
          <button id={styles.joinSlackBtn}>
            <span>
              <Image src="/slack.svg" alt="Slack Logo" width={23.5} height={20} />
            </span>
            <span id={styles.joinSlackBtnText}>Join our slack</span>
          </button>
        </div>

        <div className={styles.infoSection}>
          <div>
            <h2 id={styles.infoTitle}>Design alongside other designers.</h2>
          </div>
          <div>
            <p id={styles.subTitle}>
              Once you enroll we&apos;ll get you in a channel where you&apos;ll 
              get to share progress with a cohort of awesome designers.
            </p>
          </div>
          <div>
            <p className={styles.infoPoint}>🤝 Community Support</p>
            <p className={styles.infoPoint}>💌 Feedback Days</p>
            <p className={styles.infoPoint}>🚀 Live Events</p>
            <p className={styles.infoPoint}>💡 Step-by-step Videos</p>
            <p className={styles.infoPoint}>💰 100% Free</p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 id={styles.infoTitle}>Ready to design?</h2>
          <p id={styles.subTitle}>Choose a project. Start designing Instantly at no cost.</p>
          <button id={styles.startProjectBtn}>
            <span id={styles.startProjectBtnText}>Explore projects →</span>
          </button>
        </div>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by<strong className={styles.logo}>designleaks</strong>
        </a>
      </footer>
    </div>
  )
}
