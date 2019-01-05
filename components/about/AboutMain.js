import react from 'react';
import styled from 'styled-components';


const AboutMe = () =>  (
  <Section>
    <Photo />

  </Section>
)

export default AboutMe 


const Section = styled.div`
    height: 70rem;
    width: 100%;
    background-color: red;
    display: flex;
`

const Photo = styled.div`
    height: 22rem;
    width: 18rem;
    border-radius: 40px;
    background-color: white;
    margin-top: 3rem;
    margin-left: 5rem;
`