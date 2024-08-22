
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, ContainerInputs, Input, InputLabel } from './style'
import api from '../../services/api'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import Title from '../../components/Title'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const navigate = useNavigate()

  async function registerNewUser() {
    await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })
  }

  return (
    <>
      <Container>
        <TopBackground />
        <Form>
          <Title>Cadastar Usuário</Title>
          <ContainerInputs>
            <div>
              <InputLabel>Nome:<span>*</span></InputLabel>
              <Input type='text' placeholder='Nome do Usuário' ref={inputName} />
            </div>
            <div>
              <InputLabel>Idade:<span>*</span></InputLabel>
              <Input type='number' placeholder='Idade do Usuário' ref={inputAge} />
            </div>
          </ContainerInputs>
          <div style={{ width: '100%' }}>
            <InputLabel>E-mail:<span>*</span></InputLabel>
            <Input type='email' placeholder='E-mail do Usuário' ref={inputEmail} />
          </div>
          <Button type='button' onClick={registerNewUser} thema="primary" >
            Cadastrar usuário
          </Button>
        </Form>
        <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>
          Listar Usuários
        </Button>
      </Container>
    </>
  )
}

export default Home