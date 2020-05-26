import React, { useState, useEffect } from 'react'

import { DialogInfoContainer } from './styles'

function DialogInfo({ pokeId, pokeDetails, transition, maxHeight, opacity, onCloseDialog }) {

  let [pokeSelected, setPokeSelected] = useState([])

  return (
    <DialogInfoContainer style={{ transition, maxHeight }}>
      <div className="section-close-dialog" onClick={() => onCloseDialog()}>
        <span className="close-dialog" style={{ transition: 'opacity .2s ease-in-out', opacity }}></span>
      </div>
      {console.log("Details: ", pokeDetails)}
      <strong className="text-message">Some text</strong>

      {/* {pokeSelected.length > 0 && (
        pokeSelected.stats.map((s, i) => {
          console.log('S', s)
        })
      )} */}
    </DialogInfoContainer>
  )
}

export default DialogInfo
