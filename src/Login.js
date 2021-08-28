import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { provider } from './firebase'
import { getAuth, signInWithPopup } from 'firebase/auth'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'


function Login() {
    const [state, dispatch] = useStateValue()

    const auth = getAuth()
    const signIn = () => {
        signInWithPopup(auth, provider)
        .then(result=> {
            dispatch({
                type: actionTypes.SET_USER,
            user: result.user
            })
        }).catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <div className='login__Logo'>
                <img
                 src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'                
                 alt=''
                />
                <img
                src='https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png'
                alt=''
                />
                
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
