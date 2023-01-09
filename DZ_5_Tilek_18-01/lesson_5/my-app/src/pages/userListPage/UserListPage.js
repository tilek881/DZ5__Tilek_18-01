import React from 'react';
import {Table, Container, Button} from "react-bootstrap"
import {useSelector, useDispatch} from "react-redux"
import {clearUsers} from "../../redux/actions";

function UserListPage(props) {
    const {users} = useSelector(state => state.usersReducer)
    const dispatch = useDispatch()


    const clearAll = () => {
        dispatch(clearUsers())
    }


    return (
        <Container>
            <h1 className="my-5">Users list</h1>
            {users.length === 0
                ?
                <h1>Нет зарегестрированных пользователей</h1>
                :
                <>
                    <Table striped bordered hover >
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>E-Mail</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map((user,index) =>
                                <tr key = {index}>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                    <Button onClick={clearAll}>Clear table</Button>
                </>
            }

        </Container>

    );
}


export default UserListPage;