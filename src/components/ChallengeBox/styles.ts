import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: var(--white);
  border-radius: 4px;
  box-shadow: 0 0 60px rgba(0,0,0,0.05);
  padding: 1.5rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > strong{
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 4rem;
  }
  
  > p{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 70%;
    font-size: 1rem;
    color: var(--text);
    > img{
      margin-bottom: 1rem;
    }
  }
`;

export const ChallengeActive = styled.div`
  height: 100%; 
  display: flex;
  flex-direction: column;

  > header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
  }
  > main{
    flex: 1;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > strong{
      font-weight: 600;
      font-size: 1.5rem;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }

    > p{
      line-height: 1.5;
    }
  }

  > footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const SuccessButton = styled.button`
  height: 50px;
  font-weight: 500;
  border: 0;
  border-radius: 5px;

  color: var(--white);
  background: var(--green);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: filter 0.3s;

  :hover{
    filter: brightness(0.9);
  }

`;
export const StopButton = styled.button`
  height: 50px;
  border: 0;
  font-weight: 500;
  border-radius: 5px;

  color: var(--white);
  background: var(--red);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover{
    filter: brightness(0.9);
  }
`;
