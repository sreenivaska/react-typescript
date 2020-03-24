import React from 'react';

import axios from 'axios';
import { User } from './User';

interface Props{}
interface State{
    users: User[];
}

export default class UserList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props)
    
        this.state = {
             users: []
        }
    }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ users: persons });
      })
  }

  render() {
    return (
        <table>
            <tbody>
            <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
            </tr>
            { 
                this.state.users.map(user => 
                    <tr key={user.username}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
  }
}