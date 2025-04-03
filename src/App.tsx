import Labs from "./Labs";
import Kambaz from "./Kambaz";
import { HashRouter, Navigate, Route, Routes } from "react-router";
import store from "./Kambaz/store";
import { Provider } from "react-redux";
import Session from "./Kambaz/Account/Session";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Session>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Kambaz" />} />
              <Route path="/Labs/*" element={<Labs />} />
              <Route path="/Kambaz/*" element={<Kambaz />} />
            </Routes>
          </div>
        </Session>
      </Provider>
    </HashRouter>
  );
}

export default App;
