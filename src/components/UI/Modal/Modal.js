import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Backdrop from '../../UI/Backdrop/Backdrop';

const ModalDiv = styled.div`
    box-sizing: border-box;
    position: fixed;
    z-index: 100;
    background-color: white;
    width: 85%;
    border: 1px solid #ccc;
    border-radius: 15px;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 8%;
    top: 30%;
    box-sizing: border-box;
    box-shadow: 5px 5px 15px rgba(0,0,0,.75);
    transition: opacity 0.4s ease-out, transform 0.3s ease-out;
    @media (min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px);
    }
`

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  componentWillUpdate() {
    console.log('[Modal] WillUpdate');
  }

  render() {
    return (
      <Fragment>
        <ModalDiv style={{
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0'
        }}>
          {this.props.children}
        </ModalDiv>
        <Backdrop 
          show={this.props.show}
          clicked={this.props.modalClosed} />
      </Fragment>
    )
  }
}

export default Modal;