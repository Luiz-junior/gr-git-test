import styled from 'styled-components'

export const PokeCardContainer = styled.div`
  margin: 10px;
  color: #fff;
  box-shadow: 0px 0px 10px #c3c3c3;
  transition: ease-in-out 0.7s;
  width: 100%;
  height: 100px;
  perspective: 1000px;
  background: #8BBE8A;
  border-radius: 10px;

  @media (min-width: 425px) {
    width: 280px;
  }

  &:hover {
    /* background: #ffcb05;
    box-shadow: 0px 0px 22px #ffcb05; */
  }

  .card-info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > strong {
      font-family: 'SF Pro Display';
      font-weight: bold;
      font-size: 22px;
      line-height: 31px;
      color: #FFFFFF;
    }

    .poke-id {
      font-family: 'SF Pro Display';
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      color: rgba(23, 23, 27, 0.6);
    }

    .type-name {
      font-family: 'SF Pro Display';
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      padding-right: 5px;
    }
  }

  .card-content {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    padding-top: 15px;

    border-radius: 15px 15px 5px 5px;
    height: 30%;
    width: 100%;
    position: relative;
    top: 41%;
    background-repeat: no-repeat;

    > img {
      height: 100px;
      position: absolute;
      top: -15px;
    }

    .pokeballBackground {
      position: absolute;
      right: 0;
      top: 0;
    }

    .details {
      @media (min-width: 768px) {
      }
    }
  }

  .btn-collapsible {
    border-radius: 5px;
    border: none;
    background: transparent;
    color: #fff;
    padding: 10px 0px;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-top: 1px solid #6e408d;
    transition: ease-in-out 0.5s;

    position: absolute;
    width: 100%;
    top: 90%;
    left: 0;

    &:hover {
      border-top: 1px solid #fff;
    }
  }

  .starships-content {
    display: none;
    overflow: hidden;
  }

  .poke-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;

    .poke-card-front{
      display: flex;
    }

  }
`