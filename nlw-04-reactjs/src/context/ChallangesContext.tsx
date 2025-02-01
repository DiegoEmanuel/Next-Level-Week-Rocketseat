import { createContext, useState, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';
import challanges from '../../challenges.json';
import { LevelUpModal } from '../Components/LevelUpModal';


interface Challange {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallangesContextData {
  level: number; 
  currentExperience: number; 
  experienceToNextLevel: number;
  challangesCompleted: number;
  activeChallange: Challange;
  levelUp: () => void;
  startNewChallange: () => void;
  resetChallange: () => void;
  completeChallange: () => void;
  closeLevelUpModal: () => void;
}
interface ChallangesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  chalangesCompleted: number;
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangesProvider({ 
  children, 
  ...rest
}: ChallangesProviderProps) {
  const [ level, setLevel ] = useState(rest.level ?? 1);
  const [ currentExperience, setCurrentExperience ] = useState(rest.currentExperience ?? 0);
  const [ challangesCompleted, setChallangesCompleted ] = useState(rest.chalangesCompleted ?? 0);

  const [activeChallange, setActiveChallange] = useState(null);
  const [isLevelUpModalUp, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('chalangesCompleted', String(challangesCompleted));
  }, [level, currentExperience, challangesCompleted]);


  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallange() {
    const randomChallangeIndex = Math.floor(Math.random() * challanges.length);
    const challange = challanges[randomChallangeIndex];

    setActiveChallange(challange);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challange.amount}xp!`
      })
    }
  
  }

   

  function resetChallange() {
    setActiveChallange(null);
  }

  function completeChallange() {
    if (!activeChallange) {
      return;
    }

    const { amount } = activeChallange;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallange(null);
    setChallangesCompleted(challangesCompleted + 1);
  }
  
  return (
    <ChallangesContext.Provider 
      value={{ 
        level, 
        currentExperience,
        experienceToNextLevel,
        challangesCompleted, 
        levelUp,
        startNewChallange,
        activeChallange,
        resetChallange,
        completeChallange,
        closeLevelUpModal, 
      }}
    >
      
      {children}

      { isLevelUpModalUp && <LevelUpModal />}
    </ChallangesContext.Provider>
  );
}