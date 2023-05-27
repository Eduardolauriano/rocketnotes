import styled from 'styled-components'

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

export const Profile = styled.div`
display: flex;
align-items: center;
gap: 16px;

> img {
  width: 80px;
  height: 80px;
  border-radius: 50%;

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

`