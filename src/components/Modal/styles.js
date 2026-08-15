import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 90%;
  max-height: 600px;
  overflow-y: scroll;
  z-index: 1010;
  background-color: #2e2e2e;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: Prompt, sans-serif;
  > div:nth-child(1) {
    display: flex;
    justify-content: right;
    align-items: flex-start;
    > svg {
      color: ${props => props.theme.colors.accentPink};
      font-size: 35px;
      cursor: pointer;
    }
  }
  > div:nth-child(2) {
    > p {
      font-weight: 800;
      font-size: 24px;
      color: ${props => props.theme.colors.mainBlue};
    }
  }

  > div:nth-child(3) {
    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;
  }
`;
export const ModalOverlay = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a0a0a;
  backdrop-filter: blur(8px);
  opacity: 90%;
`;
export const ModalButton1 = styled.button`
  background-color: ${props => props.theme.colors.accentRed};
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  width: 80px;
  max-width: 100%;
  font-family: Prompt, sans-serif;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #d11500;
  }
`;
export const ModalButton2 = styled(ModalButton1)`
  background-color: ${props => props.theme.colors.accentPink};
  width: 90%;
  &:hover {
    background-color: ${props => props.theme.colors.accentPurple};
  }
`;
export const ModalDismissButton1 = styled(ModalButton1)`
  width: 100%;
  background-color: #6e00a1;
  &:hover {
    background-color: #8400c2;
  }
`;
export const ButtonDiv = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-evenly;
`;

export const GreenSpan = styled.span`
  color: #00de53;
`;
