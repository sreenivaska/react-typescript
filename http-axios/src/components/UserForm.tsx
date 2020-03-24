import React from 'react';
import axios from 'axios';

interface Props {}
interface State {
    name: string;
    username: string;
    email: string;
    [x: string]: string;
}

class UserForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    
        this.state = {
            name: "",
            username: "",
            email: ""
        };
      }

      handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

      handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        alert(
          `${this.state.username} ${this.state.name} ${this.state.email}`
        );
        event.preventDefault();

        const user = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email
          };
      
          axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
              console.log(res);

              if (res.status === 201) {
                alert('User Created successfully');
              }

              console.log(res.data);



            })

      };

  render() {
    const { name, username, email } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
          <label>
            User Name:
            <input type="text" name="username" value={username}  onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={email}  onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
export default UserForm;