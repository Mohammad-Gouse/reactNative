import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


const Page = styled.div`

`;

const PageDetailHeader = styled.div`
height: 30px;
color: #354148;
font-family: Montserrat;
font-size: 24px;
font-weight: 500;
line-height: 30px;
display: flex;
margin-top: 50px;
display: flex;
align-items: center;
justify-content: center;
`;

const PageNumberText = styled.text`
    height: 15px;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    text-align: right;
`;

// const PageNumberUnselectedText = styled.text`
//     height: 15px;
//     color: #788F9B;
//     font-family: Montserrat;
//     font-size: 12px;
//     font-weight: 500;
//     line-height: 15px;
//     text-align: right;
//     margin-left: 10px;
//     text-decoration: none;
// `;

const PageNumberSelectedText = styled.text`
    height: 15px;
    color: green;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    text-align: right;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PageNumberContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;


const PageNumberSelectedBox = styled.div`
  background-color: rgba(0,255,0,0.1);
  width: 20px;
  height: 20px;
  display: flex;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

const PageNumberBox = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;


function App() {
  return (
    <div className="App">
      <PageNumberContainer>
        <PageNumberBox><PageNumberText><big><big>&#8249;</big></big></PageNumberText></PageNumberBox>
      </PageNumberContainer>
      <PageNumberContainer>
        <PageNumberSelectedBox><PageNumberSelectedText>1</PageNumberSelectedText></PageNumberSelectedBox>
      </PageNumberContainer>
      <PageNumberContainer>
        <PageNumberBox><PageNumberText>2</PageNumberText></PageNumberBox>
      </PageNumberContainer>
      <PageNumberContainer>
        <PageNumberBox><PageNumberText>3</PageNumberText></PageNumberBox>
      </PageNumberContainer>
      <PageNumberContainer>
        <PageNumberBox><PageNumberText>&#8230;</PageNumberText></PageNumberBox>
      </PageNumberContainer>

      <PageNumberContainer>
        <PageNumberBox><PageNumberText>300</PageNumberText></PageNumberBox>
      </PageNumberContainer>
      <PageNumberContainer>
        <PageNumberBox><PageNumberText><big><big>&#8250;</big></big></PageNumberText></PageNumberBox>
      </PageNumberContainer>
    </div>
  );
}

export default App;
