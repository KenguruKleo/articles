import React from 'react';
import PropTypes from 'prop-types';
import { themr } from 'react-css-themr';
import Content from '../../components/Content';

import style from './Footer.scss';

class Footer extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
  };

  render() {
    const { theme } = this.props;
    return (
      <div className={theme.footer}>
        <Content theme={theme}>
          <div className={theme.main}>
            <div className={theme.terms}>
              <span className={theme.terms_c}>©</span>
              <span className={theme.terms_text}>KenguruKleo</span>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default themr('Footer', style)(Footer);
