import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, ChallengeNotActive, ChallengeActive, SuccessButton, StopButton } from './styles';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceded(){
    completeChallenge();
    resetCountdown();
  }
  
  function handleChallengeFailed(){
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
      {
        activeChallenge ? (
          <ChallengeActive>
            <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt="Desafio"/>
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <StopButton 
                type="button"
                onClick={handleChallengeFailed}
              >
                Falhei
              </StopButton>
              <SuccessButton 
                type="button"
                onClick={handleChallengeSucceded}
              >
                Completei
              </SuccessButton>
            </footer>
          </ChallengeActive>
        ):(
          <ChallengeNotActive>
            <strong>Finalize o ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up"/>
              Avance de level completando desafios.
            </p>
          </ChallengeNotActive>
        )
      }
    </Container>
  );
}

export default ChallengeBox;