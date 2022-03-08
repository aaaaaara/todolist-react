import { ThemeProvider } from "styled-components";
import TodoList from "./Components/TodoList";
import GlobalStyle from "./styles/Global";
import { theme } from "./styles/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
