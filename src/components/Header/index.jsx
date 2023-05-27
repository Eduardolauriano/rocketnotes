import { Container, Profile } from "./styles";

export function Header(){

  return(
    <Container>
      <Profile>
        <img src="https://github.com/eduardolauriano.png" alt="" />
        <div>
        <span>Bem vindo,</span>
        <strong>Eduardo Laurino</strong>
        </div>        
      </Profile>
    </Container>
  )
}