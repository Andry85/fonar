import type { Metadata } from "next";
import styles from "./page.module.scss";
import About from "./components/about/about";

export const metadata: Metadata = {
  title: "VIDEX VLF-H085-OR 400Lm 5000K",
  description: "LED Headlamp VIDEX VLF-H085-OR 400Lm 5000K",
};


export default function Home() {
  return (
    <div className={styles.container}>
      <About/>
    </div>
  );
}
