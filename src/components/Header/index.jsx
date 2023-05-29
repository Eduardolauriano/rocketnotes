import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles"

export function Header(){

  return(
    <Container>
      <Profile>
        <img src="https://github.com/eduardolauriano.png" alt="" />
        <div>
        <span>Bem vindo,</span>
        <strong>Eduardo Lauriano</strong>
        </div>        
      </Profile>

    <Logout>
      <RiShutDownLine />
    </Logout>

    </Container>
  )
}