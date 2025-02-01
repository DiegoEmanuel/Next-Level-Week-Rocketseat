import React, { useCallback, useRef, useState } from 'react';
import {Link} from 'react-router-dom';


import { ProffyLogo } from '../../assets/images';
import { BackIcon } from '../../assets/images/icons'


import {Container, Content, Info, Form } from './styles';
import { FormHandles } from '@unform/core';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';

interface SignUpFormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}


const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [ loading, setLoading ] = useState(false);
  const [ showSuccess, setShowSuccess] = useState(false);
  const [submitAvailable, setSubmitAvailable] = useState(false);

  const handleInputOnChange = useCallback(() => {
    const data = formRef.current?.getData() as SignUpFormData;

    if (data?.first_name && data?.last_name && data?.email && data?.password) {
      setSubmitAvailable(true);
      return;
    }

    setSubmitAvailable(false);
  }, []);


    return (
        <Container>
          <Content>
            <Form 
              ref={formRef} 
              onSubmit={() => {}}
              >

            <Link to="/">
              <BackIcon/>
            </Link>

            <h1>Cadastro</h1>
            <span>
              Preencha os dados abaixo 
              <br /> para começar.
            </span>

            <InputForm
                name="first_name"
                placeholder="Nome"
                autoFocus
                disabled={loading}
                onChange={handleInputOnChange}
            />

            <InputForm
                name="last_name"
                placeholder="Sobrenome"
                disabled={loading}
                onChange={handleInputOnChange}
            /> 

            <InputForm
                name="email"
                placeholder="E-mail"
                type="email"
                disabled={loading}
                onChange={handleInputOnChange}
            />

            <InputForm
                name="password"
                placeholder="Senha"
                type="password"
                disabled={loading}
                onChange={handleInputOnChange}
            />


            <Button
             isLoading={loading}
             disabled={loading || !submitAvailable}
             type="submit"
            >
              Concluir cadastro
            </Button>
          </Form>
        </Content>
        
        <Info>
          <div>
            <ProffyLogo/>
            <h2>
              Sua plataforma de <br />
              estudos online.
            </h2>
          </div>
        </Info>
      </Container>
    );
}

export default SignUp;