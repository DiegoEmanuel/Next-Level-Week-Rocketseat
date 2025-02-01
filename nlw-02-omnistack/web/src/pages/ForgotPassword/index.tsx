import React, { useCallback, useRef, useState } from 'react';
import {Link} from 'react-router-dom';


import { ProffyLogo } from '../../assets/images';
import { BackIcon } from '../../assets/images/icons'


import {Container, Content, Info, Form } from './styles';
import { FormHandles } from '@unform/core';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';

interface SignUpFormData {
  email: string;
}


const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [ loading, setLoading ] = useState(false);
  const [submitAvailable, setSubmitAvailable] = useState(false);

  const handleInputOnChange = useCallback(() => {
    const data = formRef.current?.getData() as SignUpFormData;

    if (data?.email ) {
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

            <h1>Eita, esqueceu a sua senha ?</h1>
            <span>
              Não esquenta, vamos dar um jeito nisso.
            </span>


            <InputForm
                name="email"
                placeholder="E-mail"
                type="email"
                disabled={loading}
                onChange={handleInputOnChange}
            />

            <Button
             isLoading={loading}
             disabled={loading || !submitAvailable}
             type="submit"
            >
              Enviar
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