import {FiPlus } from 'react-icons/fi'
import {FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote} from './styles'
import { Link} from 'react-router-dom'

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import {Section} from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Home() {
  return(
    <Container>
      
    <Brand>
    <h1>Rocketnotes</h1>
    </Brand>

    <Header/>

    <Menu>
    <li><ButtonText title='Todos'/></li>
    <li><ButtonText title='Frontend'/></li>
    <li><ButtonText title='Node'/></li>
    <li><ButtonText title='React'/></li>  
    </Menu>

    <Search>
      
      <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
    </Search>

    <Content>
      <Section title="Minhas Notas">
        <Note data={{
          title: 'React',
          tags: [
            {id: '1', name: 'React'},
            {id: '2', name: 'Rocketseat'}
          ]
        }}
        />
      </Section>
    </Content>

    <NewNote to="/new">
    <FiPlus/>
    Criar Notas
    </NewNote>

    </Container>
  )
}