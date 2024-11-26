import React from 'react'
import { gadgets } from '../components/data'
import king from '../components/gadget.module.css'

export default function shoppage() {
    const gadgetsCat = gadgets.map(gadget => (

        <section key={gadget.id}>
            <h2>Name:{gadget.name}</h2>
            <p>brand:{gadget.brand}</p>

        </section>

    ))
  return (
    <div className={king.gadget}>
        {gadgetsCat}
        </div>
  )
}
