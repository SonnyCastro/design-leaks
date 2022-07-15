import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>designleaks</title>
        <meta name="description" content="Theee place for designooooorrrrssss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.test}>
          <div className={styles.bgshape + " " + styles.bgprimary + " " + styles.bgblur}></div>
        </div>
        <h1 className={styles.title}>Home to the next generation of designers</h1>
        <p className={styles.description}>
        We help designers break into web3. If you&apos;re a designer that&apos;s curious about the web3 but not sure where to start, this is the place for you. 
        </p>
        <div className={styles.ctaButtons}>
          <button id={styles.startProjectBtn}>
            <span id={styles.startProjectBtnText}>Start a project →</span>
          </button>
          <Link href="https://discord.gg/dg3kwRGG">
            <a id={styles.joinDiscordBtn} target="_blank" rel="noopener noreferrer">
              <span>
                <Image src="/discord.svg" alt="Discord Logo" id={styles.discordLogo} width={23.5} height={20} />
              </span>
              <span id={styles.joinSlackBtnText}>Join our Discord</span>
            </a>
          </Link>
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

        <div className={styles.test2}>
            <div className={styles.bgshape2 + " " + styles.bgprimary2 + " " + styles.bgblur2}></div>
        </div>
        <div className={styles.ctaSection}>
          <h2 id={styles.infoTitle}>Ready to <i>design</i>?</h2>
          <p id={styles.subTitle} style={{textAlign:"center"}}>Sign up and be one of the first designers to join us!</p>
          <Link href="https://discord.gg/dg3kwRGG">
            <a target="_blank" rel="noopener noreferrer" id={styles.joinDiscordBtn} style={{height:"64.8px"}}>
              <span id={styles.startProjectBtnText}>Get Access →</span>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://discord.gg/dg3kwRGG">
          <a
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <span className={styles.logo}>designleaks</span>
          </a>
        </Link>
      </footer>
    </div>
  )
}
