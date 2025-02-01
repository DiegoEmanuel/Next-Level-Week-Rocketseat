import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallanges } from "../Components/CompletedChallanges";
import { Countdown } from "../Components/Countdown";
import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from "../Components/Profile";
import { ChallangeBox } from "../Components/ChallangeBox";

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from "../context/CountdownContext";
import React from 'react';
import { ChallangesProvider } from '../context/ChallangesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  chalangesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallangesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      chalangesCompleted={props.chalangesCompleted}
    >
      <CountdownProvider>
        <main className={styles.container}>
          <Head>
            <title>Início | move.it</title>
          </Head>

          <ExperienceBar/>
      
        <section>
          <div className={styles.cycleContainer}>
              <Profile/>
              <CompletedChallanges />
              <Countdown />
          </div>

            <ChallangeBox />

        </section>
        </main> 
      </CountdownProvider>
   </ChallangesProvider> 
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, chalangesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      chalangesCompleted: Number(chalangesCompleted),
    }
  }
}
