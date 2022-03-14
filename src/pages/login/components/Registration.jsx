import * as yup from 'yup'

import { Link } from 'react-router-dom';
import React from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'

const RegistrationSchema = yup.object().shape({
  name: yup.string().required('Thông tin không được để trống'),
  username: yup.string().required('Bạn chưa nhập tài khoản'),
  password: yup.string().required('Bạn chưa nhập mật khẩu'),
  repassword: yup.string().oneOf([yup.ref('password'), null], 'Thông tin phải khớp với phần mật khẩu'),
  agreeService: yup.bool().oneOf([true], 'Bạn chưa đồng ý với điều khoản dịch vụ')
})

export function Registration() {
  const { handleSubmit, register, formState: {errors} } = useForm({
    resolver: yupResolver(RegistrationSchema)
  })

  const onSubmit = (data) => {
    console.log(data)
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
          <span className='text-danger'>{errors.name?.message}</span>
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
        <span className='text-danger'>{errors.username?.message}</span>
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
          <span className='text-danger'>{errors.password?.message}</span>
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
        <span className='text-danger'>{errors.repassword?.message}</span>
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
        <span className='text-danger'>{errors.agreeService?.message}</span>
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
