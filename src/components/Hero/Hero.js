import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { hero } from '../../constants/constants2';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br /> 
        Janajan Jeyabalan's <br />
        Personal Portfolio <br />
      </SectionTitle>
      <SectionText>
        Software Engineering Graduate with IoT Specialization <br /> from Ontario Tech University.
      </SectionText>
      
      <Button onClick={() => window.location = 'http://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;

