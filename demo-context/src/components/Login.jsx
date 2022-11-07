import {useContext, useState} from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const {user, setUser} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({id: 1, name: 'Necati', bio:'lorem ipsum'})
        }, 2000);
    }
    const handleLogout = () => {
        setTimeout(() => {
            setUser(null);
            setLoading(false)
        }, 1500);
    }

  return (
    <div>
        {!user && (
                <button onClick={handleLogin}> {loading ? 'Loading...' : 'Login' }  </button>
        )}

        {user && (
            <div> 
                <button onClick={handleLogout}>Logout</button>
                <code> {JSON.stringify(user)} </code>
            </div>

        )
        }
        
    </div>
  )
}

export default Login