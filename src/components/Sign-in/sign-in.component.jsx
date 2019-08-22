import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>If you have an account you can sign-in</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            label='Email'
            required
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            name='password'
            type='password'
            label='Password'
            required
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <CustomButton type='submit'>Sign in</CustomButton>
        </form>

      </div>
    )
  }
}

export default SignIn;