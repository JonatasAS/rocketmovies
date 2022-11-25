import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px, auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    padding: 50px 123px;
    
    
  }
  
  .AddMovie {
    display: flex;
    
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;
`;

/* export const MyFilms = styled.div`
  width: 184px;
  display: flex;
  justify-content: space-between;
`; */

