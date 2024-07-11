import { useState } from "react";
import { Routes, Router, Route, useLocation, Navigate } from "react-router-dom";
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
import ProtectedRoute from "./components/protected";
import Cookies from 'js-cookie';
import { useEffect } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Check the authentication cookie when the component mounts
    const checkAuth = () => {
      const token = Cookies.get('Authorization');
      console.log(token, "token");
      setIsAuthenticated(!!token);
      console.log(!!token, "token is ");
    };

    checkAuth();
    

    // Check the authentication cookie every 5 seconds
    const intervalId = setInterval(checkAuth, 5000);
    // return () => clearInterval(intervalId);
  }, []);


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

              <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />} />
              <Route path="/datasheets" element={<ProtectedRoute element={<DataSheets />} isAuthenticated={isAuthenticated} />} />
              <Route path="/users"  element={<ProtectedRoute element={<UserManager />} isAuthenticated={isAuthenticated} />} />
              <Route path="/users2" element={<UserManager />} />

              {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} /> 
              <Route path="/bar" element={<Bar />} />
                            <Route path="/bar" element={<Bar />} />

              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />

              <Route path="/geography" element={<Geography />} /> */}
              <Route path="/calendar" element={<ProtectedRoute element={<Calendar />} isAuthenticated={isAuthenticated} />} />
              <Route path="/faq" element={<ProtectedRoute element={<FAQ />} isAuthenticated={isAuthenticated} />} />

            </Routes> 


          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
            }
}

export default App;
