import React from 'react'
import { useSelector } from 'react-redux'

import { Sidebar } from './Sidebar'
import { HotelScreen } from '../notes/HotelScreen'
import { NothingSelected } from './NothingSelected'

export const MainScreen = () => {
  const { active } = useSelector((state) => state.hotels)
  return (
    <div className='entries__main-content animate__animated animate__fadeIn animate__faster'>
      <Sidebar />

      <main>
        {/* <NothingSelected /> */}
        {active ? <HotelScreen /> : <NothingSelected />}
      </main>
    </div>
  )
}
