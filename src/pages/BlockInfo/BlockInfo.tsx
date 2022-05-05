import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../..";
import HeaderBlockScan from "../../components/HeaderBlockScan/HeaderBlockScan";
import { calculateTimeDiffFromNow } from "../../utils/utils";
import { BlockInfo } from "../BlockScan/BlockScan";

type Props = {};

const BlockInfoPage = (props: Props) => {
    const blockHeight = useParams().blockHeight;
    const [currentBlock, setCurrentBlock] = React.useState<BlockInfo | null>(
        null
    );

    React.useEffect(() => {
        if (!blockHeight) return;
        axios.get(`${API_URL}/block/${blockHeight}`).then(({ data }) => {
            setCurrentBlock(data);
        });
    }, [blockHeight]);

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
                                    Block hash:
                                </p>
                                <p
                                    className="text-blue-300 mb-1"
                                    style={{ flex: 2 }}
                                >
                                    {currentBlock.block_hash}
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
                                    className="text-blue-300 mb-1"
                                    style={{ flex: 2 }}
                                >
                                    {currentBlock.block_height}
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
                                    className="text-blue-300 mb-1"
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
                                    Transaction count:
                                </p>
                                <p
                                    className="text-blue-300 mb-1"
                                    style={{ flex: 2 }}
                                >
                                    {currentBlock.tx_count}
                                </p>
                            </div>
                            <div className="flex pt-3">
                                <p className="flex-1 mb-1">
                                    <FontAwesomeIcon
                                        icon={faQuestionCircle}
                                        color="gray"
                                    />{" "}
                                    Reward:
                                </p>
                                <p
                                    className="text-blue-300 mb-1"
                                    style={{ flex: 2 }}
                                >
                                    {currentBlock.block_reward}
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

export default BlockInfoPage;
