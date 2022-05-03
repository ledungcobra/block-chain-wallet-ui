import React from "react";
import Button from "../Button";

type Props = {};

const SendMoneyCard = (props: Props) => {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="shadow-2xl w-3/4 bg-white-300 h-3/4 m-5 p-5 rounded-lg space-y-3">
                <div className="text-xl font-bold">Send</div>
                <div className="mt-5">
                    <div className="space-x-3 flex w-full">
                        <input
                            className="appearance-none border-2 
                                border-gray-200 rounded w-full py-2 px-4
                        
                                text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Amount"
                            value={""}
                        />

                        <input
                            className=" appearance-none border-2 
                                border-gray-200 rounded w-full py-2 px-4
                                bg-white
                                text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="inline-full-name"
                            type="text"
                            placeholder="Address receive"
                            value={""}
                        />
                    </div>
                </div>
                <div className="text-xl font-bold">Select fee</div>
                
                <div className="flex w-full justify-end mt-5">
                    <Button className="bg-blue-500">Send</Button>
                </div>
            </div>
        </div>
    );
};

export default SendMoneyCard;
