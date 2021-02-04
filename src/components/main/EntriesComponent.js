import React from 'react'
import { useSelector } from 'react-redux'
import { EntryComponent } from './EntryComponent'

export const EntriesComponent = () => {
  const { hotels } = useSelector((state) => state.hotels)
  return (
    <div className='entries__entries'>
      {hotels.map((hotel) => (
        <EntryComponent key={hotel.id} {...hotel} />
      ))}
    </div>
  )
}
