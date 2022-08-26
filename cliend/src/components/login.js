import React from 'react';
import { useState } from "react";

import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

const Login = () => {
    const [inputValue, setInputvalue] = useState({
        username: "",
        password: ""
    })

    const { username, password } = inputValue;
    const inputvalue = (data) => event => {
        setInputvalue({ ...inputValue, [data]: event.target.value })
    }

    const request = (e) => {
        e.preventDefault();

        //console.table({username, password});
        axios.post(`${process.env.REACT_APP_API}/user`, {username, password}).then(
            response => { console.table(response.data) }
        ).catch(err => {
            alert(err.response.data.error)
        })
    }

    return (
        <FormControl>
           
            <h2>LOGIN</h2>
            <TextField sx={{ m: 2 }} id="outlined-username" label="Username" variant="outlined" value={username} onChange={inputvalue("username")} />
            <TextField sx={{ m: 2 }} id="outlined-password" type="password" label="Password" variant="outlined" value={password} onChange={inputvalue("password")} />
            <Button type="submit" size="large" sx={{ m: 2 }} variant="contained" onClick={request}>LOGIN</Button>
        </FormControl>
    );
}

export default Login;


