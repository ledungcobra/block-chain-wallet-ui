import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Steps } from "antd";
import React from "react";
import Button from "../../components/Button";

type Props = {};
const Step = Steps.Step;
const steps = ["Select file", "Enter password"];

interface Wallet {
    address: string;
    private_key: string;
    public_key: string;
}

const AccessWallet = (props: Props) => {
    const [step, setStep] = React.useState(0);
    const [fileUpload, setFileUpload] = React.useState<Wallet | null>(null);

    const handleNext = () => {
        if (step === 0) {
            setStep(1);
            // TODO next
        } else if (step === 1) {
        }
    };

    return (
        <div className="container mx-auto pt-32 h-full">
            <div className="w-5/12 mx-auto shadow-xl px-10 py-10 space-y-6 flex flex-col">
                <Steps size="small" current={step}>
                    <Step title={steps[0]} />
                    <Step title={steps[1]} />
                </Steps>
                {step === 0 && (
                    <Step0
                        handleNext={(file) => {
                            if (file) {
                                const parsedData = JSON.parse(file)!! as Wallet;
                                console.log(parsedData);
                                setFileUpload(parsedData);
                                handleNext();
                            }
                        }}
                    />
                )}
                {step === 1 && <Step1 />}
            </div>
        </div>
    );
};

interface Step0Props {
    handleNext: (file: any) => void;
}

const Step0 = ({ handleNext }: Step0Props) => {
    const [file, setFile] = React.useState<any>(null);
    const fileRef = React.useRef<any>();

    React.useEffect(() => {
        if (file) {
            handleNext(file);
        }
    }, [file]);

    const handleChange = (e: any) => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = (e) => {
            if (e && e.target && e.target.result) {
                const arr = e.target.result as ArrayBuffer;
                setFile(arr);
            }
        };
    };

    return (
        <div id="step0" className="space-y-6 flex w-full">
            <input
                type="file"
                className="hidden"
                ref={fileRef}
                onChange={handleChange}
            />
            <div>
                <p>STEP 1.</p>
                <p className="font-bold text-lg">Select Your Keystore File</p>
                <p className="mb-1">
                    Select your keystore file to unlock your wallet
                </p>
                <Button
                    onClick={() => {
                        (fileRef?.current as any)?.click();
                    }}
                    className="bg-green-700"
                >
                    Upload File
                </Button>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <FontAwesomeIcon
                    icon={faComputer}
                    fontSize="50px"
                    size="10x"
                    color="gray"
                />
            </div>
        </div>
    );
};

const Step1 = () => {
    const [password, setPassword] = React.useState("");

    return (
        <div id="step1" className="space-y-6 flex w-full">
            <div className="w-full">
                <p>STEP 2.</p>
                <p className="font-bold text-lg">Enter password</p>
                <div className="w-full">
                    <Input.Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-end py-5 w-full">
                    <div className="flex-1" />
                    <Button className="w-48 bg-green-700">Access Wallet</Button>
                </div>
            </div>
        </div>
    );
};

export default AccessWallet;
