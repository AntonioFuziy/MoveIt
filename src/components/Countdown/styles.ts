import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`;

export const Clock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  font-family: "Arial", sans-serif;
  color: var(--title);

  > div{
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0,0,0,0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center
  }

  > span{
    font-size: 6.25rem;
    margin: 0 0.5rem;
  };
`;


export const StartButton = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--blue);
  transition: background 0.3s;
  border: 0;
  border-radius: 5px;
  color: var(--white);
  font-size: 1.3rem;
  font-weight: 600;

  :not([disabled]):hover{
    background: var(--blue-dark);
  }
  :disabled{
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;
  }
`

export const StopButton = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--white);
  transition: background 0.3s;
  border: 0;
  border-radius: 5px;
  color: var(--title);
  font-size: 1.3rem;
  font-weight: 600;

  :not([disabled]):hover{
    background: var(--red);
    color: var(--white);
  }
`

export const ArrowIcon = styled.img``;