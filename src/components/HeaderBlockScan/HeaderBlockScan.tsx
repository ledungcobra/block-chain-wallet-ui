import Search from "antd/lib/input/Search";
import React from "react";
import Logo from "../../assets/images/logo.png";
type Props = {};

const HeaderBlockScan = (props: Props) => {
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleOnSearch = (value: string) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
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
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderBlockScan;
