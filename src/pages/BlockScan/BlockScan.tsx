import axios from "axios";
import React from "react";
import { API_URL } from "../..";
import HeaderBlockScan from "../../components/HeaderBlockScan/HeaderBlockScan";
import "./BlockScan.scss";
import { BlockItem } from "./components/BlockItem";
import { CardItem } from "./components/CardItem";
import { TransactionItem } from "./components/TransactionItem";
type Props = {};

export type BlockInfo = {
    block_hash: string;
    block_height: number;
    timestamp: number;
    tx_count: number;
    mine_by_address: string;
    block_reward: number;
};

export type TransactionInfo = {
    from_address: string;
    to_address: string;
    amount: number;
    timestamp: number;
    block_height: number;
    transaction_hash: string;
    transaction_fee: number;
};

function BlockScan() {
    const [blocks, setBlocks] = React.useState<BlockInfo[]>([]);

    const [transactions, setTransactions] = React.useState<TransactionInfo[]>(
        []
    );

    React.useEffect(() => {
        axios.get(`${API_URL}/block`).then(({ data }) => {
            setBlocks(data.blocks);
            // console.log(data.blocks);
        });

        axios.get(`${API_URL}/transaction`).then(({ data }) => {
            console.log(data);

            setTransactions(data.transactions);
        });
    }, []);

    return (
        <div className="w-full container mx-auto h-screen">
            {/* Scan MyWallet Header */}
            <HeaderBlockScan />

            {/* Scan MyWallet Lastest */}
            <div
                id="lastest"
                className="flex justify-center w-full pt-24 space-x-3 h-full "
            >
                <CardItem
                    title="Lastest Blocks"
                    node={blocks.map((block) => (
                        <BlockItem data={block} />
                    ))}
                    buttonTitle="View All Blocks"
                />
                <CardItem
                    title="Lastest Transactions"
                    node={transactions.map((block) => (
                        <TransactionItem data={block} />
                    ))}
                    buttonTitle="View All Transactions"
                />
            </div>
        </div>
    );
}

export default BlockScan;
