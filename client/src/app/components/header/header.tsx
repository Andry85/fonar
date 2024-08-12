import Navbar from "../navbar/navbar";
import styles from "./header.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import logoPic from './img/logo.png';


export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src={logoPic}
          width={138}
          height={43}
          alt="logo"
        />
      </Link>
      <Navbar/>
    </header>
  );
}