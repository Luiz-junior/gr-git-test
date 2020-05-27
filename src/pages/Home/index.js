import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemon, getPokemonDetails, getDetailsInfo } from '../../store/action/pokemonAction';
import PokeCard from '../../components/PokeCard';
import DialogInfo from '../../components/DialogInfo';
import Pagination from '../../components/Pagination';
import { ListContainer, SectionSearch, SectionListPokemon } from './styles'

function Home() {
  const dispatch = useDispatch();

  const [maxHeight, setMaxHeight] = useState(0)
  const [opacity, setOpacity] = useState(0)
  const [display, setDisplay] = useState('none')
  const [inputPoke, setInputPoke] = useState('')
  const [pokeSelect, setPokeSelect] = useState('')
  const [pokeId, setPokeId] = useState(0)

  const { pokemon, pokeDetails, pokeImageId, offset, loading } = useSelector(state => ({
    pokemon: state.pokemonReducer.pokemon,
    pokeDetails: state.pokemonReducer.pokemonDetails,
    pokeImageId: state.pokemonReducer.pokeImageId,
    offset: state.pokemonReducer.offset,
    loading: state.pokemonReducer.loading,
  }));

  useEffect(() => {
    dispatch(getPokemon(offset));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, offset]);

  useEffect(() => { pokeImageId.sort((a, b) => a - b) });

  useEffect(() => {
    if (pokemon.length > 0) {
      let pokeDetails = [];
      let idImage = [];

      if (pokeSelect < 1)
        pokemon.map(poke => { dispatch(getPokemonDetails(poke.url, idImage, pokeDetails)) })
      else
        pokeSelect.map(poke => { dispatch(getPokemonDetails(poke.url, idImage, pokeDetails)) })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon, pokeSelect]);

  const getHability = (detail, idPoke) => {
    let pokeDetails = detail.filter(d => d.id === idPoke);
    dispatch(getDetailsInfo(pokeDetails));
  }

  const onOpenDialog = (pokeId) => {
    setMaxHeight(200)
    setOpacity(1)
    setDisplay('block')

    setPokeId(pokeId)
  }

  const onCloseDialog = () => {
    setMaxHeight(0)
    setOpacity(0)
    setDisplay('none')
  }

  const onSearchPoke = (pokeName) => {
    setInputPoke(pokeName)

    let poke = pokemon.filter((poke) => poke.name == pokeName)
    setPokeSelect(poke)
  }

  if (loading)
    return <h4 className="loading">Carregando...</h4>;

  return (
    <ListContainer className="container" display={display}>
      <SectionSearch>
        <h1>Pokédex</h1>
        <p>Search for Pokémon by name or using the National Pokédex number.</p>
        <input
          type="text"
          placeholder="What Pokémon are you looking for?"
          className="searchPokemon"
          value={inputPoke}
          onChange={(e) => onSearchPoke(e.target.value)}
        />
      </SectionSearch>

      <SectionListPokemon>
        {pokeSelect.length < 1
          ? pokemon.map((poke, i) => (
            <PokeCard
              key={i}
              poke={poke}
              pokeId={pokeImageId[i]}
              details={pokeDetails[i]}
              index={i}
              onOpenDialog={onOpenDialog}
            />
          )
          )
          : pokeSelect.map((poke, i) => (
            <PokeCard
              key={i}
              poke={poke}
              pokeId={pokeImageId[i]}
              details={pokeDetails[i]}
              index={i}
              onOpenDialog={onOpenDialog}
            />
          ))
        }
      </SectionListPokemon>
      <Pagination />
      <DialogInfo
        pokeDetails={pokeDetails.filter(poke => poke.id === pokeId)}
        transition='max-height .2s ease-in-out'
        maxHeight={maxHeight}
        opacity={opacity}
        onCloseDialog={onCloseDialog}
      />
    </ListContainer>
  );
}

export default Home;

