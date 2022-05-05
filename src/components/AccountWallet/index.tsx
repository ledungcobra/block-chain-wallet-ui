import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import axios from "axios";
import React from "react";
// @ts-nocheck
import { CopyToClipboard } from "react-copy-to-clipboard";
import { API_URL } from "../..";
import { getWallet } from "../../utils/utils";
import "./index.scss";
type Props = {
    address?: string;
    amount?: number;
};
export interface BalanceResponse {
    message: string;
    status: number;
    data: number;
}
const AccountWallet = (props: Props) => {
    const [balance, setBalance] = React.useState(0);
    const wallet = getWallet();

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

    return (
        <div className="bg-blue-700 w-full h-80 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
            <div className="font-bold text-blue-400">Your account</div>
            <div className="text-xl font-bold text-white truncate">
                {wallet?.address}
            </div>
            <div className="text-xl font-bold text-white">$ {balance}</div>
            <div className="flex justify-end space-x-3">
                <CopyToClipboard
                    text={wallet?.address || ""}
                    onCopy={() => console.log("Copied")}
                >
                    <Button
                        type="ghost"
                        icon={<FontAwesomeIcon icon={faCopy} color="white" />}
                    />
                </CopyToClipboard>
            </div>
        </div>
    );
};

export default AccountWallet;
