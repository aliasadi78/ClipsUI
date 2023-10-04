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
import templateContext from "./templateContext";
import './template.css'
import resultContext from "../../resultContext";
export default function CreateTemplate(props) {
    let templateTmp = []
    let result = useContext(resultContext)
    const [templateDetail, setTemplateDetail] = useState([])
    const templates = useContext(templateContext)
    const [template, setTemplate] = useState({
        templateName: '',
        templateDescription: '',
        templateDetail: [
            {
                valueType: '',
                name: '',
                type: ''
            }
        ],
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        for (let i = 0; i < templateDetail.length; i++) {
            templateTmp[i] = {
                valueType: data.get('typeOfValue-' + i),
                name: data.get('detailName-' + i),
                type: data.get('detailType-' + i)
            }
        }
        let tmp = {
            templateName: data.get('templateName'),
            templateDescription: data.get('templateDescription'),
            templateDetail: templateTmp
        }
        console.log(tmp)
        setTemplate(tmp)
        result.push(tmp)
        templates.push(template)
        console.log(result)
        console.log(template)
        console.log(templates)
    };
    const handleChange = (event) => {
        for (let i = 0; i < event.target.value; i++) {
            templateTmp.push(
                <div key={i}>
                    <Box sx={{minWidth: 120}}>
                        <TextField className="field" id={"typeOfValue-" + i} label={"typeOfValue-" + i} name={"typeOfValue-" + i}
                                   variant="outlined" sx={{m: 2}}/>
                        <TextField className="field" id={"detailName-" + i} label={"detailName-" + i} name={"detailName-" + i}
                                   variant="outlined" sx={{m: 2}}/>
                        <TextField className="field" id={"detailType-" + i} label={"detailType-" + i} name={"detailType-" + i}
                                   variant="outlined" sx={{m: 2}}/>
                    </Box>
                </div>
            )
        }
        setTemplateDetail([...templateTmp])
    };
    return (
        <div className='template'>
            <div>
                Template
            </div>
            <div>
                <Box component="form" onSubmit={handleSubmit} label="template" sx={{m: 2}}>
                    <TextField className="field" id="templateName" label="templateName" name="templateName"
                               variant="outlined" sx={{m: 2}} />
                    <TextField
                        id="templateDescription"
                        label="templateDescription"
                        name="templateDescription"
                        multiline
                        maxRows={7}
                        sx={{m: 2}}
                        className="field"
                    />
                    <TextField className="field" id="templateDetailNumber" label="templateDetailNumber" name="templateDetailNumber" variant="outlined" onChange={handleChange}
                               sx={{m: 2}}/>
                    <div>{templateDetail.map(item => {
                        return item
                    })}</div>
                    <Button className="btn" type="submit" fullWidth variant="contained" sx={{mt: 2, mb: 2}}>
                        Submit Template
                    </Button>
                </Box>
            </div>

        </div>
    )
}