import { calculateTimeDiffFromNow } from "../../../utils/utils";
import { BlockInfo } from "../BlockScan";

export const BlockItem = ({ data }: { data: BlockInfo }) => {
  return (
      <div className="flex justify-between items-center w-full px-2 py-1 ">
          {/* Header */}
          <div className="flex space-x-3">
              <div className="bg-gray-200 w-10 h-10 rounded flex items-center justify-center">
                  <span className="font-bold text-gray-500">Bk</span>
              </div>
              <div className="flex flex-col h-100 justify-center">
                  <span className="text-blue-600">{data.block_height}</span>
                  <span className="text-gray-500">
                      {calculateTimeDiffFromNow(data.timestamp)}
                  </span>
              </div>
          </div>
          {/* Content */}
          <div className="flex flex-col">
              <span>
                  Miner{" "}
                  <span className="text-blue-500">
                      {data.mine_by_address}
                  </span>
              </span>
              <span>
                  Tx Count{" "}
                  <span className="text-blue-500">{data.tx_count}</span>
              </span>
          </div>
          {/* Fee */}

          <div className="money w-20 h-6 bg-gray-300 text-center text-gray-500">
              {data.block_reward} $
          </div>
      </div>
  );
};