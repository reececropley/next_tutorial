import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Experienced Web Developer with a demonstrated history of working in the information technology and services industry. Skilled in PHP, WordPress, Adobe Illustrator, jQuery, and Dreamweaver. Strong arts and design professional with a Bachelor of Science (BSc) focused in Business and Information Technology from Aberystwyth University.</p>
        <p>This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a></p>
      </section>
    </Layout>
  )
}