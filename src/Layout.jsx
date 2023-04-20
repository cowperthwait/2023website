import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="Page-Content-Container-1">
            <Outlet />
        </div>
    );
}
