import React from 'react'
import Navbar from './Navbar'

const Addtodo = () => {
  return (
    <div>
    <div className="container" >
        <Navbar/>
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx">
                
                <div className="row g-3">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">User id</label>
                    <input type="number" name="" id="" className="form-control" />
                  </div>
               
                  
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">id</label>
                    <input type="number" name="" id="" className="form-control" />
                  </div>
                 
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Title</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Completed</label>
                    <input type="text" name="" id="" className="form-control" />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary">Add </button>
                  </div>
                  
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Addtodo