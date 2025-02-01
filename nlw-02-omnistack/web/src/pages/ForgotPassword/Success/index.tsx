import React from 'react';
import { Link } from 'react-router-dom';

import { SuccessCheckIcon } from '../../../assets/images/icons';
import { Container } from './styles';

const  Success: React.FC = () => {
    return (
        <Container>
            <SuccessCheckIcon />
            <h1>Redefinição enviada!</h1>
            <span>Boa, agora é só checar o e-mail que foi enviado para você
                redefinir sua senha e aproveitar os estudos. </span>
            <Link to="/">Voltar ao login</Link>
        </Container>
    );
};

export default Success;