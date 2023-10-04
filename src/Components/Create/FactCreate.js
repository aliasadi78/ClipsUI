import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useContext, useState} from "react";
import axios from "axios";
import serverURL from "../../RequestConfig/ServerURL";
import Button from "@mui/material/Button";
import factContext from "./factContext";
import './rule.css'
import resultContext from "../../resultContext";
export default function FactCreate(props) {
    const facts = useContext(factContext)
    let result = useContext(resultContext)
    const [fact, setFact] = useState({
        fact: '',
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let tmp = {
            fact: data.get('fact'),
        }
        setFact(tmp)
        facts.push(fact)
        result.push(tmp)
    };

    return (
        <div className='rule'>
            <div>
                Fact
            </div>
            <div>
                <div className=''>
                    <Box component="form" onSubmit={handleSubmit} label="template" sx={{m:2}}>
                    <TextField className="field" id="fact" label="fact" name="fact" variant="outlined" sx={{m: 2}}/>
                    <Button className="btn" type="submit" variant="contained" sx={{mt: 3, mb: 2}}
                    >
                        Submit Fact
                    </Button>
                    </Box>
                </div>
            </div>
        </div>

    )
}