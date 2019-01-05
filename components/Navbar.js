import Link from 'next/link'
import styled from 'styled-components'

const Navbar = ()=> (

  <Nav>
    <ul>
      <li><Link href="/"><Button>Home</Button></Link></li>
      <li><Link href="/about"><Button>About</Button></Link></li>
    </ul>
  </Nav>
)

export default Navbar


const Nav = styled.div`
   
   ul{
        background: #bbb;
        margin: 0; 
        color: #2f2f;
        list-style: none;
        height: 2rem;
        display: flex;
        justify-content: flex-end;
      
   }

      ul li {
        background: #2f2f;
        font-size: 1.8rem;
        margin-right: 2rem;
        padding: 0;
        display: flex;
        align-items: center;
      }
     
      
`
const Button = styled.button`
      background-color: #fff;
`