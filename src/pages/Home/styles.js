import styled from 'styled-components'

export const ListContainer = styled.div`
  &&::after {
      content: "";
      height: 100vh;
      width: 100vw; 
      background: rgba(0, 0, 0, 0.4);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: ${props => props.display};
    }
`

export const SectionListPokemon = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  padding: 20px 0px;
`
export const SectionSearch = styled.section`
  padding: 0px 20px;
  
  @media (min-width: 1030px) {
    width: 86vw;
    margin: 0 auto;
    padding: 0;
  }
`

export const Title = styled.h1`  
  font-family: 'SF Pro Display';
  font-weight: bold;
  font-size: 32px;
  color: #17171B;
  margin: 0;
`

export const Description = styled.p`  
  font-family: 'SF Pro Display';
  font-size: 16px;
  line-height: 19px;
  color: #747476;
`

export const InputSearchPokemon = styled.input`
  background: #F2F2F2;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  padding-left: 10px;
  border: none;
  outline: none;

  font-family: 'SF Pro Display';
  font-size: 14px;
  line-height: 19px;
  color: #747476;
`

export const Loading = styled.h4`
  color: #aaa;
  text-align: center;
`