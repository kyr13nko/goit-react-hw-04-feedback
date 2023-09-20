import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  cursor: pointer;

  background-color: transparent;

  border: none;
  outline: none;

  box-shadow: 2px -2px 0px 2px rgba(84, 76, 122, 1),
    -2px 2px 0px 2px rgba(57, 95, 58, 1);

  padding: 4px 16px;

  &:first-letter {
    text-transform: uppercase;
  }

  &:hover {
    background-color: rgba(128, 128, 128, 0.1);
  }
`;
