import styled from "styled-components";

const FormButton = styled.button`
padding: 10px 20px;
background-color: white;
color: #333;
cursor: pointer;
transition: background-color 0.3s ease-in-out;

&:hover {
  background-color: blue;
  color: white;
}
`;

export default FormButton;
