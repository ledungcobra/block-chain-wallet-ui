import { Alert } from "antd";
import axios from "axios";
import React from "react";
import { API_URL } from "../..";
import { getWallet } from "../../utils/utils";
import { BalanceResponse } from "../AccountWallet";
import Button from "../Button";

type Props = {};

const calcFee = (amount: number) => {
    if (amount < 50) {
        return 1;
    } else if (amount > 50) {
        return Math.floor((amount * 10) / 100);
    } else if (amount > 200) {
        return Math.floor((amount * 20) / 100);
    } else if (amount > 500) {
        return Math.floor((amount * 30) / 100);
    }
    return 0;
};
const SendMoneyCard = (props: Props) => {
    const [amount, setAmount] = React.useState("");
    const [address, setAddress] = React.useState("");

    const [balance, setBalance] = React.useState(0);
    const wallet = getWallet();
    const [msg, setMsg] = React.useState("");
    React.useEffect(() => {
        axios
            .post(`${API_URL}/wallet/getbalance`, {
                address: wallet?.address,
            })
            .then((res) => {
                const balanceOrNull = (res.data as BalanceResponse).data;
                if (balanceOrNull) {
                    setBalance((res.data as BalanceResponse).data);
                } else {
                    // TODO error
                }
            });
    }, []);

    const handleSend = () => {
        if (!amount || !address) {
            setMsg("Please fill all fields");
            return;
        }

        if (balance < +amount) {
            setMsg("You don't have enough money");
            setTimeout(function () {
                setMsg("");
            }, 3000);
            return;
        } else {
            setMsg("Sending your money your request will be handle soon...");

            axios.post(`${API_URL}/wallet/send`, {
                private_address: wallet?.private_key,
                to_address: address,
                amount: +amount,
            });
            setTimeout(function () {
                setMsg("");
            }, 3000);
        }
    };
    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="shadow-2xl w-3/4 bg-white-300 h-3/4 m-5 p-5 rounded-lg space-y-3 pt-32">
                <div className="text-xl font-bold">Send</div>
                <div className="mt-5">
                    <div className="space-x-3 flex w-full">
                        <input
                            className="appearance-none border-2 
                                border-gray-200 rounded w-full py-2 px-4
                        
                                text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name"
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />

                        <input
                            className=" appearance-none border-2 
                                border-gray-200 rounded w-full py-2 px-4
                                bg-white
                                text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Address receive"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex space-x-3 items-center">
                    <div className="text-xl font-bold">Fee</div>
                    <p className="font-bold">{calcFee(+amount || 0)}$</p>
                </div>

                <div className="flex w-full justify-end mt-5">
                    <Button onClick={handleSend} className="bg-blue-500">
                        Send
                    </Button>
                </div>

                <Alert type="success" description={msg} />
            </div>
        </div>
    );
};

export default SendMoneyCard;
