import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { 
  LandingImg, 
  ProffyLogo 
} from '../../assets/images';

import { 
  GiveClassesIcon, 
  PurpleHeartIcon, 
  SignOutIcon, 
  StudyIcon 
} from '../../assets/images/icons';

import ProfileImage from '../../assets/images/euzasso.png';

import { 
  Container, 
  TopContent, 
  Header, 
  LogoContainer, 
  InfoContainer, 
  Footer, 
  ButtonsContainer 
} from './styles';
import api from '../../services/api';
import Button from '../../components/Button';

function Landing() {
  const [ totalConnections, setTotalConnections ] = useState(0);

  const { push } = useHistory();

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, []);

  return (
    <Container>
      <TopContent>
          <Header>
            <Link to="/profile">
              <img src={ProfileImage} alt="Profile"/>
              <span>Nome</span>
            </Link>

              <button>
                <SignOutIcon />
              </button>
          </Header>

          <LogoContainer>
            <div>
              <ProffyLogo />
              <h1>Sua plataforma de estudos online.</h1>
            </div>

            <LandingImg/>
          </LogoContainer>
      </TopContent>
      <Footer>
        <InfoContainer>
          <h2>
            Seja bem vindo,
            <strong>O que deseja fazer ?</strong>
          </h2>

          <small>
            Total de {totalConnections} conexões já realizadas.
            <PurpleHeartIcon/>
          </small>
        </InfoContainer>

        <ButtonsContainer>
          <Button onClick={() => push('/study')}>
            <StudyIcon/>
            Estudar
          </Button>

          <Button onClick={() => push('/give-classes')}>
            <GiveClassesIcon/>
            Dar aulas
          </Button>
        </ButtonsContainer>
      </Footer>
    </Container>

  );
  
}

export default Landing;