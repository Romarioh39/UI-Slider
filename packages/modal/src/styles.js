import styled from 'react-emotion'

export const Container = styled('div')`
`;

export const Content = styled('div')`
`;

export const BodyContainer= styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #262626;
  height: 40em;
  width: 40em;
  padding: 50px 50px;
`;

export const HeaderContainer = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: darkgray;
  padding: 20px 0px 10px 0px;
  border-radius: 6px 6px 0px 0px;
  > div {
    position: absolute;
    margin: 0px 0px 0px 17.5em;
    background-color: none;
    cursor: pointer;
  }
  > p {
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-size: 2.5em;
  }
`;

export const AllBtnContainer = styled('button')`
  padding: 15px 30px 15px 30px;
  background-color: darkgray;
  border: hidden;
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 2px #000000;
  border-radius: 6px;
`;


export const SectionContainer= styled('div')`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: steelBlue;
  > input {
  margin-top: 10px;
  text-align: center;
  letter-spacing: 6px;
  height: 3em;
  border-radius: 6px;
  }
`;

export const FooterContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-item: center;
  background-color: steelBlue;
  padding: 40px 0px 40px 0px;
  border-radius: 0px 0px 6px 6px;
`
