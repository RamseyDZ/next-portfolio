import styled from "styled-components";  
/*   background-color: ${({color})=> color} */
export const Div = styled.div`
  opacity: ${({ animatePercent }) =>
  animatePercent ? `${((animatePercent / 100) + 0.2)}` : `1`};
  transform: translateX(${({ animate, direction }) => (animate ? "0" : direction =="right"?"200vw": "-100vw")});
  transition: transform 2s;
  margin: 20px; 
  margin-top: 0vh;
  padding: 0; 
  overflow: hidden;
  color: red; 
  overflow: hidden; 
  `;
  
  export const Wrapper = styled.div`
  background-color: #171717;
  padding-top: 20px;
  margin-top: 0vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  color: #afffff; 
  overflow: hidden; 
`;
