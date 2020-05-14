/* eslint-disable */

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useFetching = (someFetchActionCreator: any) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(someFetchActionCreator())
  }, [])
}
