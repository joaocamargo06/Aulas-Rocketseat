import { ThemeProvider } from "styled-components";
import { Button } from "./components/Buttons";
import { GlobalStyle } from "./styles/globals";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
