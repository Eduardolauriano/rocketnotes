import { Container } from './styles'

export function Input ({icon, ...rest}) {
  return(
    <Container>

      <input {...rest} />

    </Container>
  )
}