import { Route, Routes as ReactRoutes } from "react-router";
import { ThemeProvider } from "@mui/material";
import { rootTheme } from "./components/Theme";
import { Navbar } from "./components/nav/Navbar";
import LandingPage from "./pages/LandingPage";
import EventPage from "./pages/EventPage";

// Variable to manually update when we are no longer recruiting. Improved approach to commenting out code as needed :)
const isRecruiting = true;

export const Routes = () => {
    return (
        <ThemeProvider theme={rootTheme}>
            <Navbar id="back-to-top-anchor" isRecruiting={isRecruiting} />
            <ReactRoutes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/past-events" element={<EventPage />} />
            </ReactRoutes>
        </ThemeProvider>
    );
};