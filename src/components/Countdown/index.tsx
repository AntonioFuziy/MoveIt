import React, { useContext, useEffect, useState } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, StartButton, StopButton, ArrowIcon, Clock } from './styles';

const Countdown: React.FC = () => {
  
  const { minutes, seconds, isActive, hasFinished, resetCountdown, startCountdown } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <Container>
      <Clock>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Clock>

      {
        hasFinished ? (
          <StartButton
            disabled
          >
            Ciclo encerrado
          </StartButton>
        ) : (
          <>
            { isActive ? (
              <StopButton
                type="button"
                onClick={resetCountdown}
              >
                {
                  isActive ? "Abandonar ciclo" : "Iniciar um ciclo"
                }
              </StopButton>) : (
              <StartButton
                type="button"
                onClick={startCountdown}
              >
                {
                  isActive ? "Abandonar ciclo" : "Iniciar um ciclo"
                }
              </StartButton>
            )
            }
          </>
        )
      }
    </Container>
  );
}

export default Countdown;