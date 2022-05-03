export interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div className="h-screen bg-slate-100 w-full">
            <div className="header">
                <div className="logo"></div>
            </div>
            <div className="body h-full">{children}</div>
        </div>
    );
};
