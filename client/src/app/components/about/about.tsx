"use client";
import { useState } from 'react';
import styles from "./about.module.scss";
import Image from "next/image";
import aboutPic from './img/about.jpg';

export default function About() {
  const [more, setMore] = useState(false);

  function handleClick() {
    setMore(!more);
  }

  return (
    <div className={styles.aboutWrapper}>
      <Image
          src={aboutPic}
          width={600}
          height={600}
          alt="LED Headlamp VIDEX VLF-H085-OR 400Lm 5000K"
        />
        <div className={styles.aboutWrapper__desc}>
          <dl>
            <dt>Parameters</dt>
            <dd><b>EAN:</b> 4820246484251</dd>
            <dd><b>On-mode power (Pon):</b> 5 W + COB 5 W</dd>
            <dd><b>Useful luminous flux of the light source (Φuse):</b> 400 Lm</dd>
            <dd><b>Correlated color temperature:</b> 5000K (neutral white)</dd>
            <dd><b>Peak luminous intensity:</b> 3000 cd</dd>
            <dd><b>Distance:</b> 110 m</dd>
          </dl>
          <button className={styles.aboutWrapper__more}  onClick={handleClick}>See all specifications</button>

          {more && 
            <dl>
              <dd><b>Operation mode:</b> HIGH, LOW, FLASH, COB + HIGH, COB HIGH, COB LOW, RED ON, RED FLASH</dd>
              <dd><b>Housing colour:</b> Orange</dd>
              <dd><b>Input interface:</b> USB-C</dd>
              <dd><b>Charging current:</b> DC 5V, 0.5A</dd>
              <dd><b>Fall protection:</b> 2 m</dd>
              <dd><b>Operating temperature range:</b> -20° +40°C</dd>
              <dd><b>Dimmable:</b> no</dd>
              <dd><b>Magnetic base:</b> No</dd>
              <dd><b>Lens material:</b> Polycarbonate (PC)</dd>
            </dl>
          }
        </div>
    </div>
  );
}