import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

import styles from '../../styles/alert.module.scss'
import cn from 'classnames'

export default function Alert ({children, type}){
    return (
        <Layout>
        <Head>
            <title>Second Post</title>
        </Head>
        <h1 class={styles.headingRc}>
            This is my second post test using sass. 
            <Link href="//github.com/reececropley">
                <a target="_blank">Check my Github</a>
            </Link>
        </h1>
        <Link href="/">Home</Link>
        <Link href="first-post">First Post</Link>
        <div 
            className = {cn({
                    [styles.success]: type === 'success',
                    [styles.error]: type === 'error'
            })}
            >
            {children}
            </div>
        </Layout>
    )
}