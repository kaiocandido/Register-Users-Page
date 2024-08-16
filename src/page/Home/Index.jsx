import { Title, Container, TopBackground, Form, ContainerInputs, Input, Button, InputLabel } from './style'
import UsersImage from '../../assets/users.png'


function Home() {


  return (
    <>
      <Container>

        <TopBackground>
          <img src={UsersImage} alt='imagem usuarios'/>
        </TopBackground>

        <Form>
          <Title>Cadastar Usuário</Title>
          <ContainerInputs>
              <div>
                <InputLabel>Nome:<span>*</span></InputLabel>
                <Input type='text' placeholder='Nome do Usuário' />
              </div>

              <div>
                <InputLabel>Idade:<span>*</span></InputLabel>
                <Input type='number' placeholder='Idade do Usuário' />
              </div>
          </ContainerInputs>



            <div style={{width:'100%'}}>
              <InputLabel>E-mail:<span>*</span></InputLabel>
              <Input type='e-mail' placeholder='E-mail do Usuário' />
            </div>


          <Button>Cadastrar usuário</Button>

        </Form>


      </Container>
    </>
  )
}

export default Home
