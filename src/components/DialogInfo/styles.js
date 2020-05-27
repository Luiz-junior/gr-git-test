import styled from 'styled-components'

export const DialogInfoContainer = styled.div`
  height: 200px;
  border-radius: 30px 30px 0 0;
  position: fixed;
  bottom: 0;
  display: none;
  width: 100%;
  left: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;

  .text-message {
    color: #444;
    font-size: 30px;
    font-weight: 700px;
  }
`

export const CloseDialog = styled.section`
  position: relative;

  .close-dialog {
    height: 5px;
    width: 55px;
    border-radius: 5px;
    position: fixed;
    bottom: 203px;
    background: #fff;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`
export const DialogDetails = styled.div`
  display: flex;
  flex-direction: column;

  .base-stats-text {
    color: #62B957;
    padding-bottom: 10px;
  }
`

export const IncreaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75vw;
  padding: 5px 0;
  color: #333;

  .total-increase-text {
    color: #555;
    padding-left: 15px;
    text-align: right;
  }
`

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ccc;
  border-radius: 5px;
`

export const PokeBar = styled.div`
  width: ${props => props.filled}%;
  height: 5px;
  background-color: #8BBE8A;
`