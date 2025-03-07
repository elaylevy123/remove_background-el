import { useState } from 'react'
import close_img from './assets/close.png'
import './Bg.css'

function Bg() {
    const [count, setCount] = useState(0)

    return (
        <div className='Bg_const'>
            <img src={close_img} className="close_img" />

            <h1 className='Bg_title'>העלאת תמונה כדי להסיר את הרקע</h1>

        </div>
    )
}

export default Bg
