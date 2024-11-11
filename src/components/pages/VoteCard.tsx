import React from 'react'
import { ICandidate } from '../../types/candidates'

interface props {
    candidate:ICandidate
}

export default function VoteCard({candidate}:props) {
  return (
    <div className='vote-card'>
        <h1>{candidate.name}</h1>
        <button>VOTE</button>
    </div>
  )
}
