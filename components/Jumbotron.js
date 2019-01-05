import react from 'react'
import styled from 'styled-components'


const Jumbotron = (props)=> {
  console.log(props)


 return  (<Jumbo>
 
  <Title>Coning Bonds</Title>
  <Button> To Be Contacted </Button>
 </Jumbo>)

}

export default Jumbotron


const Jumbo = styled.div`
  height: 30rem;
  width: 100%;
  background-color: red; 
  color: white; 
  align-items: center;
  justify-content: center; 
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
    color: #fff;
    width:20rem;
    text-align: center; 
    font-size: 3rem;
`

const Button = styled.button`
      width: 10rem;
      background-color: #aaaa
`
     

    
