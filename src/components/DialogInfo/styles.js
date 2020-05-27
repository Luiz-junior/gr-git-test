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

  .section-close-dialog {
    position: relative;

    .close-dialog {
      height: 5px;
      width: 55px;
      border-radius: 5px;
      position: fixed;
      bottom: 203px;
      background: #fff;
      left: 40%;
    }
  }

  .increase-container {
    width: 100vw;
    padding: 5px 20px;
    color: #333;

    .total-increase {
      color: #555;
    }
  }
`