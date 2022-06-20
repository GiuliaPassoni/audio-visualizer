//style
import './App.css';

// react libraries
import React from "react";
import {Route, Routes} from "react-router-dom";
// import {createContext, useState} from "react";
import { createTheme, ThemeProvider, CssBaseline} from "@mui/material";
import {amber, grey, deepOrange} from '@mui/material/colors';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

//components
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Homepage from "./pages/Homepage";
import Visualiser from "./pages/Visualiser";
import Support from "./pages/Support";
import Login from "./pages/Login";

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// simplest: default dark mode from mui
// const theme = createTheme({
//     palette:{
//         mode:'dark'
//     }
// })

//custom palette
const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                // primary: amber,
                // divider: amber[200],
                // text: {
                //     primary: grey[900],
                //     secondary: grey[800],
                // },
            }
            : {
                // palette values for dark mode
                // primary: deepOrange,
                // divider: deepOrange[700],
                // background: {
                //     default: deepOrange[900],
                //     paper: deepOrange[900],
                // },
                // text: {
                //     primary: '#fff',
                //     secondary: grey[500],
                // },
            }),
    },
});


function App() {
    const [mode, setMode] = React.useState('light');
    // const colorMode = React.useMemo(
    //     () => ({
    //         // The dark mode switch would invoke this method
    //         toggleColorMode: () => {
    //             setMode((prevMode: PaletteMode) =>
    //                 prevMode === 'light' ? 'dark' : 'light',
    //             );
    //         },
    //     }),
    //     [],
    // );


    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
      // <ColorModeContext.Provider value={colorMode}> {/*remove this if going for default*/}
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <Navbar mode={mode} setMode={setMode} />
              <div className='app-container'>
                  <Routes>
                      <Route path='/' element={<Homepage/>} />
                      <Route path='/login' element={<Login/>} />
                      <Route path='/visualiser' element={<Visualiser/>} />
                      <Route path='/support' element={<Support/>} />
                  </Routes>
                  <Footer/>
              </div>
          </ThemeProvider>
      // </ColorModeContext.Provider>
  );
}

export default App;
