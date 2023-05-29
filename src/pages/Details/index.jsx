import { Container, Links } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details () {
  return (
    <Container>
      <Header/>

      <ButtonText title="Excluir Nota"/>

      <Section title="Links úteis">
        <Links>
          <li> <a href="#">http://github.com.br/eduardolauriano</a> </li>
          <li> <a href="#">http://github.com.br/eduardolauriano</a> </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="Express"/>
        <Tag title="ReactJS"/>
      </Section>

      <Button title="Voltar"/>
    </Container>
    
  )
}