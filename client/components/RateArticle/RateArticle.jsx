import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { themr } from 'react-css-themr';
import BigStar from '../Icons/BigStar';
import Button from '../Button';

import style from './RateArticle.scss';

class RateArticle extends React.PureComponent {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    clickOnSave: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
    rate: PropTypes.number,
    comments: PropTypes.string,
  };

  static defaultProps = {
    isOpen: false,
    rate: 0,
    comments: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      rate: this.props.rate,
      dynamicRate: 0,
      comments: this.props.comments,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      rate: nextProps.rate || 0,
      dynamicRate: 0,
      comments: nextProps.comments || '',
    });
  }

  getStar = starRate => {
    const { theme } = this.props;
    const { rate, dynamicRate } = this.state;

    const handleStarClick = () => {
      this.setState({
        rate: starRate,
      });
    };

    const handleMouseOver = () => this.setState({ dynamicRate: starRate });

    const maRate = rate > dynamicRate ? rate : dynamicRate;
    return (
      <span
        onMouseOver={handleMouseOver}
        onFocus={handleMouseOver}
        onClick={handleStarClick}
        onKeyDown={handleStarClick}
        className={maRate > (starRate - 1) ? theme.filled : theme.empty}>
        <BigStar theme={theme} />
      </span>
    );
  };

  getRate = () => {
    const { theme } = this.props;

    return (
      <div className={theme.rate}>
        {this.getStar(1)}
        {this.getStar(2)}
        {this.getStar(3)}
        {this.getStar(4)}
      </div>
    );
  };

  handleCommentsChange = e => {
    this.setState({
      comments: e.target.value,
    });
  };

  handleClickSave = () => {
    this.props.clickOnSave({
      rate: this.state.rate,
      comments: this.state.comments,
    });
  };

  render() {
    const { theme, onRequestClose, isOpen } = this.props;

    return (
      <ReactModal
        isOpen={isOpen}
        overlayClassName={theme.modal_overlay}
        bodyOpenClassName={theme.body_modal_open}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
        className={theme.modal_inner}>
        <div className={theme.rate_article}>
          <div className={theme.title}>
            <span>Rate article</span>
          </div>
          <div className={theme.content}>
            <div className={theme.message}>
              Help us improve our product
            </div>
            {
              this.getRate()
            }
            <div className={theme.comments}>
              <textarea
                onChange={this.handleCommentsChange}
                value={this.state.comments}
                placeholder='Write a comment… (optional)' />
            </div>
            <div className={theme.buttons}>
              <span className={theme.button_cancel}>
                <Button
                  onClick={onRequestClose}
                  theme={theme}>
                  Cancel
                </Button>
              </span>
              <span className={theme.button_save}>
                <Button
                  onClick={this.handleClickSave}
                  theme={theme}>
                  Save
                </Button>
              </span>
            </div>
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default themr('RateArticle', style)(RateArticle);
