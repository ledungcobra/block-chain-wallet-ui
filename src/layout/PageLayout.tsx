export interface PageLayoutProps {
    children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <div className="container">
            <div className="header">
                <div className="logo"></div>
            </div>
            <div className="body">{children}</div>
            <div className="footer">My Wallet - v1.0.0</div>
        </div>
    );
};
