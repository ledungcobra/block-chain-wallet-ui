import {
    faCheckCircle,
    faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../..";
import HeaderBlockScan from "../../components/HeaderBlockScan/HeaderBlockScan";
import { calculateTimeDiffFromNow } from "../../utils/utils";
import { TransactionInfo } from "../BlockScan/BlockScan";
type Props = {};

const TransactionInfoPage = (props: Props) => {
    const transactionHash = useParams().transactionHash;
    const [currentBlock, setCurrentTx] = useState<TransactionInfo | null>(null);

    useEffect(() => {
        if (!transactionHash) return;
        axios
            .get(`${API_URL}/transaction/${transactionHash}`)
            .then(({ data }) => {
                setCurrentTx(data);
            });
    }, [transactionHash]);

    if (currentBlock === null) {
        return (
            <div className="w-full h-full pt-52">
                <HeaderBlockScan />
            </div>
        );
    }

    return (
        <div className="w-full h-full pt-52">
            <HeaderBlockScan />
            <div className="container mx-auto w-full h-full">
                <div className="border rounded-md bg-white w-5/6 mx-auto">
                    <div className="font-bold text-blue-600 border-b p-5 text-lg">
                        Overview
                    </div>
                    {/* Left */}
                    <div className="flex p-5 w-full">
                        <div className="flex flex-col divide-y w-full">
                            <div className="flex">
                                <p className="flex-1 mb-1">
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        color="gray"
                                    />{" "}
                                    Transaction hash:
                                </p>
                                <p
                                    className="text-blue-400 mb-1"
                                    style={{ flex: 2 }}
                                >
                                    {currentBlock.transaction_hash}
                                </p>
                            </div>
                            <div className="flex pt-3">
                                <p className="flex-1 mb-1">
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        color="gray"
                                    />{" "}
                                    Status:
                                </p>
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </div>
                            <div className="flex pt-3">
                                <p className="flex-1 mb-1">
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        color="gray"
                                    />{" "}
                                    From:
                                </p>
                                <p
                                    className="text-blue-400 mb-1"
                                    style={{ flex: 2 }}
                                >
                                    {currentBlock.from_address}
                                </p>
                            </div>
                            <div className="flex pt-3">
                                <p className="flex-1 mb-1">
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        color="gray"
                                    />{" "}
                                    To:
                                </p>
                                <p
                                    className="text-blue-400 mb-1"
                                    style={{ flex: 2 }}
                                >
                                    {currentBlock.to_address}
                                </p>
                            </div>
                            <div className="flex pt-3">
                                <p className="flex-1 mb-1">
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        color="gray"
                                    />{" "}
                                    Amount:
                                </p>
                                <p
                                    className="text-blue-400 mb-1"
                                    style={{ flex: 2 }}
                                >
                                    {currentBlock.amount}
                                </p>
                            </div>
                            <div className="flex pt-3">
                                <p className="flex-1 mb-1">
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        color="gray"
                                    />{" "}
                                    Timestamp:
                                </p>
                                <p
                                    className="text-blue-400 mb-1"
                                    style={{ flex: 2 }}
                                >
                                    {calculateTimeDiffFromNow(
                                        currentBlock.timestamp
                                    )}
                                </p>
                            </div>
                            <div className="flex pt-3">
                                <p className="flex-1 mb-1">
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        color="gray"
                                    />{" "}
                                    Transaction fee:
                                </p>
                                <p
                                    className="text-blue-400 mb-1"
                                    style={{ flex: 2 }}
                                >
                                    {currentBlock.transaction_fee}
                                </p>
                            </div>
                            <div className="flex pt-3">
                                <p className="flex-1 mb-1">
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        color="gray"
                                    />{" "}
                                    Block height:
                                </p>
                                <p
                                    className="text-blue-400 mb-1"
                                    style={{ flex: 2 }}
                                >
                                    {currentBlock.block_height}
                                </p>
                            </div>
                        </div>

                        {/* Right */}
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionInfoPage;
