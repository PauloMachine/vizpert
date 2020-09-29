import styled from 'styled-components';
import Background from '../../assets/images/backgroundHeroes.gif';

export const CONTAINER = styled.div`
   background-image: url(${Background});
   flex-direction: column !important;
   background-repeat: repeat;
   height: auto !important;
   justify-content: center;
   background-size: cover;
   align-items: center;
   display: flex;
   width: 100%;
`;
