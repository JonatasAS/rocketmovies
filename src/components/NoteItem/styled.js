import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_400 : theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-right: 24px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;

  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.UPPINK};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 56px;
    width: ${({ isNew }) => isNew ? `180px` : `113px`};

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
}
`;