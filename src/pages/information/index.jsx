import './style.scss'

import { useEffect, useState } from 'react'

import Cookies from 'js-cookie'
import HeaderBlock from './components/HeaderBlock'
import jwtDecode from 'jwt-decode'
import { nhanKhauApi } from '../../apis/nhanKhauApi'
import { setLogin } from '../../setup/redux/Slices/AuthSlice'

const InformationPage = () => {
  const [defaultValues, setDefaultValues] = useState({})

  useEffect(() => {
    const fetchData = async() => {
      const token = Cookies.get('token')
      const payloadJWT = jwtDecode(token)
      const { sub: cccd } = payloadJWT
  
      const res = await nhanKhauApi.getByCccd(cccd)

      if (res !== null) {
        setDefaultValues(res?.data)
      }
    }

    fetchData()
    return () => {}
  }, [])

  const handleClickLogout = () => {
    Cookies.remove('token_public')
    Cookies.remove('expiredTime_public')
    setLogin(false)
    window.location.reload()
  }

  return (
    <>
      <header className='header'>
        <a href='/'>Thông tin cá nhân</a>
        <a role='button' onClick={handleClickLogout}>Đăng xuất</a>
      </header>

      <div className='container'>
          
        <div className='row main'>
          <div className='list-group col-3 position-fixed mt-4'>
            <ul>
              <a href='#ThongTinCoBan' className='rounded border-2 mb-3 p-3 list-group-item list-group-item-action'>
                <li className='list-item'>Thông tin cơ bản</li>
              </a>
              <a href='#HocVanNgheNghiep' className='rounded border-2 mb-3 p-3 list-group-item list-group-item-action'>
                <li className='list-item'>Học vấn, nghề nghiệp</li>
              </a>
              <a href='#NoiOHienTai' className='rounded border-2 mb-3 p-3 list-group-item list-group-item-action'>
                <li className='list-item'>Nơi ở hiện tại (Tạm trú)</li>
              </a>
              <a href='#CMNDCCCD' className='rounded border-2 mb-3 p-3 list-group-item list-group-item-action'>
                <li className='list-item'>CMND/CCCD</li>
              </a>
              <a href='#TheBHYT' className='rounded border-2 mb-3 p-3 list-group-item list-group-item-action'>
                <li className='list-item'>Thẻ bảo hiểm y tế</li>
              </a>
              <a href='#HoChieu' className='rounded border-2 mb-3 p-3 list-group-item list-group-item-action'>
                <li className='list-item'>Hộ chiếu</li>
              </a>
              <a href='#NhaOHoKinhDoanh' className='rounded border-2 mb-3 p-3 list-group-item list-group-item-action'>
                <li className='list-item'>Nhà ở, hộ kinh doanh</li>
              </a>
            </ul>    
          </div>

          <div className='col-4'></div>
          
          <form
            data-bs-spy='scroll'
            data-bs-target='#list-example'
            data-bs-offset={0}
            className='scrollspy-example col-8 positon-fixed'
            tabIndex={0}>
            <HeaderBlock text='Thông tin cơ bản' id='ThongTinCoBan' />
            <div className='row my-4'>
              <div className='form-group col-4'>
                <label htmlFor='HoTen'>Họ và tên</label>
                <input
                  readOnly={true}
                  value={defaultValues?.HoTen ?? ''}
                  type='text'
                  className='form-control'
                  id='HoTen'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='NgaySinh'>Ngày sinh</label>
                <input
                  readOnly={true}
                  value={defaultValues?.NgaySinh ?? ''}
                  type='text'
                  className='form-control'
                  id='NgaySinh'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='GioiTinh'>Giới tính</label>
                <input
                  readOnly={true}
                  value={defaultValues?.GioiTinh ?? ''}
                  type='text'
                  className='form-control'
                  id='GioiTinh'
                  placeholder='' />
              </div>
            </div>

            <div className='row my-4'>
              <div className='form-group col-4'>
                <label htmlFor='TinhTrangHonNhan'>Tình trạng hôn nhân</label>
                <input readOnly={true} value={defaultValues?.DMHonNhan?.Name ?? ''} type='text' className='form-control' id='TinhTrangHonNhan' placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='MaSoThue'>Mã số thuế</label>
                <input readOnly={true} value={defaultValues?.MaSoThue ?? ''} type='text' className='form-control' id='MaSoThue' placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='SoDienThoai'>Số điện thoại</label>
                <input readOnly={true} value={defaultValues?.SoDienThoai ?? ''} type='text' className='form-control' id='SoDienThoai' placeholder='' />
              </div>
            </div>

            <div className='row my-4'>
              <div className='form-group col-4'>
                <label htmlFor='DanToc'>Dân tộc</label>
                <input
                  readOnly={true}
                  value={defaultValues?.DMDanToc?.Name ?? ''}
                  type='text'
                  className='form-control'
                  id='DanToc'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='QuocTich'>Quốc tịch</label>
                <input
                  readOnly={true}
                  value={defaultValues?.DMQuocTich?.Name ?? ''}
                  type='text'
                  className='form-control'
                  id='QuocTich'
                
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='TonGiao'>Tôn giáo</label>
                <input
                  readOnly={true}
                  value={defaultValues?.DMTonGiao?.Name ?? ''}
                  type='text'
                  className='form-control'
                  id='TonGiao'
                  placeholder='' />
              </div>
            </div>

            <div className='row my-4'>
              <div className='form-group col-4'>
                <label htmlFor='QuanHeVoiChuHo'>Quan hệ với chủ hộ</label>
                <input
                  readOnly={true}
                  value={defaultValues?.DMQuanHe?.Name ?? ''}
                  type='text'
                  className='form-control'
                  id='QuanHeVoiChuHo'
                
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='DoiTuong'>Đối tượng</label>
                <input
                  readOnly={true}
                  value={defaultValues?.DMDoiTuong?.Name ?? ''}
                  type='text'
                  className='form-control'
                  id='DoiTuong'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='TenGoiKhac'>Tên gọi khác</label>
                <input
                  readOnly={true}
                  value={defaultValues?.TenGoiKhac ?? ''}
                  type='text'
                  className='form-control'
                  id='TenGoiKhac'
                  placeholder='' />
              </div>
            </div>

            <div className='row my-4'>
              <div className='col-8'>
                <label htmlFor='GhiChu' className='form-label'>Ghi chú</label>
                <textarea readOnly={true} className='form-control' id='GhiChu' rows='3' defaultValue={defaultValues?.GhiChu ?? ''} />
              </div>
            </div>

            <HeaderBlock text='Học vấn, nghề nghiệp' id='HocVanNgheNghiep' />
            <div className='row my-4'>
              <div className='form-group col-4'>
                <label htmlFor='TrinhDoVanHoa'>Trình độ văn hóa</label>
                <input
                  readOnly={true}
                  value={defaultValues?.TrinhDoVanHoa ?? ''}
                  type='text'
                  className='form-control'
                  id='TrinhDoVanHoa'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='TrinhDoChuyenMon'>Trình độ chuyên môn</label>
                <input
                  readOnly={true}
                  value={defaultValues?.TrinhDoChuyenMon ?? ''}
                  type='text'
                  className='form-control'
                  id='TrinhDoChuyenMon'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='NgheNghiep'>Nghề nghiệp</label>
                <input
                  readOnly={true}
                  value={defaultValues?.NgheNghiep ?? ''}
                  type='text'
                  className='form-control'
                  id='NgheNghiep'
                  placeholder='' />
              </div>
            </div>

            <div className='row my-4'>
              <div className='form-group col-8'>
                <label htmlFor='NoiLamViec'>Nơi làm việc</label>
                <input
                  readOnly={true}
                  value={defaultValues?.NoiLamViec ?? ''}
                  type='text'
                  className='form-control'
                  id='NoiLamViec'
                  placeholder='' />
              </div>
            </div>

            <HeaderBlock text='Nơi ở hiện tại' id='NoiOHienTai'/>
            <div className='row my-4'>
              <div className='form-group col-4'>
                <label htmlFor='TinhThanh'>Tỉnh thành</label>
                <input
                  readOnly={true}
                  value={defaultValues?.TenTinhThanhTamTru ?? ''}
                  type='text'
                  className='form-control'
                  id='TinhThanh'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='QuanHuyen'>Quận huyện</label>
                <input
                  readOnly={true}
                  value={defaultValues?.TenQuanHuyenTamTru ?? ''}
                  type='text'
                  className='form-control'
                  id='QuanHuyen'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='PhuongXa'>Phường xã</label>
                <input
                  readOnly={true}
                  value={defaultValues?.TenXaPhuongTamTru ?? ''}
                  type='text'
                  className='form-control'
                  id='PhuongXa'
                  placeholder='' />
              </div>
            </div>

            <div className='row my-4'>
              <div className='form-group col-8'>
                <label htmlFor='DiaChi'>Địa chỉ</label>
                <input
                  readOnly={true}
                  value={defaultValues?.DiaChiTamTru ?? ''}
                  type='text'
                  className='form-control'
                  id='DiaChi'
                  placeholder='' />
              </div>
            </div>

            <HeaderBlock text='CMND/CCCD' id='CMNDCCCD' />
            <div className='row my-4'>
              <div className='form-group col-4'>
                <label htmlFor='SoCCCD'>Số thẻ</label>
                <input
                  readOnly={true}
                  value={defaultValues?.SoCCCD ?? ''}
                  type='text'
                  className='form-control'
                  id='SoCCCD'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='NoiCapCCCD'>Nơi cấp</label>
                <input
                  readOnly={true}
                  value={defaultValues?.NoiCapCCCD ?? ''}
                  type='text'
                  className='form-control'
                  id='NoiCapCCCD'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='NgayCapCCCD'>Ngày cấp</label>
                <input
                  readOnly={true}
                  value={defaultValues?.NgayCapCCCD ?? ''}
                  type='text'
                  className='form-control'
                  id='NgayCapCCCD'
                  placeholder='' />
              </div>
            </div>

            <div className='row my-4'>
              <div className='form-group col-4'>
                <label htmlFor='HanSuDungCCCD'>Hạn sử dụng</label>
                <input
                  readOnly={true}
                  value={defaultValues?.HanSuDungCCCD ?? ''}
                  type='text'
                  className='form-control'
                  id='HanSuDungCCCD'
                  placeholder='' />
              </div>
            </div>

            <HeaderBlock text='Thẻ bảo hiểm y tế' id='TheBHYT' />
            <div className='row my-4'>
              <div className='form-group col-4'>
                <label htmlFor='SoTheBHYT'>Số thẻ</label>
                <input
                  readOnly={true}
                  value={defaultValues?.SoTheBHYT ?? ''}
                  type='text'
                  className='form-control'
                  id='SoTheBHYT'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='NoiCapBHYT'>Nơi cấp</label>
                <input
                  readOnly={true}
                  value={defaultValues?.NoiCapBHYT ?? ''}
                  type='text'
                  className='form-control'
                  id='NoiCapBHYT'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='NgayCapBHYT'>Ngày cấp</label>
                <input
                  readOnly={true}
                  value={defaultValues?.NgayCapBHYT ?? ''}
                  type='text'
                  className='form-control'
                  id='NgayCapBHYT'
                  placeholder='' />
              </div>
            </div>

            <div className='row my-4'>
              <div className='form-group col-4'>
                <label htmlFor='HanSuDungBHYT'>Hạn sử dụng</label>
                <input
                  readOnly={true}
                  value={defaultValues?.HanSuDungBHYT ?? ''}
                  type='text'
                  className='form-control'
                  id='HanSuDungBHYT'
                  placeholder='' />
              </div>
            </div>

            <HeaderBlock text='Hộ chiếu' id='HoChieu' />
            <div className='row my-4'>
              <div className='form-group col-4'>
                <label htmlFor='SoHoChieu'>Số hộ chiếu</label>
                <input
                  readOnly={true}
                  value={defaultValues?.SoHoChieu ?? ''}
                  type='text'
                  className='form-control'
                  id='SoHoChieu'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='NgayCapHoChieu'>Ngày cấp</label>
                <input
                  readOnly={true}
                  value={defaultValues?.NgayCapHoChieu ?? ''}
                  type='text'
                  className='form-control'
                  id='NgayCapHoChieu'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='NoiCapHoChieu'>Nơi cấp</label>
                <input
                  readOnly={true}
                  value={defaultValues?.NoiCapHoChieu ?? ''}
                  type='text'
                  className='form-control'
                  id='NoiCapHoChieu'
                  placeholder='' />
              </div>
            </div>

            <HeaderBlock text='Nhà ở, hộ kinh doanh' id='NhaOHoKinhDoanh' />
            <div className='row my-4'>
              <div className='form-group col-4'>
                <label htmlFor='LoaiNhaO'>Loại nhà ở</label>
                <input
                  readOnly={true}
                  value={defaultValues?.LoaiNhaO ?? ''}
                  type='text'
                  className='form-control'
                  id='LoaiNhaO'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='DatO'>Đất ở</label>
                <input
                  readOnly={true}
                  value={defaultValues?.DatO ?? ''}
                  type='text'
                  className='form-control'
                  id='DatO'
                  placeholder='' />
              </div>
              <div className='form-group col-4'>
                <label htmlFor='DatSXNN'>Đất sản xuất nông nghiệp</label>
                <input
                  readOnly={true}
                  value={defaultValues?.DatSXNN ?? ''}
                  type='text'
                  className='form-control'
                  id='DatSXNN'
                  placeholder='' />
              </div>
            </div>

            <div className='row my-4'>
              <div className='form-group col-4'>
                <label htmlFor='DatChuyenDoi'>Đất chuyển đổi</label>
                <input
                  readOnly={true}
                  value={defaultValues?.DatChuyenDoi ?? ''}
                  type='text'
                  className='form-control'
                  id='DatChuyenDoi'
                  placeholder='' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default InformationPage