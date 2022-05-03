import { faCopy, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import React from "react";
import "./index.scss";

type Props = {
    address?: string;
    amount?: number;
};

const AccountWallet = (props: Props) => {
    return (
        <div className="bg-blue-700 w-full h-80 rounded-2xl p-5 space-y-4 flex flex-col justify-between">
            <div className="font-bold text-blue-400">Your account</div>
            <div className="text-xl font-bold text-white">{props.address}</div>
            <div className="text-xl font-bold text-white">$ {props.amount}</div>
            <div className="flex justify-end space-x-3">
                <Button
                    type="ghost"
                    icon={<FontAwesomeIcon icon={faRefresh} color="white" />}
                />
                <Button
                    type="ghost"
                    icon={<FontAwesomeIcon icon={faCopy} color="white" />}
                />
            </div>
        </div>
    );
};

export default AccountWallet;
