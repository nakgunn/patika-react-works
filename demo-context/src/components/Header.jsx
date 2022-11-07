import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
function Header() {
    const themeContext = useContext(ThemeContext);
  return (
    <div>
        Header Theme: {themeContext.theme}
        <button onClick={() => ( themeContext.theme === 'light' ? themeContext.setTheme('dark') : themeContext.setTheme('light'))}> Change Theme </button>
    </div>
  )
}

export default Header