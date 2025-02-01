import React, { useState, useRef, FormEvent } from 'react';
import { FormHandles } from '@unform/core'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Select from '../../components/SimpleSelect';

import { Container, FormSearchTeachers } from './styles';


interface FormData {
  suject: string;
  week_day: string;
  time: string;
}

const TeacherList: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
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

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

  }


  return (
   <Container>
      <PageHeader title="Estes são os proffys disponíveis.">
        <FormSearchTeachers ref={formRef} onSubmit={() => {}}>
        
        <Select 
          name="subject" 
          label="Matéria"
          placeholder="Selecione"
          options={[
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
          ]}
        />

        <Select 
        name="week_day" 
        label="Dia da semana"
        placeholder="Selecione"
        options={[
          { value: '0', label: 'Domingo'},
          { value: '1', label: 'Segunda-Feira'},
          { value: '2', label: 'Terça-Feira'},
          { value: '3', label: 'Quarta-Feira'},
          { value: '4', label: 'Quinta-Feira'},
          { value: '5', label: 'Sexta-Feira'},
          { value: '6', label: 'Sábado'},
        ]}
      /> 
         <Select
            name="time" 
            label="Horário"
            placeholder="Selecione"
            options={[
              { value: 0,   label: '08:00'},
              { value: 1,   label: '09:00'},
              { value: 2,   label: '10:00'},
              { value: 3,   label: '11:00'},
              { value: 4,   label: '12:00'},
              { value: 5,   label: '13:00'},
              { value: 6,   label: '14:00'},
              { value: 7,   label: '15:00'},
              { value: 8,   label: '16:00'},
              { value: 8,   label: '17:00'},
              { value: 10,  label: '18:00'},
              { value: 11,  label: '19:00'},
              { value: 12,  label: '20:00'},
            ]} 
          /> 

          <button type="submit">
            Buscar
          </button>
        </FormSearchTeachers>
      </PageHeader>

      <main>
       {/*  { teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })} */}

        <TeacherItem />

      </main>
    </Container>
  );
}

export default TeacherList;