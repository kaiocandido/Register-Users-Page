import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { useEffect } from 'react'
import { useState } from 'react'
import Title from '../../components/Title'
import { TrashIcon, Container, ContainerUsers, CardUsers, AvatarUser } from './style'
import trash from '../../assets/trash.svg'

function ListUsers() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        // Function to fetch users from the API
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])

     // Function to delete a user by id
    async function deleteUsers(id) {
        await api.delete(`./usuarios/${id}`)
        const updatedUsers = users.filter(user => user.id !== id)
        setUsers(updatedUsers)
    }

    // Hook to navigate to different routes
    const naviteHome = useNavigate()
    return (
        <Container>
            <TopBackground />
            <Title>Listar Usuarios</Title>
            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                            <p>{user.age}</p>
                        </div>
                        <TrashIcon src={trash} alt='lixo' onClick={() => deleteUsers(user.id)} />
                    </CardUsers>
                ))}
            </ContainerUsers>
            <Button onClick={() => naviteHome('/')}>Voltar</Button>
        </Container>
    )
}


export default ListUsers