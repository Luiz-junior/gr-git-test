import React from 'react';
import { useSelector } from 'react-redux';

import { PokeCardContainer } from './styles'
import PokeInfo from '../PokeInfo';
import pokeballImg from '../../assets/img/Pokeball.svg'

function PokeCard({ poke, pokeId, onOpenDialog, index, details }) {

  const { pokemonDetails, loading } = useSelector(state => ({
    pokemonDetails: state.pokemonReducer.pokemonDetails,
    loading: state.pokemonReducer.loading,
  }));

  if (loading)
    return 'Carregando...';

  return (
    <PokeCardContainer
      key={index}
      id={`poke-card-${index}`}
      onClick={() => onOpenDialog(pokeId)}
    >
      {/* {console.log('detailsInfo: ', details && details.types.sort((a, b) => a - b))} */}


      <div className="poke-card-inner" id={`poke-card-inner${index}`}>
        <div className="poke-card-front">
          <div className="card-info">
            <span className="pokeId">#00{pokeId}</span>
            <strong>{poke.name}</strong>
            <div className="types">
              {/* <span>{details && details.types[0].type.name}</span> */}
              {details && details.types.map((t, i) => {
                return <span key={i}>{t.type.name}</span>
              })}
            </div>
          </div>
          <div className="card-content">
            <img src={pokeballImg} alt="Pokeball" className="pokeballBackground" />
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokeId}.png`} id={`img-poke-${index}`} alt="" />
          </div>
        </div>
      </div>
    </PokeCardContainer>
  )
}

export default PokeCard;