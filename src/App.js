import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store  from "./toolkit/store";

import {router} from "./router/router";

import {ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {theme} from "./themes/theme";

// import { persistor } from "./toolkit/store";
// import { PersistGate } from "redux-persist/integration/react";


function App () {

    return (
        <Provider store={store}>
            {/*<PersistGate persistor={persistor} loading={<div>...loading</div>}>*/}
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
            {/*</PersistGate>*/}
        </Provider>
    )
}

export default App;