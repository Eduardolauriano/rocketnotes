import styled from 'styled-components'
import { Link } from 'react-router-dom'

// --------- HEADER -------------
export const Container = styled.header`
  

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

`

 // -------- PROFILE ----------
export const Profile = styled(Link)`
display: flex;
align-items: center;
gap: 16px;

color: ${({theme}) => theme.COLORS.ORANGE};

> img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  filter: drop-shadow(1px 1px 10px orange);
}

> div {
  display: flex;
  flex-direction: column;
  line-height: 24px;
}

  span {
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }

  strong{
    filter: drop-shadow(1px 1px 5px orange);
  }

`

// ---------- LOGOUT ------------

export const Logout = styled.button`

border: none;
background: none;

> svg {
  color: ${({theme}) => theme.COLORS.GRAY_100};
  font-size: 36px;
  filter: drop-shadow(4px 2px 10px #002);
}
`