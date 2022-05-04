import Button from "../../../components/Button";

export const CardItem = ({
    node,
    title,
    onReadMoreClicked,
    buttonTitle,
}: {
    title: string;
    node: React.ReactNode[];
    onReadMoreClicked?: () => void;
    buttonTitle?: string;
}) => {
    return (
        <div className="w-full h-3/4 rounded-md bg-white border flex flex-col">
            <div className="font-bold mb-5 border-b p-4">{title}</div>
            <div
                className="divide-y h-full overflow-y-auto mb-5"
                id="blocks-container"
            >
                {node}
            </div>
            <Button onClick={onReadMoreClicked} className="bg-green-700">
                {buttonTitle}
            </Button>
        </div>
    );
};
