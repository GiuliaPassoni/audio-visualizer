//style
import './App.css';

// react libraries
import React from "react";
import {Route, Routes} from "react-router-dom";
// import {createContext, useState} from "react";
import { createTheme, ThemeProvider, CssBaseline} from "@mui/material";
import {amber, grey, deepOrange} from '@mui/material/colors';

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

// const styles = {
//     paperContainer: {
//         mode === 'dark' ?
//         backgroundImage: `url('data:image/jpeg;base64,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')`;
//         : backgroundImage: `url('https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?cs=srgb&dl=pexels-kellie-churchman-1001682.jpg&fm=jpg')`
//     }
// };

//custom palette
const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: amber, //for button background
                styleOverrides:{
                    background: {
                        default: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
                    }
            }
            }
            : {
                // palette values for dark mode
                primary: deepOrange,
                // background: {
                //     default: "blue"
                // }
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
              <div className='app-container'
                   // style={styles.paperContainer}
              >
                  <Routes>
                      {/*<Route path='/' element={<Homepage/>} />*/}
                      <Route path='/' element={<Login/>} />
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
