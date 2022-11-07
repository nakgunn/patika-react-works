import {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

function Button() {
const themeContext = useContext(ThemeContext);
    return (
    <div>
        Button theme : {themeContext.theme}
        <button onClick={() => ( themeContext.theme === 'light' ? themeContext.setTheme('dark') : themeContext.setTheme('light') )}> Change Theme </button>
    </div>
  )
}

export default Button