import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: var(--background);
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0,0,0,0.05);
  text-align: center;
  position: relative;

  > header{
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--green);
    background: url("/icons/levelup.svg") no-repeat center;
    background-size: contain;
    margin-bottom: 2rem;
  }

  > strong{
    font-size: 2rem;
    color: var(--title);
  }

  > p{
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 1.25rem;
  }

  > button{
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0px;
  }
`;