/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Rate } from 'antd'

import { eachWord } from 'helpers/firstUppercase'
import { splitBy } from 'helpers/splitBy'

export const HotelsAppBar = () => {
  const dispatch = useDispatch()
  const { active } = useSelector((state) => state.hotels)
  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click()
  }

  const activeDate = moment(active.date)
  const currentDay = moment().weekday()
  const getHours = () => {
    const current =
      active &&
      active.hours &&
      active.hours[0].open.find((day) => day.day === currentDay)
    if (!current) return '00:00 - 00:00'
    const { start, end } = current && current
    return `${splitBy(start)} - ${splitBy(end)}`
  }
  /* id,
  name,
  url,
  photos,
  rating,
  coordinates,
  review_count,
  phone,
  price,
  display_phone,
      alias,
  hours,
  special_hours,
  is_closed,
  reviews */
  return (
    <div className='notes__appbar animate__animated animate__fadeIn animate__faster'>
      <span style={{ color: active?.is_closed ? 'red' : 'chartreuse' }}>
        {active.is_closed ? 'Cerrado Actualmente' : 'Abierto'}
      </span>
      <span style={{ color: active?.is_closed ? 'red' : 'chartreuse' }}>
        {active &&
          active.hours &&
          active.hours[0].hours_type &&
          eachWord(`Horario ${active?.hours[0]?.hours_type}`)}
      </span>
      <span style={{ color: active?.is_closed ? 'red' : 'chartreuse' }}>
        {getHours()}
      </span>
      <span style={{ display: 'flex', alignItems: 'center' }}>
        {active?.rating && <Rate value={active.rating} disabled />}
        <span style={{ marginLeft: '10px' }}>{`[${
          (active && active.review_count && active.review_count) ?? 0
        }] Reviews`}</span>
      </span>
    </div>
  )
}
