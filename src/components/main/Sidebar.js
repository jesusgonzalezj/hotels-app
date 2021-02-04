/* eslint-disable no-unused-vars */
import React from 'react'
import { useLazyQuery } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import InputForm from '../../shared/InputForm'
import { EntriesComponent } from './EntriesComponent'
import { Queries } from './../../graphql'
import Axios from 'axios'
import { urlBase } from 'api/url'
import yelp from 'yelp-fusion'
import { apiGet } from 'api'
import { token } from 'helpers/token'
import { slug } from 'helpers/slugifier'
import { startLoadingHotels } from 'actions/hotels'

const { useEffect, useState } = React

export const Sidebar = () => {
  const [inputVal, setInputVal] = useState('burritos') // delete this
  const [inputLocation, setInputLocation] = useState('san francisco')
  const [limit] = useState(10)
  const dispatch = useDispatch()

  const [search, { loading, error, data }] = useLazyQuery(Queries.TEST_QUERY)

  const handleSubmit = async () => {
    const newInputLocation = slug(inputLocation)
    /* search({
      variables: {
        term: inputVal,
        location: inputLocation,
        limit: 10
      }
    }) */
    dispatch(
      startLoadingHotels({ term: inputVal, location: inputLocation, limit })
    )
  }
  return (
    <aside className='entries__sidebar'>
      <div className='entries__sidebar-navbar'>
        <h3 className='mt-5'>
          <i className='far fa-moon'></i>
          <span className='animate__animated animate__fadeIn animate__faster'>
            {' '}
            {'User'}
          </span>
        </h3>

        <button
          className='btn animate__animated animate__fadeIn animate__faster'
          onClick={() => console.log('logout')}
        >
          Logout
        </button>
      </div>

      {/* <div
        className='entries__new-entry animate__animated animate__fadeIn animate__faster'
        onClick={handleAddNew}
      >
        <i className='far fa-calendar-plus fa-5x'></i>
        <p className='mt-5'>New entry</p>
      </div> */}

      <div
        className='entries__new-entry animate__animated animate__fadeIn animate__faster'
        onClick={() => {}}
      >
        <div>
          <InputForm
            inputVal={inputVal}
            inputLocation={inputLocation}
            buttonText='Find'
            onChange={(e) => setInputVal(e.target.value)}
            onChangeLocation={(e) => setInputLocation(e.target.value)}
            onSubmit={handleSubmit}
          />
          {/* <Planets newPlanets={data ? data.planets : null} /> */}
        </div>
      </div>

      <EntriesComponent />
    </aside>
  )
}
