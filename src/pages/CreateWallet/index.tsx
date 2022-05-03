import { faPaperPlane, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Steps } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
type Props = {};
const Step = Steps.Step;
const steps = [
    "STEP 1.Create password",
    "STEP 2.Create wallet",
    "STEP 3.Well done",
];

const minPassChars = 4;

const CreateWallet = (props: Props) => {
    const [step, setStep] = React.useState(0);
    const [error, setError] = React.useState("");
    const handleNext = () => {
        if (step === 0) {
            setStep(1);
        } else if (step === 1) {
            // Handle download wallet
            setStep(2);
        } else if (step === 2) {
            // Nothing to next
        }
    };

    return (
        <div className="container mx-auto pt-32 h-full">
            <div className="w-5/12 mx-auto shadow-xl px-10 py-10 space-y-6 flex flex-col">
                <Steps size="small" current={step}>
                    <Step title={steps[0]} />
                    <Step title={steps[1]} />
                    <Step title={steps[2]} />
                </Steps>
                {step === 0 && <Step0 handleNext={handleNext} />}
                {step === 1 && <Step1 handleNext={handleNext} />}
                {step === 2 && <Step2 />}
            </div>
        </div>
    );
};

export default CreateWallet;

interface StepProps {
    handleNext: () => void;
}

const Step0 = ({ handleNext }: StepProps) => {
    const [password, setPassword] = React.useState("");
    const [repassword, setRepassword] = React.useState("");
    const [error, setError] = React.useState("");
    const next = () => {
        if (password.length < minPassChars) {
            setError(
                "Password must be at least " + minPassChars + " characters"
            );
            return;
        }

        if (password === repassword) {
            handleNext();
        } else {
            setError("Passwords do not match");
        }
    };

    return (
        <div id="step1" className="space-y-6 flex flex-col">
            <p>STEP 1.</p>
            Create password
            {/* Input password antd */}
            <Input.Password
                placeholder="Input password"
                minLength={minPassChars}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => {
                    if (password.length < minPassChars) {
                        setError(
                            `Password must be at least ${minPassChars} characters`
                        );
                        setTimeout(() => setError(""), 3000);
                    }
                }}
            />
            <Input.Password
                placeholder="Repeat password"
                minLength={minPassChars}
                onChange={(e) => setRepassword(e.target.value)}
                onBlur={() => {
                    if (password.length < minPassChars) {
                        setError(
                            `Repeat password must be at least ${minPassChars} characters`
                        );
                        setTimeout(() => setError(""), 3000);
                    }
                }}
            />
            <small className="text-red-400 h-3">{error}</small>
            <div className="flex justify-end w-full">
                <Button className="bg-green-700 w-70" onClick={next}>
                    Create
                </Button>
            </div>
            <div className="rounded bg-yellow-600 h-full p-4">
                <p className="font-bold">
                    <FontAwesomeIcon icon={faWarning} color="yellow" /> DO NOT
                    SHARE PASSWORD AND THAT FILE TO ANYONE
                </p>
                <p className="w-full">
                    This information is sensitive. You will need your keystore
                    file + password to access your wallet. Please save them in a
                    secure location. We CAN NOT retrieve or reset your
                    keystore/password if you lose them.
                </p>
            </div>
        </div>
    );
};

const Step1 = ({ handleNext }: StepProps) => {
    const handleDownloadWalletAndNext = () => {
        // TODO: download wallet json
        handleNext();
    };

    return (
        <div id="step1" className="space-y-6 flex flex-col">
            <p>STEP 2.</p>
            <div>
                <p className="text-2xl font-bold mb-2">
                    Download keystore file
                </p>
                <p className="text-gray-400">
                    Important thing to know before download keystore file
                </p>
            </div>
            <div className="cards flex justify-between space-x-3 flex-1 items-center">
                <div
                    className="rounded border-2 border-green-500 w-full 
                                h-full p-2 justify-center 
                                items-center flex flex-col py-16"
                >
                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        fontSize="50px"
                        color="green"
                    />
                    <p className="font-bold">Don't lose it</p>
                    <p className="text-center">
                        Be careful, it can not be recovered if you lose it.
                        <br />
                        <br />
                    </p>
                </div>
                <div
                    className="rounded border-2 border-green-500 w-full 
                                h-full p-2 justify-center 
                                items-center flex flex-col py-16"
                >
                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        fontSize="50px"
                        color="green"
                    />
                    <p className="font-bold">Don't share it</p>
                    <p className="text-center">
                        Your funds will be stolen if you use this file on a
                        malicious phishing site.
                    </p>
                </div>
                <div
                    className="rounded border-2 border-green-500 w-full 
                                h-full p-2 justify-center 
                                items-center flex flex-col py-16"
                >
                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        fontSize="50px"
                        color="green"
                    />
                    <p className="font-bold">Make backup</p>
                    <p className="text-center">
                        Secure it like the millions of dollars it may one day be
                        worth.
                    </p>
                </div>
            </div>
            <div>
                <Button
                    className="bg-green-700"
                    onClick={handleDownloadWalletAndNext}
                >
                    Acknowledge {"&"} Download
                </Button>
            </div>
        </div>
    );
};

const Step2 = () => {
    const navigate = useNavigate();
    const handleOpenWallet = () => {
        navigate("/wallet");
    };
    return (
        <div id="step2" className="space-y-6 flex flex-col">
            <p>STEP 3.</p>
            <div>
                <p className="text-2xl font-bold mb-2">Your are done!</p>
                <p className="">
                    You are able to access your wallet with your keystore file
                    by clicking the button below.
                </p>
            </div>

            <div>
                <Button onClick={handleOpenWallet} className="bg-green-700">
                    Access Wallet
                </Button>
            </div>
        </div>
    );
};
