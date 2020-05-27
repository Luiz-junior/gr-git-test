import React, { useState, useEffect } from 'react'

import { DialogInfoContainer } from './styles'
import axios from 'axios'

function DialogInfo({ pokeDetails, transition, maxHeight, opacity, onCloseDialog }) {

  let [pokeInfo, setPokeInfo] = useState([])

  useEffect(() => {
    if (pokeDetails.length > 0) {
      pokeDetails[0].stats.map((s, i) => {
        let statName = s.stat.name
        if (statName === 'hp' || statName === 'attack' || statName === 'defense' || statName === 'speed') {
          axios.get(s.stat.url)
            .then(res => setPokeInfo(oldState => [...oldState, res.data]))
            .catch(err => console.log(err))
        }
      })
    }
  }, [pokeDetails])

  if (pokeDetails.length < 1) return ''

  return (
    <DialogInfoContainer style={{ transition, maxHeight }}>
      {/* {console.log(pokeInfo.reverse())} */}
      <div className="section-close-dialog" onClick={() => onCloseDialog()}>
        <span className="close-dialog" style={{ transition: 'opacity .2s ease-in-out', opacity }}></span>
      </div>
      {/* <strong className="text-message">Some text</strong> */}

      {pokeInfo.length > 0 && (
        <section style={{ display: 'flex', flexDirection: 'column' }}>
          <strong>Base Stats</strong>
          {pokeInfo.map((p, i) => {
            let totalIncrease = p.affecting_moves.increase.reduce((prev, cur) => prev + cur.change, 0)
            return (
              <div key={i} className="increase-container">
                <strong> {p.name.toUpperCase()}:</strong>
                <span className="total-increase">{totalIncrease}</span>
              </div>
            )
          })}
        </section>
      )}


    </DialogInfoContainer>
  )
}

export default DialogInfo
