import * as yup from 'yup'

import { Link } from 'react-router-dom';
import React from 'react';
import { accountApi } from '../../../apis/accountApi';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'

const RegistrationSchema = yup.object().shape({
  name: yup.string().required('Thông tin không được để trống'),
  username: yup.string().required('Bạn chưa nhập tài khoản').matches(/^[0-9]+$/, 'Số định danh không hợp lệ'),
  password: yup.string().required('Bạn chưa nhập mật khẩu').min(6, 'Mật khẩu ít nhất phải chứa 6 ký tự'),
  repassword: yup.string().oneOf([yup.ref('password'), null], 'Thông tin phải khớp với phần mật khẩu'),
  agreeService: yup.bool().oneOf([true], 'Bạn chưa đồng ý với điều khoản dịch vụ')
})

export function Registration() {
  const { handleSubmit, register, formState: {errors} } = useForm({
    resolver: yupResolver(RegistrationSchema)
  })

  const onSubmit = async (data) => {
    const { name, username, password } = data

    const res = await accountApi.registration({
      name,
      username,
      password,
    })

    if (!res) {
      alert('Không thành công')
    } else {
      alert('Thành công')
      window.location.href = '/public/login'
    }
  }

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='mb-10 text-center'>
        <h1 className='text-dark mb-3'>Tạo tài khoản</h1>

        <div className='text-gray-400 fw-bold fs-4'>
          Đã có tài khoản?{' '}
          <Link to='/login' className='link-primary fw-bolder'>
            Đăng nhập ngay
          </Link>
        </div>
      </div>

      <div className='d-flex align-items-center mb-10'>
        <div className='border-bottom border-gray-300 mw-50 w-100'></div>
        <div className='border-bottom border-gray-300 mw-50 w-100'></div>
      </div>

      <div className='fv-row mb-7'>
          <label htmlFor='name' className='class="form-label fw-bolder text-dark fs-6'>Họ tên</label>
          <input
            id='name'
            placeholder='Họ tên'
            type='text'
            className={clsx(
              'form-control form-control-lg form-control-solid',
            )}
            {...register('name')}
          />
          <small className='text-danger'>{errors.name?.message}</small>
      </div>

      <div className='fv-row mb-7'>
        <label className='form-label fw-bolder text-dark fs-6'>Tài khoản</label>
        <input
          placeholder='Nhập số CCCD/CMND'
          type='text'
          className={clsx(
            'form-control form-control-lg form-control-solid',
          )}
          {...register('username')}
        />
        <small className='text-danger'>{errors.username?.message}</small>
      </div>

      <div className='mb-10 fv-row' data-kt-password-meter='true'>
        <div className='mb-1'>
          <label className='form-label fw-bolder text-dark fs-6'>Mật khẩu</label>
          <div className='position-relative mb-3'>
            <input
              type='password'
              placeholder='Mật khẩu'
              className={clsx(
                'form-control form-control-lg form-control-solid',
              )}
              {...register('password', { required: true })}
            />
          </div>
          <small className='text-danger'>{errors.password?.message}</small>
        </div>
      </div>

      <div className='fv-row mb-5'>
        <label className='form-label fw-bolder text-dark fs-6'>Nhập lại mật khẩu</label>
        <input
          type='password'
          placeholder='Nhập lại mật khẩu'
          className={clsx(
            'form-control form-control-lg form-control-solid',
          )}
          {...register('repassword', { required: true })}
        />
        <small className='text-danger'>{errors.repassword?.message}</small>
      </div>

      <div className='fv-row mb-10'>
        <div className='form-check form-check-custom form-check-solid'>
          <input
            className='form-check-input'
            type='checkbox'
            id='kt_login_toc_agree'
            {...register('agreeService')}
          />
          <label
            className='form-check-label fw-bold text-gray-700 fs-6'
            htmlFor='kt_login_toc_agree'
          >
            Tôi đồng ý với chính sách sử dụng dịch vụ.
          </label>
        </div>
        <small className='text-danger'>{errors.agreeService?.message}</small>
      </div>

      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_up_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
        >
          Đăng ký
        </button>
        <button
          type='button'
          id='kt_login_signup_form_cancel_button'
          className='btn btn-lg btn-light-primary w-100 mb-5'
        >
          Hủy
        </button>
      </div>
    </form>
  );
}
