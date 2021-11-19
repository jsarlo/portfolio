import './App.css';
import './Components/About';
import About from './Components/About';
import Header from './Components/Header';
import 'rsuite/dist/rsuite.min.css';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './Components/UseDarkMode';
import { lightTheme, darkTheme } from './Components/Themes';
import { GlobalStyles } from './Components/GlobalStyles';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header themeToggler={themeToggler}/>
          <About />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
