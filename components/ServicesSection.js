import react from 'react'
import styled from 'styled-components'


const ServicesSection = () => ( 

  <Section>
    <Description>Stuff that I do </Description>
    <BriefSection> 
      <ListHouse/>
      <ListHouse/>
    </BriefSection>
  </Section>

)

export default ServicesSection


const Section = styled.div`
    height: 30rem;
    background-color: green;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const Description = styled.h1`
    height: 7rem;
    width: 90%;
    background-color: blue;
    margin-top: 2rem;
   
`

const BriefSection = styled.div`
    height: 18rem;
    width: 90%;
    display: flex;
    background-color: yellow; 
    align-items: center;
    justify-content: space-evenly;
`

const ListHouse = styled.ul`
    height: 90%;
    width: 40%;
    background-color: purple;
 
`