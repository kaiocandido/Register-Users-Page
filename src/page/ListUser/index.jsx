import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { useEffect } from 'react'
import { useState } from 'react'



function ListUsers() {

    const [users, setUsers] = useState([])

    //userEffect -> Pegar usuarios

    useEffect(() => {

        async function getUsers() {
            const {data} = await api.get('/usuarios')
            console.log(data)
            
            setUsers(data)
        }

        getUsers()

    }, [])


    //array na tela 37 - linha

    //TROCA DE PAGINA 
    const naviteHome = useNavigate()

    return (
        <>
            <TopBackground />
            <h1>Listar Usuarios</h1>

            {users.map(user => (

                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                </div>

            ))}


            <Button onClick={() => naviteHome('/')}>Voltar</Button>
        </>
    )
}


export default ListUsers