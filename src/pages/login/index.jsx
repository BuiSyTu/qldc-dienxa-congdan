import { Route, Routes } from 'react-router-dom'

import { Login } from './components/Login'
import { Registration } from './components/Registration'

const toAbsoluteUrl = (pathname) => process.env.PUBLIC_URL + pathname

const LoginPage = () => {
  return (
    <div
      className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/sketchy-1/14.png')})`,
      }}
    >
      {/* begin::Content */}
      <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
        {/* begin::Wrapper */}
        <div className='w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/registration' element={<Registration />} ></Route>
          </Routes>
          
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      <div className='d-flex flex-center flex-column-auto p-10'>
        <div className='d-flex align-items-center fw-bold fs-6'>
          <div className="text-dark order-2 order-md-1"><span className="text-muted font-weight-bold mr-2">2022</span> © <a href="#!" target="_blank" rel="noopener noreferrer" className="text-dark-75 text-hover-primary">Hệ thống quản lý dân cư</a></div>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  )
}
export default LoginPage