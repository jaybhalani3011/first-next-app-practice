import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router  = useRouter();
  
  const handleFn = () => {
    router.replace('/post');
  }
  return (
    <div className={styles.container}>
      <h1>
        First Next App
      </h1>
      <Link href="/docs">
        <a>hey</a>
      </Link><br />
      <button onClick={handleFn}>Click for PostList</button><hr /><hr />
      <Link href='/userpost'>
        <a style={{cursor:'pointer'}}>User Posts</a>
      </Link>
    </div>
  )
}
