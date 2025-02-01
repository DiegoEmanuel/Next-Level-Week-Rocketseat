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
  ProfileGroup, 
  InputGroup,
  SubmitContainer 
} from './styles';

import  ImageProfile  from '../../assets/images/euzasso.png'
import Schedule from './components/Schedule';


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

const TeacherForm: React.FC = () => {
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
      <Header backTo="/landing" title="Dar aulas" />
      <Banner>
        <div>
          <h1>Que incrível que você quer dar aulas.</h1>
          <div>
            <span>
              O primeiro passo é preencher esse formulário de inscrição.
            </span>
            <small>
              <RocketIcon />
              Prepare-se vai ser o máximo.
            </small>
          </div>
        </div>
      </Banner>

      <Form ref={formRef} onSubmit={() => {}}>
        <Block>
          <legend>Seus dados</legend>

          <Scope path="user">
            <ProfileGroup>
              <div>
                <aside>
                  <img 
                    src={ImageProfile} 
                    alt="Prifile"
                  />
                  <strong>Tiago Luchtenberg</strong>
                </aside>
                <InputWithLabel
                  name="whatsapp"
                  label="Whatsapp"
                  placeholder="(    )  _  ____  ____"
                />
              </div>
                <TextArea
                  name="bio"
                  label="Biografia"
                  message="(Máximo 300 caracteres)"
                />
            </ProfileGroup>
          </Scope>
        </Block>

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

            {
              () => {
                setNewSchedules(state => [...state, state.length]);
              }
            }

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

export default TeacherForm;