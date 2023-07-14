import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 20rem;

    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border-radius: 6px;
        gap: 4rem;
        background: ${(props) => props.theme.purpleLight};
        color: ${(props) => props.theme.purpleDark};

        svg {
          color: ${(props) => props.theme.purple};
        }
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

        border-radius: 6px;
        background: ${(props) => props.theme.yellowLight};

        svg {
          color: ${(props) => props.theme.yellowDark};
        }
      }
    }
  }
`
