/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HotelsAppBar } from './HotelsAppBar'
import { useForm } from '../../hooks/useForm'
import { activeHotel, cleanActive } from '../../actions/hotels'
import { eachWord } from 'helpers/firstUppercase'
import { Card, Col, Row, Rate } from 'antd'
import Map from 'shared/Map/Map'

export const HotelScreen = () => {
  const { active: hotel } = useSelector((state) => state.hotels)
  const dispatch = useDispatch()
  const [formValues, handleInputChange, reset] = useForm(hotel)
  const {
    id,
    name,
    url,
    photos,
    rating,
    coordinates: location,
    review_count,
    phone,
    price,
    display_phone,
    alias,
    hours,
    special_hours,
    is_closed,
    reviews
  } = formValues
  const activeId = useRef(hotel.id)
  const resetValues = useRef(reset)
  useEffect(() => {
    if (hotel.id !== activeId.current) {
      resetValues.current(hotel)
      activeId.current = hotel.id
    }
    // eslint-disable-next-line
  }, [hotel])

  const coordinates = {
    lng: location?.latitude,
    lat: location?.longitude
  }

  return (
    <div className='notes__main-content animate__animated animate__fadeIn animate__faster'>
      <HotelsAppBar />

      <div className='notes__content'>
        <h2 className='notes__title-input'>{name}</h2>
        <div style={{ display: 'flex' }}>
          <div className='notes__image animate__animated animate__fadeIn animate__faster'>
            <img
              src={
                hotel.image_url
                  ? hotel.image_url
                  : 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
              }
              alt='imagen'
            />
          </div>
          <span style={{ display: 'flex', marginLeft: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid
            architecto, autem, distinctio ipsum iure minima non quae quibusdam
            ratione recusandae rem repellat, saepe sapiente tempore vel
            voluptatem! Culpa, delectus.
          </span>
          {location && (location.latitude || location.longitude) && (
            <Map center={coordinates} zoom={16} />
          )}
        </div>
        <div style={{ display: 'flex', marginTop: '20px' }}>
          {hotel?.reviews?.map((review) => (
            <div key={review.id} style={{ width: '100%', marginTop: '20px' }}>
              <Row gutter={16}>
                <Col
                  span={24}
                  style={{
                    boxShadow: '5px 10px 10px #888888',
                    borderRadius: '15px',
                    border: '1px solid #d8d4d4',
                    padding: '5px'
                  }}
                >
                  <div style={{ padding: '5px' }}>
                    <img
                      style={{
                        borderRadius: '15px',
                        width: '100%',
                        height: '310px'
                      }}
                      src={`${review.user.image_url}`}
                      alt={`${review.user.image_url}`}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <h5 style={{ marginTop: '10px' }}>{review.user.name}</h5>
                      <span style={{ color: '#d8d4d4' }}>
                        {review.time_created}
                      </span>
                    </div>
                    <hr style={{ margin: '0px' }} />
                    <div style={{ flexDirection: 'column' }}>
                      <span>
                        <Rate value={review.rating} disabled />
                      </span>
                    </div>
                    <span>{review.text}</span>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </div>
      <button className='btn btn-info' onClick={() => window.open(url)}>
        {`Visitar: ${eachWord(name)}`}
      </button>
    </div>
  )
}
