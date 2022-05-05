import Search from "antd/lib/input/Search";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../..";
import Logo from "../../assets/images/logo.png";
type Props = {};

const HeaderBlockScan = (props: Props) => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [input, setInput] = React.useState<string>("");
    const navigate = useNavigate();

    const handleOnSearch = (value: string) => {
        setLoading(true);

        if (value !== "") {
            axios
                .get(`${API_URL}/search?search=${input}`)
                .then(({ data }) => {
                    if (!data) {
                        return;
                    }
                    console.log(data);
                    if (data.type === "tx") {
                        navigate(`/transaction/${data.data.transaction_hash}`);
                    } else if (data.type === "block") {
                        navigate(`/block/${data.data.block_height}`);
                    } else {
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    return (
        <div className="scaning-header fixed shadow-sm top-0 left-0 w-screen h-12 bg-gradient-to-r from-green-900 to-blue-500 ">
            <div className="container mx-auto h-full flex items-center justify-between">
                <img className="w-32" src={Logo} alt="logo" />
                {/* Search input container */}

                <div id="search-container" className=" flex-1 ml-12">
                    <Search
                        className="w-full"
                        onSearch={handleOnSearch}
                        placeholder="Input block height/ block hash or transaction hash to search"
                        enterButton="Search"
                        size="large"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderBlockScan;
