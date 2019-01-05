import react from 'react'
import styled from 'styled-components'


const ContactSection = () => (
  <Section>
    <FormDiv>
      <FormHouse />
      <FormHouse />
    </FormDiv>

  </Section>
)


export default ContactSection


const Section = styled.div`
    height: 30rem;
    background-color: magenta;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`


const FormDiv = styled.div`
    margin: auto 0;
    height: 18rem;
    width: 90%;
    display: flex;
    background-color: yellow; 
    align-items: center;
    justify-content: space-evenly;
`

const FormHouse = styled.div`
    height: 90%;
    width: 40%;
    background-color: purple;
 
`