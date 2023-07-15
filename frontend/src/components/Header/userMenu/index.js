import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import DisplayAccessbility from "./DisplayAccessbility"
import HelpSupport from "./HelpSupport"
import SettingsPrivacy from "./SettingsPrivacy"
import Cookies from "js-cookie"

const UserMenu = ({user}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

  const [visible, setVisible] = useState(0)

  const logout = ()=>{
    Cookies.set('user', '')
    dispatch({
      type: 'LOGOUT',
    })
    navigate('/login')
  }
  return (
    <div className="menu">
      {visible === 0 && 
      <div>
        <Link to={`/profile`} className="menu_header hover3">
            <img src={user?.picture} alt="" />
            <div className="menu_col">
                <span>
                    {user?.first_name}
                    {user?.last_name}
                </span>
                <span>See your Profile</span>
            </div>
        </Link>
        <div className="manu_splitter"></div>
        <div className="menu_main hover3">
            <div className="small_circle">
                <i className="report_filled_icon"></i>
            </div>
            <div className="menu_col">
                <div className="menu_span1">Give Feedback</div>
                <div className="menu_span2">Help us improve facebook</div>
            </div>
        </div>
        <div className="menu_splitter"></div>
        <div className="menu_item hover3" onClick={()=>setVisible(1)}>
            <div className="small_circle">
                <i className="settings_filled_icon"></i>
            </div>
            <span>Settings & Privacy</span>
            <div className="rArrow">
                <i className="right_icon"></i>
            </div>
        </div>
        <div className="menu_item hover3" onClick={()=>setVisible(2)}>
            <div className="small_circle">
                <i className="help_filled_icon"></i>
            </div>
            <span>Help & Support</span>
            <div className="rArrow">
                <i className="right_icon"></i>
            </div>
        </div>
        <div className="menu_item hover3" onClick={()=>setVisible(3)}>
            <div className="small_circle">
                <i className="dark_filled_icon"></i>
            </div>
            <span>Display & Accessibility</span>
            <div className="rArrow">
                <i className="right_icon"></i>
            </div>
        </div>
        <div className="menu_item hover3">
            <div className="small_circle">
                <i className="logout_filled_icon"></i>
            </div>
            <span onClick={logout}>Logout</span>
            <div className="rArrow">
                <i className="right_icon"></i>
            </div>
        </div>
        </div>}
      {visible === 1 && <SettingsPrivacy setVisible={setVisible}/>}
      {visible === 2 && <HelpSupport setVisible={setVisible}/>}
      {visible === 3 && <DisplayAccessbility setVisible={setVisible}/>}
    </div>
  )
}
export default UserMenu