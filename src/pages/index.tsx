import styled from 'styled-components'

import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;
`;

export const ProfileSection = styled.div``;

export default function Home() {
  return (
    <Container>
      <ExperienceBar/>

      <CountdownProvider>
        <Section>
          <ProfileSection>
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
          </ProfileSection>
          
          <ChallengeBox/>
        </Section>
      </CountdownProvider>
    </Container>
  )
}
