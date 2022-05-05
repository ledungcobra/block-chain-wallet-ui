import React from "react";
import { useNavigate } from "react-router-dom";
import WalletImg from "../../assets/images/wallet.png";
import { Wallet } from "../../pages/AccessWallet/AccessWallet";
import { getWallet } from "../../utils/utils";
import AccountWallet from "../AccountWallet";
import Button from "../Button";

function SideBar() {
    const navigator = useNavigate();
    const [wallet, setWallet] = React.useState<Wallet | null>(null);

    React.useEffect(() => {
        setWallet(getWallet());
    }, []);

    const onLogoutClicked = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <aside className="w-96 h-screen" aria-label="Sidebar">
            <div
                className="px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 
                            rounded-lg space-y-4 flex flex-col h-full  pt-20 justify-between"
            >
                <div className="flex justify-center">
                    <img src={WalletImg} alt="" className="w-40" />
                </div>
                <AccountWallet address={wallet?.address} amount={999999} />
                <div className="flex justify-between flex-col h-full ">
                    <div className="flex flex-col space-y-3">
                        <Button onClick={() => navigator("/block-scan")}>
                            Block Explorer
                        </Button>
                        <Button onClick={onLogoutClicked}>Logout</Button>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;
