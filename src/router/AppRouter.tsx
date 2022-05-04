import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageLayout } from "../layout/PageLayout";
import AccessWallet from "../pages/AccessWallet/AccessWallet";
import BlockInfoPage from "../pages/BlockInfo/BlockInfo";
import BlockScan from "../pages/BlockScan/BlockScan";
import CreateWallet from "../pages/CreateWallet/CreateWallet";
import { Home } from "../pages/Home/Home";
import TransactionInfoPage from "../pages/TransactionInfo/TransactionInfo";
import { WalletPage } from "../pages/WalletPage/WalletPage";
interface AppState {
    isLoading: boolean;
    loggedIn: boolean;
}

// Create Context for AppState
export const AppStateContext = React.createContext<AppState | undefined>(
    undefined
);

const buildRoute = (route: string, node: React.ReactNode) => (
    <Route path={route} element={<PageLayout children={node} />} />
);

export const AppRouter = () => {
    const [loggedIn, setLoggedIn] = React.useState(false);

    return (
        <AppStateContext.Provider
            value={{ isLoading: false, loggedIn: loggedIn }}
        >
            <Routes>
                {buildRoute("/", <Home />)}
                {buildRoute("/wallet", <WalletPage />)}
                {buildRoute("/create-wallet", <CreateWallet />)}
                {buildRoute("/access-wallet", <AccessWallet />)}
                {buildRoute("/block-scan", <BlockScan />)}
                {buildRoute("/block/:blockHeight", <BlockInfoPage />)}
                {buildRoute(
                    "/transaction/:transactionHash",
                    <TransactionInfoPage />
                )}

                {/* 404 route */}
                {buildRoute("*", <Home />)}
            </Routes>
        </AppStateContext.Provider>
    );
};
