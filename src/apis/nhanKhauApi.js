import Cookies from 'js-cookie'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN

const getByCccd = async (cccd) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${BASE_URL}/nhankhaus/cccd/${cccd}?includes=DMHonNhan,DMQuanHe,DMDanToc,DMQuocTich,DMTonGiao,DMTinhTrangCuTru,DMVanHoa,DMChuyenMon,DMDoiTuong,HoKhau`,
      timeout: 15000,
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'userTokenKey': Cookies.get('token') ?? '',
      },
    })

    return res?.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const nhanKhauApi = {
  getByCccd,
}