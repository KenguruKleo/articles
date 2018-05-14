import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Content from '../../components/Content';
import TextError from '../../components/TextError';
import InputField from '../InputField';

import style from './Login.scss';

class Login extends React.PureComponent {
  static propTypes = {
    clickLogin: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    errorText: PropTypes.string,
    valid: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    errorText: '',
  };

  render() {
    const {
      theme, clickLogin, errorText, valid,
    } = this.props;
    return (
      <div className={theme.login}>
        <Content theme={theme}>
          <h4 className={theme.topic}>Login</h4>
          <InputField
            Component={TextInput}
            path='login'
            fieldName='userName'
            label='Email'
            theme={theme} />
          <InputField
            Component={TextInput}
            path='login'
            fieldName='password'
            label='Password'
            type='password'
            theme={theme} />
          <TextError>
            {errorText}
          </TextError>
          <hr />
          <Button
            onClick={clickLogin}
            disable={!valid}
            theme={theme}>
            Login
          </Button>
        </Content>
      </div>
    );
  }
}

export default themr('Login', style)(Login);
