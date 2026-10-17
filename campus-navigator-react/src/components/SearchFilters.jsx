import React from 'react'

export default function SearchFilters({setOnFood,isFood}) {
  return (
    <div>
        <button onClick={()=>setOnFood(!isFood)}>Search food</button>
    </div>
  )
}
