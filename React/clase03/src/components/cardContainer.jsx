import styled from "styled-components";

const CardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #fff;
border-radius: 1rem;
padding: 1.5rem;
flex-basis: calc(33.333% - 20px);
box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
transition: transform 0.2s ease-in-out;

&:hover {
    transform: translateY(-5px);
  }
`;

export default CardContainer;