/* eslint-disable jsx-a11y/anchor-is-valid */

import * as yup from 'yup'

import { Link } from 'react-router-dom'
import React from 'react'
import { accountApi } from '../../../apis/accountApi'
import clsx from 'clsx'
import { setLogin } from '../../../setup/redux/Slices/AuthSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const LoginSchema = yup.object().shape({
  username: yup.string().required('Bạn chưa nhập tài khoản').matches(/^[0-9]+$/, 'Số định danh không hợp lệ'),
  password: yup.string().required('Bạn chưa nhập mật khẩu').min(6, 'Mật khẩu ít nhất phải chứa 6 ký tự'),
})

export function Login() {
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(LoginSchema) })

  const onSubmit = async (formData) => {
    const { username, password } = formData

    const resAccount = await accountApi.login({
      username,
      password,
    })

    if (resAccount !== null) {
      dispatch(setLogin(true))
    } else {
      setLogin(false)
      alert('Đăng nhập không thành công')
    } 
  }

  return (
    <form
      className='form w-100'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Đăng nhập hệ thống</h1>
        <div className='text-gray-400 fw-bold fs-4'>
          Bạn chưa có tài khoản?{' '}
          <Link to='/registration' className='link-primary fw-bolder'>
            Tạo tài khoản mới
          </Link>
        </div>
      </div>


      <div className='fv-row mb-10'>
        <label htmlFor='username' className='form-label fs-6 fw-bolder text-dark'>Tài khoản</label>
        <input
          id='username'
          placeholder='Tên đăng nhập'
          className={clsx(
            'form-control form-control-lg form-control-solid',
          )}
          {...register('username')}
        />
        <small className='text-danger'>{errors.username?.message}</small>
      </div>

      <div className='fv-row mb-10'>
        <div className='d-flex justify-content-between mt-n5'>
          <div className='d-flex flex-stack mb-2'>
            <label htmlFor='password' className='form-label fw-bolder text-dark fs-6 mb-0'>Mật khẩu</label>
          </div>
        </div>
        <input
          id='password'
          placeholder='Nhập mật khẩu'
          type='password'
          className={clsx(
            'form-control form-control-lg form-control-solid',
          )}
          {...register('password')}
        />
        <small className='text-danger'>{errors.password?.message}</small>
      </div>

      {/* begin::Action */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
        >
          Đăng nhập
        </button>
      </div>
      {/* end::Action */}
    </form>
  )
}
