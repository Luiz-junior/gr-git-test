import styled from 'styled-components'

export const SectionHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 0px;
  padding-right: 5px;

  @media (min-width: 1030px) {
    width: 88vw;
    margin: 0 auto;
    padding-right: 0;
  }

  > img {
    height: 18px;
    width: 20px;
    padding: 8px;
  }
`