import React from 'react';

import { storiesOf } from '@storybook/react';

import Modal, { Header, Body, Footer, Section, AllBtn } from '../packages/modal/'


class TestWrapper extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false,
      fullName: '',
      email: '',
      tel: '',
      password: ''
     };
    }

    toggleModal = () => {
      this.setState({ showModal: !this.state.showModal });
    };

    submifForm = () => {
      console.log('Here I am');
    };

    summitInfo = () => {
      console.log("the state: ", this.state)
    };

    render(){
      const { showModal } = this.state;

      return(
        <div>
          <button type="button" onClick={this.toggleModal}>
            show me!
          </button>
          
          <Body>
            <Modal isOpen={showModal} toggleModal={this.toggleModal}>
              <Header>
                <p>
                  Create an account here
                </p>
                <div>
                <AllBtn toggleModal={this.toggleModal}>X</AllBtn>
                </div>
              </Header>
              <Section>
                <input type="text" placeholder="Full Name" value={this.state.fullName} onChange={(event) => { this.setState({ fullName: event.target.value }) }} />
                <input type="email" placeholder="E-mail" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} />
                <input type="tel" placeholder="Phone Number" value={this.state.tel} onChange={(event) => { this.setState ({ tel: event.target.value }) }} />
                <input type="password" placeholder="Password" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} />
              </Section>
              <Footer>
                  <AllBtn toggleModal={this.toggleModal}>Done</AllBtn>
              </Footer>
            </Modal>
          </Body>
        </div>
      )
    }
  };

  storiesOf('Simple Modal', module).add('hidden with display: none', () => <TestWrapper />);