import React from "react";
import Wallet from "../../assets/images/wallet.png";
import AccountWallet from "../AccountWallet";
import Button from "../Button";

function SideBar() {
    const onLogoutClicked = () => {
        // TODO:
    };

    return (
        <aside className="w-96 h-screen" aria-label="Sidebar">
            <div className="px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-lg space-y-4 flex flex-col h-full  pt-20">
                <div className="flex justify-center">
                    <img src={Wallet} alt="" className="w-40" />
                </div>
                <AccountWallet address="0x123456123456787" amount={999999} />
                <div className="flex justify-between flex-col h-full">
                    <div className="flex flex-col space-y-3 mt-20">
                        <Button>Block Explorer</Button>
                        <Button>Download Wallet File</Button>
                    </div>

                    <Button onClick={onLogoutClicked}>Logout</Button>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;
