import "./App.css";
import  { ThemeProvider } from "./context/ThemeContext";
import Container from "./components/Container";
import {UserProvider} from "./context/UserContext";
function App() {
  return (
    <>
      <ThemeProvider> 
        <UserProvider>
          <Container/>
        </UserProvider>
      </ThemeProvider> 
    </>
  );
}

export default App;
