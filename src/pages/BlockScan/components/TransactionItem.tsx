import { Link } from "react-router-dom";
import { calculateTimeDiffFromNow } from "../../../utils/utils";
import { TransactionInfo } from "../BlockScan";

export const TransactionItem = ({ data }: { data: TransactionInfo }) => {
    return (
        <Link to={`/transaction/${data.transaction_hash}`}>
            <div className="flex justify-between items-center w-full px-2 py-1 ">
                {/* Header */}
                <div className="flex space-x-3">
                    <div className="bg-gray-200 w-10 h-10 rounded flex items-center justify-center">
                        <span className="font-bold text-gray-500">Tx</span>
                    </div>
                    <div className="flex flex-col h-100 justify-center">
                        <span className="text-blue-600">
                            {data.transaction_hash.slice(0, 20)}......
                        </span>
                        <span className="text-gray-500">
                            {calculateTimeDiffFromNow(data.timestamp)}
                        </span>
                    </div>
                </div>
                {/* Content */}
                <div className="flex flex-col">
                    <span>
                        From{" "}
                        <span className="text-blue-500">
                            {data.from_address}
                        </span>
                    </span>
                    <span>
                        To{" "}
                        <span className="text-blue-500">{data.to_address}</span>
                    </span>
                </div>
                {/* Fee */}

                <div className="money w-20 h-6 bg-gray-300 text-center text-gray-500">
                    {data.amount} $
                </div>
            </div>
        </Link>
    );
};
