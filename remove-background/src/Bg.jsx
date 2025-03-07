import { useState } from 'react'
import close_img from './assets/close.png'
import './Bg.css'
import banner from './assets/banner.png'
import logo from './assets/logo.png'

function Bg() {
    const [count, setCount] = useState(0)

    return (
        <div className='Bg_const'>
            <img src={close_img} className="close_img" />

            <h1 className='Bg_title'>העלאת תמונה כדי להסיר את הרקע</h1>

            <button className="upload_img_btn">העלאת תמונה</button>
            <div className="upload_img_text">פורמטים נתמכים png, jpg</div>
<div className="middle_div_cont">
    <div className="left_div_cont">

    </div>
    <div className="right_div">

    </div>
</div>
            <div className="footer_cont">
    <img src={banner}/>
    <img src={logo} className="log"/>
    </div>
        </div>
    )
}

export default Bg
