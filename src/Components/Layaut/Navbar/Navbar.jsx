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
            <div>
                <Link to="/favs"><button>ir aFavoritos</button></Link>
                <Link to="/dentist"><button>Lista de dentistas</button></Link>
                <Link to="/contact"><button>Contactanos</button></Link>
            </div>
            <Switch
                checked={state.isDark}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
            />

            <div style={{ minHeight: "80vh" }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Navbar;