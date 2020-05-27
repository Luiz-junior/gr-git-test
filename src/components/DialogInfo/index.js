import React, { useState, useEffect } from 'react'

import {
  DialogInfoContainer,
  CloseDialog,
  IncreaseContainer,
  DialogDetails,
  ProgressBar,
  PokeBar
} from './styles'
import axios from 'axios'

function DialogInfo({ pokeDetails, transition, maxHeight, opacity, onCloseDialog }) {

  let [pokeInfo, setPokeInfo] = useState([])

  useEffect(() => {
    if (pokeDetails.length > 0) {
      setPokeInfo([])

      pokeDetails[0].stats.map((s, i) => {
        let statName = s.stat.name
        if (statName === 'hp' || statName === 'attack' || statName === 'defense' || statName === 'speed') {
          axios.get(s.stat.url)
            .then(res => {
              setPokeInfo(oldState => [...oldState, res.data])
              /* if (pokeInfo.length < 1)
                setPokeInfo(oldState => [...oldState, res.data])
              else
                setPokeInfo(res.data) */
            })
            .catch(err => console.log(err))
        }
      })
    }
  }, [pokeDetails])

  if (pokeDetails.length < 1) return ''

  return (
    <DialogInfoContainer style={{ transition, maxHeight }}>
      <CloseDialog onClick={() => onCloseDialog()}>
        <span className="close-dialog" style={{ transition: 'opacity .2s ease-in-out', opacity }}></span>
      </CloseDialog>

      {pokeInfo.length > 0 && (
        <DialogDetails>
          <strong className="base-stats-text">Base Stats</strong>

          {pokeInfo.map((p, i) => {
            let totalIncrease = p.affecting_moves.increase.reduce((prev, cur) => prev + cur.change, 0)
            return (
              <IncreaseContainer key={i} >
                <strong> {p.name}: </strong>
                <span className="total-increase-text">{totalIncrease}</span>

                <div style={{ width: '30%' }}>
                  <ProgressBar>
                    <PokeBar filled={totalIncrease} />
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
