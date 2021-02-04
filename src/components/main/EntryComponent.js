/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { activeHotel } from '../../actions/hotels'

export const EntryComponent = ({
  id,
  name,
  url,
  image_url,
  rating,
  coordinates,
  review_count,
  phone,
  price,
  hours,
  special_hours,
  is_closed,
  reviews
}) => {
  const dispatch = useDispatch()
  const handleEntryClick = () => {
    // dispatch
    dispatch(
      activeHotel(id, {
        id,
        name,
        url,
        image_url,
        rating,
        coordinates,
        review_count,
        phone,
        price,
        hours,
        special_hours,
        is_closed,
        reviews
      })
    )
  }
  return (
    <div
      className='entries__entry pointer animate__animated animate__fadeIn animate__faster'
      onClick={handleEntryClick}
    >
      <div
        className='entries__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${
            image_url ??
            'https://www.bakan.com.mx/images/sillas-restaurante-10.jpg'
          })`
        }}
      ></div>

      <div className='entries__entry-body'>
        <p className='entries__entry-title'>{name}</p>
        <p className='entries__entry-content'>{is_closed}</p>
      </div>

      <div className='entries__entry-date-box'>
        <span>{`[${review_count}] Reviews - [${rating}] Rating`}</span>
        <h6>{phone}</h6>
      </div>
    </div>
  )
}
