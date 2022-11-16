import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 123px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  
  
  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 9px;
    line-height: 24px;

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
        color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }  
`;
