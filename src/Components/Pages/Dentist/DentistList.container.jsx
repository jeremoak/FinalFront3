import React, { useContext, useEffect, useState } from 'react'
import DentistList from './DentistList'
import axios from 'axios'
import { GlobalContext } from '../../../Context/GlobalContext'

const DentistListcontainer = () => {

    const [state, dispatch] = useContext(GlobalContext)
    useEffect(() => {
        const getProfesionals = axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        getProfesionals
            .then((res) => dispatch({ type: "GET_DENTIST", payload: res.data }))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <DentistList dentits={state.dentist} dispatch={dispatch} favs={state.favs}/>
        </div>
    )
}

export default DentistListcontainer