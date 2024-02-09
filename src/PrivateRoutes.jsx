import { Outlet, Navigate } from "react-router-dom";
import { getAuthToken } from "./services/AuthService";

export function PrivateRoutes() {
    let authToken = getAuthToken();

    return (authToken ? <Outlet/> : <Navigate to="/login" />);
}