import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 40px;
  border-radius: 10px;
  padding: 19px 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;