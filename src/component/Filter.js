import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { FilterbyAll, FilterbyDone, FilterbyUnDone } from '../Redux/TodoSlice'

const Filtered = () => {
    let dispatch = useDispatch()
  return (
    <div style={{display:'flex',justifyContent:'center',gap:'20px'}}>
      <Button onClick={()=>dispatch(FilterbyDone())} variant="success">DONE</Button>
      <Button onClick={()=>dispatch(FilterbyUnDone())} variant="danger">UNDONE</Button>
      <Button onClick={()=>dispatch(FilterbyAll())} variant="dark">ALL</Button>
    </div>
  )
}

export default Filtered
