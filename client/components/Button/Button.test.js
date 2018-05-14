import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('Should render itself', () => {
    const wrapper = shallow((
      <Button>
        <span>Test button</span>
      </Button>
    ));
    expect(wrapper.find('Button').length).toBe(1);
  });

  it('Should render children inside', () => {
    const wrapper = shallow((
      <Button>
        <span>Test button</span>
      </Button>
    ));
    expect(wrapper
      .find('Button')
      .find('span')
      .text()).toBe('Test button');
  });

  it('Should call callback on click', () => {
    const mockOnClick = jest.fn();
    const wrapper = mount((
      <Button onClick={mockOnClick}>
        <span>Test button</span>
      </Button>
    ));
    wrapper.find('Button').simulate('click');
    expect(mockOnClick).toBeCalled();
  });

  it('Should not call callback on click for disabled', () => {
    const mockOnClick = jest.fn();
    const wrapper = mount((
      <Button disable onClick={mockOnClick}>
        <span>Test button</span>
      </Button>
    ));
    wrapper.find('Button').simulate('click');
    expect(mockOnClick).not.toBeCalled();
  });
});
