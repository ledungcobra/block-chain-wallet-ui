import {
    faCreditCard,
    faCreditCardAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./Home.scss";

export const Home = () => {
    const navigate = useNavigate();

    const handleCreateWallet = () => {
        navigate("/create-wallet");
    };

    const handleAccessWallet = () => {
        navigate("/access-wallet");
    };

    const handleAccessBlockScan = () => {
        navigate("/block-scan");
    };

    return (
        <div className="bg-gradient-to-r from-green-900 to-blue-500 w-screen h-screen">
            <div className="homebg" />
            <div className="w-screen mx-auto py-64 content px-52">
                <div className="container mx-auto flex justify-around">
                    <div id="content">
                        <p className="font-bold text-3xl text-white">
                            MyCoin Wallet
                        </p>
                        <p className="text-white w-72">
                            MyCoin Wallet is a free, client-side interface
                            helping you interact with the MyCoin blockchain. Our
                            easy-to-use, open-source platform allows you to
                            generate wallets, interact with smart contracts, and
                            so much more.
                        </p>
                        <div className="flex justify-between space-x-5">
                            <Button
                                onClick={handleCreateWallet}
                                className="bg-green-700"
                            >
                                Create Wallet
                            </Button>
                            <Button
                                onClick={handleAccessWallet}
                                className="bg-gray-500"
                            >
                                Access wallet
                            </Button>
                        </div>
                        <div className="mt-5">
                            <Button
                                onClick={handleAccessBlockScan}
                                className="bg-green-700"
                            >
                                Access Block Scanning
                            </Button>
                        </div>
                    </div>
                    <div className="cards">
                        <FontAwesomeIcon
                            className="card1"
                            icon={faCreditCard}
                            color="yellow"
                            size="9x"
                        />
                        <FontAwesomeIcon
                            className="card2"
                            icon={faCreditCardAlt}
                            color="black"
                            size="7x"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
