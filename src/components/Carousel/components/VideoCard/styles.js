import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin: 20px auto;
  padding: 20px;
  transition: transform .8s;
  &:hover,
  &:focus {
    transform: scale(1.08); 
 }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
