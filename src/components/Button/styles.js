import styled from 'styled-components'

export const ButtonContainer = styled.button`
 display:flex;
 background:${({ theme }) => theme.colors.semiBlack};
 border-radius: 10px;
`
export const Text = styled.button`
  display:flex;
color: ${({ theme }) => theme.colors.white};
 border-radius: 10px;
`
