import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import Button from './Button'
import Header from './Header'
import Login from './Login';

function Container() {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
        <Header/>
        <hr/>
        <Button/>
        <hr />
        <Login/>
    </div>
  )
}

export default Container