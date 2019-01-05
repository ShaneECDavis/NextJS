import Link from 'next/link'
import styled from 'styled-components'

const Navbar = ()=> (

  <Nav>
    <ul>
      <li><Link href="/"><button>Home</button></Link></li>
      <li><Link href="/about"><button>About</button></Link></li>
    </ul>
   
  </Nav>
)

export default Navbar


const Nav = styled.div`
   ul{
        background: #bbb;
        color: #2f2f;
        list-style: none;
        display: flex;
   }

      ul li {
        background: #2f2f;
        font-size: 18px;
        margin-right: 20px;
      }
      ul li a {
        color: #2f2f;
        text-decoration: none;
      }
      
   
`