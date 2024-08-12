import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <ul className={styles.container}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/">About</Link></li>
      <li><Link href="/">Photo</Link></li>
      <li><Link href="/">Reviews</Link></li>
    </ul>
  );
}