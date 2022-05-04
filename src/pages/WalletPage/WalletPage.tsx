import React from "react";
import SendMoneyCard from "../../components/SendMoneyCard";
import SideBar from "../../components/SideBar";
import { AppStateContext } from "../../router/AppRouter";

export const WalletPage = () => {
    const ctx = React.useContext(AppStateContext);

    return (
        <div className="h-full flex">
            <SideBar />
            <div className="w-full">
                <SendMoneyCard />
            </div>
        </div>
    );
};
