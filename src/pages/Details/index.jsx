import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details () {
  return (
    <Container>
      <Header/>
      <main>
        <Content>
      <ButtonText title="Excluir Nota"/>

      <h1>Introdução ao React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, recusandae! Rerum, asperiores neque! Quos velit asperiores molestiae facilis provident dolorum amet possimus. Tempora quisquam aliquam dolorum quae ipsa voluptate perferendis!</p>

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
      </Content>
      </main>

    </Container>
    
  )
}