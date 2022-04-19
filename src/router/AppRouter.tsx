import { Route, Routes } from "react-router-dom";
import { PageLayout } from "../layout/PageLayout";
import { Home } from "../pages/Home";
import { Test } from "../pages/Test";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<PageLayout children={<Home />} />} />
            <Route path="/test" element={<PageLayout children={<Test />} />} />
        </Routes>
    );
};
