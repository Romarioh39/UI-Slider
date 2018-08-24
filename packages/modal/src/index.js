import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, Content, HeaderContainer, BodyContainer, FooterContainer, AllBtnContainer, SectionContainer } from './styles'

const { bool, func } = PropTypes

class ModalEntry extends Component {
  static propTypes = {
    isOpen: bool.isRequired,
    toggleModal: func,
  };
 constructor(props){
   super(props)
    this.state = {
      respectMouse: true,
    };
 }

  toggleMouse = () => {
    this.setState({ respectMouse: !this.state.respectMouse })
  }

  toggleModal = () => {
   if ( this.state.respectMouse ) {
      this.props.toggleModal();
   }
    console.log('did not toggle');
  };

  render(){
      const { isOpen } = this.props;
      if (!isOpen) return null;

    return (
      <Container onClick={this.toggleModal}>
        <Content onMouseEnter={this.toggleMouse} onMouseLeave={this.toggleMouse}>
          {this.props.children}
        </Content>      
      </Container>
    );
  }
}
export class Body extends Component {
  render() {
    return <BodyContainer>{this.props.children}</BodyContainer>
  }
}
export class Header extends Component {
  render() {
    return <HeaderContainer>{this.props.children}</HeaderContainer>
  }
}
export class Section extends Component {
  render() {
    return <SectionContainer>{this.props.children}</SectionContainer>
  }
}
export class Footer extends Component {
  render() {
    return <FooterContainer>{this.props.children}</FooterContainer>
  }
}
export class AllBtn extends Component {
  render() {
    return <AllBtnContainer onClick = {this.props.toggleModal}>{this.props.children}</AllBtnContainer>
  }
}


export default ModalEntry;
