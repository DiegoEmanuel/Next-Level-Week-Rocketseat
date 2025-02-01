import React from 'react';

import { Container, Header, Footer, Schedule } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
/* import api from '../../services/api'; */
import TeacherImage from '../../assets/images/teacher.jpg'


export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
};

interface TeacherItemProps {
  teacher?: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  /* function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }
 */
  return (
  <Container>
    <Header>
      {/* <img 
        src={teacher.avatar} alt={teacher.name}/> */}
        <img 
          src={TeacherImage} 
          alt="Professor"
        />
      <div>
        <strong>Paolla Oliveira</strong>
        <span>Matemática</span>
      </div>
    </Header>

    <p>Você vai se divertir estudando matemática com uma professora muito maluquinha.</p>
    
    <Schedule>
        <div>
          <span>Dia</span>
          <strong>Segunda</strong>

          <span>Horário</span>
          <strong>8h - 18h</strong>
        </div>

        <div>
          <span>Dia</span>
          <strong>Segunda</strong>

          <span>Horário</span>
          <strong>8h - 18h</strong>
        </div>

        <div>
          <span>Dia</span>
          <strong>Segunda</strong>

          <span>Horário</span>
          <strong>8h - 18h</strong>
        </div>

        <div>
          <span>Dia</span>
          <strong>Segunda</strong>

          <span>Horário</span>
          <strong>8h - 18h</strong>
        </div>

        <div>
          <span>Dia</span>
          <strong>Segunda</strong>

          <span>Horário</span>
          <strong>8h - 18h</strong>
        </div>
    </Schedule>
    <Footer>
      <p>
        Preço/hora:
        <strong>R$ 10,00</strong>
      </p>
      <a 
        target="_blank"
        /* onClick={createNewConnection} */
        /* href={`https://wa.me/${teacher.whatsapp}`} */
      >
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </a>
    </Footer>
    </Container>
  );
}

export default TeacherItem;