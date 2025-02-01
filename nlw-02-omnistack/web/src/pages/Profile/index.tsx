import React, { useState, useRef, useCallback } from 'react';
import { Scope, FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import { RocketIcon, WarningIcon } from '../../assets/images/icons';

import Header from '../../components/Header';
import InputWithLabel from '../../components/InputWithLabel';
import Button from '../../components/Button';
import TextArea from '../../components/Textarea';
import Select from '../../components/SimpleSelect';

import { 
  Container, 
  Banner, 
  Form, 
  Block, 
  InputGroup,
  SubmitContainer 
} from './styles';

import  ImageProfile  from '../../assets/images/euzasso.png'
import Schedule from './components/Schedule';
import { Input } from '../../components/InputWithLabel/styles';


interface FormData {
  user: {
    bio: string;
    whatsapp: string;
  };
  subject: string;
  cost: number;
  schedule: Array<{
    id: string;
    week_day: number;
    from: number;

    to: number;
  }>;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [newSchedules, setNewSchedules] = useState<number[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [subjectOptions, setSubjectOptions] = useState([
    { value: 'Artes', label: 'Artes'},
    { value: 'Biologia', label: 'Biologia'},
    { value: 'Espanhol', label: 'Espanhol'},
    { value: 'Filosofia', label: 'Filosofia'},
    { value: 'Física', label: 'Física'},
    { value: 'Geografia', label: 'Geografia'},
    { value: 'História', label: 'História'},
    { value: 'Inglês', label: 'Inglês'},
    { value: 'Literatura', label: 'Literatura'},
    { value: 'Matemática', label: 'Matemática'},
    { value: 'Português', label: 'Português'},
    { value: 'Química', label: 'Química'},
    { value: 'Redação', label: 'Redação'},
    { value: 'Sociologia', label: 'Sociologia'},
  ]);

  const { push } = useHistory();

  const handleRemoveSchedule = useCallback((index: number) => {
    setNewSchedules(state => state.filter(value => value !== index));
  }, []); 


  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: ''}
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value};
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }


  
  return (

    <Container>
      <Header backTo="/landing" title="Meu Perfil" />
      <Banner>
        <img 
          src={ImageProfile}
          alt="Profile"
        />
        <h1>Tiago Luchtenberg</h1>
        <span>Geografia</span>  
      </Banner>

      <Form ref={formRef} onSubmit={() => {}}>
        <Block>
          <legend>Seus dados</legend>

            <InputGroup>
              <InputWithLabel label="Nome" name="first_name" />
              <InputWithLabel label="Sobrenome" name="last_name" /> 
            </InputGroup>

            <InputGroup>
              <InputWithLabel label="E-mail" name="email" type="email" />
              <InputWithLabel 
                label="Whatsapp" 
                name="whatsapp"
                placeholder="(  ) _ ____ ____" 
              /> 
            </InputGroup>

            <TextArea
                  name="bio"
                  label="Biografia"
                  message="(Máximo 300 caracteres)"
                />

        </Block>

        <Scope path="class">
          <Block>
            <legend>Sobre a aula</legend>
            <InputGroup>
              <Select
                name="subject"
                label="Matéria"
                placeholder="Selecione qual você quer ensinar"
                options={subjectOptions}
                noOptionsMessage={() => 'Nenhuma opção disponível'}
                // onChange={handleSubjectSelectChange}
              />
              <InputWithLabel
                type="number"
                label="Custo da sua hora por aula"
                name="cost"
              />
            </InputGroup>
          </Block>
        </Scope>

        <Block>
          <legend>
            Horários disponíveis
            <button 
              onClick={() => {
                setNewSchedules(state => [...state, state.length]);
              }}
              type="button" 
            >
              + Novo horário
            </button>
          </legend>

            

          { newSchedules.map(value => (
            <Scope key={value+1} path={`schedule[${value+1}]`}>
              <Schedule removeSchedule={() => handleRemoveSchedule(value)}/>
            </Scope>
          ))}          
        </Block>
      </Form>
      <SubmitContainer>
        <div>
          <WarningIcon />
          <p>
            Important
            <span>Preencha todos os dados corretamente.</span>
          </p>
        </div>
        <Button onClick={() => formRef.current?.submitForm()}>
          Salvar cadastro
        </Button>
      </SubmitContainer>
    </Container>
  );
}

export default Profile;