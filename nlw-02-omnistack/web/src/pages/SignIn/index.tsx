import React, { 
  useCallback,
  useRef, 
  useState 
} from 'react';

import { FormHandles } from '@unform/core';

import  { ProffyLogo }  from '../../assets/images';
import { PurpleHeartIcon } from '../../assets/images/icons'

import { Container, Content, Info, Form, OptionsBlock, Footer } from './styles';

import InputForm from '../../components/InputForm';
import Button from '../../components/Button';

import Checkbox from '../../components/CheckBox';
import { Link } from 'react-router-dom';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const [ loading, setLoading ] = useState(false);
    const [ submitAvailable, setSubmitAvailable ] = useState(false);

    

    const handleInputOnChange = useCallback(() => {
      const data = formRef.current?.getData() as SignInFormData;

      if (data?.email && data?.password) {
        setSubmitAvailable(true);
        return;
      }

      setSubmitAvailable(false);
    }, []);

    
    return (
       <Container>
         <Info>
           <div>
              <ProffyLogo />
              <h2>
                Sua plataforma de <br /> 
                estudos online.
              </h2>
           </div>
         </Info>

         <Content>
           <Form ref={formRef} onSubmit={() => {}}>
             <h1>Fazer Login</h1>

             <InputForm
              name="email"
              placeholder="E-mail"
              type="email"
              autoFocus
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

             <OptionsBlock>
                <Checkbox
                  name="remember"
                  disabled={loading}
                />

                <a href="/forgotpassword">Esqueci minha senha</a>
             </OptionsBlock>

            <Button
              isLoading={loading}
              disabled={loading || !submitAvailable}
              type="submit"
            >
              Entrar
            </Button>
           </Form>

           <Footer>
              <span>
                Não tem conta? <br />
                <Link to="/signup">Cadastre-se</Link>
              </span>

              <small>
                É de graça <PurpleHeartIcon/>
              </small>
           </Footer>
         </Content>
       </Container> 
    );
}

export default SignIn;