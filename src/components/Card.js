import React from 'react'

const Card = () => {
  return (
    <div class="card mt-5" style={{width:"400px"}}>
    <img class="card-img-top" src="..." alt="..."/>
    <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text.</p>
      <div className='d-flex'>
  <select className='form-control m-2 w-25 rounded-1'>
      {Array.from(Array(6),(e,i)=>{
          return(
              <option key={i+1} value={i+1}>{i+1}</option>
          )
      })}
  
  </select>
  <select className='form-control m-2 w-25 rounded-1 '>
      <option value="half">Half</option>
      <option value="full">Full</option>
  </select>
      </div>
    </div>
  </div>
  )
}

export default Card