import './style.scss'

import Cookies from 'js-cookie'
import HeaderBlock from './components/HeaderBlock'
import { useSelector } from 'react-redux'

const InformationPage = () => {
  const nhanKhaus = useSelector(state => state.information.nhanKhaus && JSON.parse(Cookies.get('nhankhaus') ?? '[]'))
  const cccd = useSelector(state => state.information.cccd && (Cookies.get('cccd') ?? ''))
  const defaultValues = nhanKhaus.filter(x => x?.SoCCCD === cccd)[0] ?? {}

  return (
    <>
    <div className="container">
      <header className="header">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
          <span className="fs-4">Thông tin cá nhân</span>
        </a>
      </header>
        
      <div className='row main'>
        <div
          id="list-example"
          className="list-group col-3 position-fixed mt-4"
        >
          <ul>
            <li className="rounded border-2 mb-3 p-3 list-group-item list-group-item-action">
              <a href="#ThongTinCoBan" className='list-item'>Thông tin cơ bản</a>
            </li>
            <li className="rounded border-2 mb-3 p-3 list-group-item list-group-item-action">
              <a href="#HocVanNgheNghiep" className='list-item'>Học vấn, nghề nghiệp</a>
            </li>
            <li className="rounded border-2 mb-3 p-3 list-group-item list-group-item-action">
              <a href="#NoiOHienTai" className='list-item'>Nơi ở hiện tại (Tạm trú)</a>
            </li>
            <li className="rounded border-2 mb-3 p-3 list-group-item list-group-item-action">
              <a href="#CMNDCCCD" className='list-item'>CMND/CCCD</a>
            </li>
            <li className="rounded border-2 mb-3 p-3 list-group-item list-group-item-action">
              <a href="#TheBHYT" className='list-item'>Thẻ bảo hiểm y tế</a>
            </li>
            <li className="rounded border-2 mb-3 p-3 list-group-item list-group-item-action">
              <a href="#HoChieu" className='list-item'>Hộ chiếu</a>
            </li>
            <li className="rounded border-2 mb-3 p-3 list-group-item list-group-item-action">
              <a href="#NhaOHoKinhDoanh" className='list-item'>Nhà ở, hộ kinh doanh</a>
            </li>
          </ul>    
        </div>

        <div className="col-4"></div>
        
        <form
          data-bs-spy="scroll"
          data-bs-target="#list-example"
          data-bs-offset={0}
          className="scrollspy-example col-6 positon-fixed"
          tabIndex={0}>
          <HeaderBlock text='Thông tin cơ bản' id='ThongTinCoBan' />
          <div className='row my-4'>
            <div className='form-group col-4'>
              <label htmlFor='HoTen'>Họ và tên</label>
              <input
                value={defaultValues?.HoTen ?? ''} type='text' className='form-control' id='HoTen' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='NgaySinh'>Ngày sinh</label>
              <input value={defaultValues?.NgaySinh ?? ''} type='text' className='form-control' id='NgaySinh' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='GioiTinh'>Giới tính</label>
              <input value={defaultValues?.GioiTinh ?? ''} type='text' className='form-control' id='GioiTinh' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>

          <div className='row my-4'>
            <div className='form-group col-4'>
              <label htmlFor='TinhTrangHonNhan'>Tình trạng hôn nhân</label>
              <input value={defaultValues?.DMHonNhan?.Name ?? ''} type='text' className='form-control' id='TinhTrangHonNhan' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='MaSoThue'>Mã số thuế</label>
              <input value={defaultValues?.MaSoThue ?? ''} type='text' className='form-control' id='MaSoThue' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='SoDienThoai'>Số điện thoại</label>
              <input value={defaultValues?.SoDienThoai ?? ''} type='text' className='form-control' id='SoDienThoai' aria-describedby='emailHelp' placeholder='' />
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
              <input value={defaultValues?.DMQuocTich?.Name ?? ''} type='text' className='form-control' id='QuocTich' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='TonGiao'>Tôn giáo</label>
              <input value={defaultValues?.DMTonGiao?.Name ?? ''} type='text' className='form-control' id='TonGiao' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>

          <div className='row my-4'>
            <div className='form-group col-4'>
              <label htmlFor='QuanHeVoiChuHo'>Quan hệ với chủ hộ</label>
              <input value={defaultValues?.DMQuanHe?.Name ?? ''} type='text' className='form-control' id='QuanHeVoiChuHo' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='DoiTuong'>Đối tượng</label>
              <input value={defaultValues?.DMDoiTuong?.Name ?? ''} type='text' className='form-control' id='DoiTuong' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='TenGoiKhac'>Tên gọi khác</label>
              <input value={defaultValues?.TenGoiKhac ?? ''} type='text' className='form-control' id='TenGoiKhac' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>

          <div className='row my-4'>
            <div className='col-8'>
              <label htmlFor='GhiChu' className='form-label'>Ghi chú</label>
              <textarea className='form-control' id='GhiChu' rows='3'>{defaultValues?.GhiChu ?? ''}</textarea>
            </div>
          </div>

          <HeaderBlock text='Học vấn, nghề nghiệp' id='HocVanNgheNghiep' />
          <div className='row my-4'>
            <div className='form-group col-4'>
              <label htmlFor='TrinhDoVanHoa'>Trình độ văn hóa</label>
              <input value={defaultValues?.TrinhDoVanHoa ?? ''} type='text' className='form-control' id='TrinhDoVanHoa' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='TrinhDoChuyenMon'>Trình độ chuyên môn</label>
              <input value={defaultValues?.TrinhDoChuyenMon ?? ''} type='text' className='form-control' id='TrinhDoChuyenMon' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='NgheNghiep'>Nghề nghiệp</label>
              <input value={defaultValues?.NgheNghiep ?? ''} type='text' className='form-control' id='NgheNghiep' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>

          <div className='row my-4'>
            <div className='form-group col-8'>
              <label htmlFor='NoiLamViec'>Nơi làm việc</label>
              <input value={defaultValues?.NoiLamViec ?? ''} type='text' className='form-control' id='NoiLamViec' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>

          <HeaderBlock text='Nơi ở hiện tại' id='NoiOHienTai'/>
          <div className='row my-4'>
            <div className='form-group col-4'>
              <label htmlFor='TinhThanh'>Tỉnh thành</label>
              <input type='text' className='form-control' id='TinhThanh' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='QuanHuyen'>Quận huyện</label>
              <input type='text' className='form-control' id='QuanHuyen' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='PhuongXa'>Phường xã</label>
              <input type='text' className='form-control' id='PhuongXa' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>

          <div className='row my-4'>
            <div className='form-group col-8'>
              <label htmlFor='DiaChi'>Địa chỉ</label>
              <input type='text' className='form-control' id='DiaChi' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>

          <HeaderBlock text='CMND/CCCD' id='CMNDCCCD' />
          <div className='row my-4'>
            <div className='form-group col-4'>
              <label htmlFor='SoCCCD'>Số thẻ</label>
              <input type='text' className='form-control' id='SoCCCD' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='NoiCapCCCD'>Nơi cấp</label>
              <input type='text' className='form-control' id='NoiCapCCCD' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='NgayCapCCCD'>Ngày cấp</label>
              <input type='text' className='form-control' id='NgayCapCCCD' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>

          <div className='row my-4'>
            <div className='form-group col-4'>
              <label htmlFor='HanSuDungCCCD'>Hạn sử dụng</label>
              <input type='text' className='form-control' id='HanSuDungCCCD' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>

          <HeaderBlock text='Thẻ bảo hiểm y tế' id='TheBHYT' />
          <div className='row my-4'>
            <div className='form-group col-4'>
              <label htmlFor='SoTheBHYT'>Số thẻ</label>
              <input type='text' className='form-control' id='SoTheBHYT' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='NoiCapBHYT'>Nơi cấp</label>
              <input type='text' className='form-control' id='NoiCapBHYT' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='NgayCapBHYT'>Ngày cấp</label>
              <input type='text' className='form-control' id='NgayCapBHYT' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>

          <div className='row my-4'>
            <div className='form-group col-4'>
              <label htmlFor='HanSuDungBHYT'>Hạn sử dụng</label>
              <input type='text' className='form-control' id='HanSuDungBHYT' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>

          <HeaderBlock text='Hộ chiếu' id='HoChieu' />
          <div className='row my-4'>
            <div className='form-group col-4'>
              <label htmlFor='SoHoChieu'>Số hộ chiếu</label>
              <input type='text' className='form-control' id='SoHoChieu' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='NgayCapHoChieu'>Ngày cấp</label>
              <input type='text' className='form-control' id='NgayCapHoChieu' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='NoiCapHoChieu'>Nơi cấp</label>
              <input type='text' className='form-control' id='NoiCapHoChieu' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>

          <HeaderBlock text='Nhà ở, hộ kinh doanh' id='NhaOHoKinhDoanh' />
          <div className='row my-4'>
            <div className='form-group col-4'>
              <label htmlFor='LoaiNhaO'>Loại nhà ở</label>
              <input type='text' className='form-control' id='LoaiNhaO' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='DatO'>Đất ở</label>
              <input type='text' className='form-control' id='DatO' aria-describedby='emailHelp' placeholder='' />
            </div>
            <div className='form-group col-4'>
              <label htmlFor='DatSXNN'>Đất sản xuất nông nghiệp</label>
              <input type='text' className='form-control' id='DatSXNN' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>

          <div className='row my-4'>
            <div className='form-group col-4'>
              <label htmlFor='DatChuyenDoi'>Đất chuyển đổi</label>
              <input type='text' className='form-control' id='DatChuyenDoi' aria-describedby='emailHelp' placeholder='' />
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default InformationPage