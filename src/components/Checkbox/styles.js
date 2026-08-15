import styled from "styled-components";

export const CheckboxStyle = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 50%;
  margin-bottom: 10px;
  > input {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    accent-color: ${props => props.theme.colors.accentPink};
    cursor: pointer;
  }
  > label {
    color: ${props => props.theme.colors.mainBlue};
    cursor: pointer;
  }
`;
