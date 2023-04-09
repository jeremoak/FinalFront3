import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Switch from "@mui/material/Switch";
import GlobalContextProvider from "../../../Context/GlobalContext";

const Navbar = () => {
    const { state, dispatch } = useContext(GlobalContextProvider);

    const handleChange = () => {
        dispatch({ type: "SWITCH_MODE" });
    };

    return (
        <div>
        <h2>Este es el navbar</h2>

        <Switch
            checked={state.isDark}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
        />

        <Link to="/favs">Ir a favoritos</Link>

        <div style={{ minHeight: "80vh" }}>
            <Outlet />
        </div>
        </div>
    );
};

export default Navbar;