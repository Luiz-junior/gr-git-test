import React, { useState, useEffect } from 'react'

import {
  DialogInfoContainer,
  CloseDialog,
  IncreaseContainer,
  DialogDetails,
  ProgressBar,
  PokeBar
} from './styles'

function DialogInfo({ pokeDetails, transition, maxHeight, opacity, onCloseDialog }) {

  let [pokeStats, setPokeStats] = useState([])

  useEffect(() => {
    if (pokeDetails.length > 0) {
      setPokeStats([])
      console.log('pokeDetails ', pokeDetails[0].stats.map(si => si))
      pokeDetails[0].stats.map((s, i) => {
        let { name } = s.stat
        if (name === 'hp' || name === 'attack' || name === 'defense' || name === 'speed')
          setPokeStats(oldState => [...oldState, { name: name, stat: s.base_stat }])
      })
    }
  }, [pokeDetails])

  if (pokeDetails.length < 1) return ''

  return (
    <DialogInfoContainer style={{ transition, maxHeight }}>
      <CloseDialog onClick={() => onCloseDialog()}>
        <span className="close-dialog" style={{ transition: 'opacity .2s ease-in-out', opacity }}></span>
      </CloseDialog>

      {pokeStats.length > 0 && (
        <DialogDetails>
          <strong className="base-stats-text">Base Stats</strong>
          {pokeStats.map((pk, i) => {
            return (
              <IncreaseContainer key={i} >
                <strong> {pk.name}: </strong>
                <span className="total-increase-text">{pk.stat}</span>
                <div style={{ width: '30%' }}>
                  <ProgressBar>
                    <PokeBar filled={pk.stat} />
                  </ProgressBar>
                </div>
              </IncreaseContainer>
            )
          })}
        </DialogDetails>
      )}
    </DialogInfoContainer>
  )
}

export default DialogInfo
