import { CssBaseline } from "@mui/material";
import Router from "./router/Router";
import UseContextProvider from "./context/Context";
function App() {
  return (
    <UseContextProvider>
      <CssBaseline />
      <Router />
    </UseContextProvider>
  );
}

export default App;
