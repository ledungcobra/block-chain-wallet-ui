import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageLayout } from "../layout/PageLayout";
import CreateWallet from "../pages/CreateWallet";
import { Home } from "../pages/Home/Home";
import { WalletPage } from "../pages/WalletPage";
interface AppState {
    isLoading: boolean;
    loggedIn: boolean;
}

// Create Context for AppState
export const AppStateContext = React.createContext<AppState | undefined>(
    undefined
);

export const AppRouter = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);

    return (
        <AppStateContext.Provider
            value={{ isLoading: false, loggedIn: loggedIn }}
        >
            <Routes>
                <Route
                    path="/wallet"
                    element={<PageLayout children={<WalletPage />} />}
                />
                <Route path="/" element={<PageLayout children={<Home />} />} />
                <Route
                    path="/create-wallet"
                    element={<PageLayout children={<CreateWallet />} />}
                />
            </Routes>
        </AppStateContext.Provider>
    );
};
