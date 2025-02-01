import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.boxBase};
  border: 1px solid ${({ theme }) => theme.colors.lineInWhite};
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;


  > p {
    padding: 0.2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
  }

  @media (min-width: 700px) {
    > p {
      padding: 0 3.2rem;
    } 
  }
`;

export const Schedule = styled.div`
  margin-top: 2.4rem;
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
 
  div {
    display: flex;
    flex-direction: column;
    height: 12rem;
    width: 10rem;
    margin-top: 1.2rem;
    border-radius: 0.6rem;
    background: ${({ theme }) => theme.colors.lineInWhite};
    padding: 1rem 1.2rem 2.4rem 1.2rem;
    border: 0.2rem solid ${({ theme }) => theme.colors.textBase};

    span {
      font-size: 1.25rem;
      display: block;
      margin-top: 0.4rem;
    }

    strong {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 700px) {
    
      padding: 0 3.2rem;
      display: grid;
      grid-template-columns: repeat(5, 1fr)
    
  }
`;



export const Header = styled.div`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  div {
    margin-left: 2.4rem
  }

  strong {
    font: 700 2.4rem Archivo;
    display: block;
    color: ${({ theme }) => theme.colors.textTitle};
  }

  span {
    font-size: 1.6rem;
    display: block;
    margin-top: 0.4rem;
  }

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
  

`;
export const Footer = styled.div`
  padding: 3.2rem 2rem;
  background: ${({ theme }) => theme.colors.boxFooter};
  border-top: 1px solid ${({ theme }) => theme.colors.lineInWhite};
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p strong {
    font-size: 1.6rem;
    display: block;
    color: ${({ theme }) => theme.colors.primary}
  }

  a {
    width: 20rem;
    height: 5.6rem;
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.buttonText};
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.4rem Archivo;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.2s;
    text-decoration: none;
    margin-top: 2.4rem;

    &:hover {
      background: ${({ theme }) => theme.colors.secondaryDark};
    }
  }

  @media (min-width: 700px) {
    padding: 3.2rem;
    flex-direction: row;

    p strong {
      display: initial;
      margin-left: 1.6rem;
    }

    a {
      margin-top: 0;
    }

    button {
      width: 24.5rem;
      font-size: 1.6rem;
      justify-content: center;

      img {
        margin-right: 1.6rem;
      }
    }
  }

`;