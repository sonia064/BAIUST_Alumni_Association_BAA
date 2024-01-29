import React from 'react'
import "../App.css"
import { MdClose } from 'react-icons/md'

const Formtable = ({handleSubmit,handleOnChange,handleclose,rest}) => {
  return (
    <div className="addContainer">
            <form onSubmit={handleSubmit}>
            <div className="close-btn" onClick={handleclose}><MdClose/></div>
              <label htmlFor="name">Name : </label>
              <input type="text" id="name" name="name" placeholder='Sonia Akter' onChange={handleOnChange} value={rest.name}/>

              <label htmlFor="dept">Department : </label>
              <input type="text" id="dept" name="dept" placeholder='CSE/EEE/CE/DBA/Eng' onChange={handleOnChange} value={rest.dept}/>

              <label htmlFor="email">Email : </label>
              <input type="email" id="email" name="email" placeholder='sonia@gmail.com' onChange={handleOnChange} value={rest.email}/>

              <label htmlFor="mobile">Mobile : </label>
              <input type="number" id="mobile" name="mobile" placeholder='+088-018****' onChange={handleOnChange} value={rest.mobile}/>

              <label htmlFor="session">Session : </label>
              <input type="text" id="session" name="session" placeholder='2020-24' onChange={handleOnChange} value={rest.session}/>

              <button className="btn">Submit</button>
            </form>
    </div>
  )
}

export default Formtable