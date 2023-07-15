import axios from 'axios'
import { useState } from 'react'
import './style.css'
const SendVerification = ({user}) => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const sendVerification = async () => {
        try{
            const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/resend`,{},{
                headers: {
                    Authorization : `Bearer ${user.token}`
                }
            })
            setSuccess(data.message)
        }
        catch(error){
            setError(error.response.data.message)
        }
    }
  return (
    <div className='send_verification'>
        <span>
            Your account is not verified. Please verify your account before
            it gets deleted after a month from creating <br />
        </span>
        <a onClick={sendVerification}>Click here to send verification link</a>
        {success && <div className='success_text'>{success}</div>}
        {error && <div className='error_text'>{error}</div>}
    </div>
  )
}
export default SendVerification