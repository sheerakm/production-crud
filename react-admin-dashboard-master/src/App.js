import { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import DataSheets from "./scenes/datasheets";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import LOGIN from "./scenes/login";
import UserManager from "./scenes/usermanager";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content">
              <Routes>
              <Route path="/" element={<LOGIN />} />
              <Route path="/login" element={<Navigate to="/" />} />
              </Routes> 
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
    
  } else {
  // console.log(isSidebar)
  // console.log(location.pathname)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/login" element={<Navigate to="/" />} />

              <Route path="/dashboard" element = {<Dashboard />} />
              <Route path="/datasheets" element = {<DataSheets />} />
              <Route path="/users" element = {<UserManager />} />

              {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} /> 
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}

            </Routes> 
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
            }
}

export default App;
