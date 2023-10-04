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
import ruleContext from "./ruleContext";
import './rule.css'
import resultContext from "../../resultContext";
export default function RuleCreate(props) {
    let ruleDetailTmp = []
    const [ruleDetail, setRuleDetail] = useState([])
    const rules = useContext(ruleContext)
    let result = useContext(resultContext)
    const [rule, setRule] = useState({
        ruleName: '',
        ruleDescription: '',
        ruleDetail: [
            {
                valueType: '',
            }
        ],
        operation: '',
        operationName: '',
        question: '',

    })
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        for (let i = 0; i < ruleDetail.length; i++){
            ruleDetailTmp[i] = {
                valueType: data.get('pattern-'+i),
            }
        }
        let tmp = {
            ruleName: data.get('templateName'),
            ruleDescription: data.get('templateDescription'),
            ruleDetail: ruleDetailTmp,
            operation: data.get('operation'),
            operationName: data.get('operationName'),
            question: data.get('question'),
        }
        setRule(tmp)

        rules.push(rule)
        result.push(tmp)

    };

    const handleChange = (event) => {
        console.log(event.target.value);
        for (let i = 0; i < event.target.value; i++) {
            ruleDetailTmp.push(
                <div key={i}>
                    <Box sx={{minWidth: 120}}>
                        <TextField className="field" id={"pattern-" + i} label={"pattern-" + i} name={"pattern-" + i} variant="outlined" sx={{m:2}}/>

                    </Box>
                </div>
            )
        }
        setRuleDetail([...ruleDetailTmp])
        // console.log(ruleDetail);
    };
    return (
        <div className='rule'>
            <div>
                Rule
            </div>
            <div>
                <Box component="form" onSubmit={handleSubmit} label="template" sx={{m:2}}>
                    <TextField className="field" id="templateName" label="templateName" name="templateName" variant="outlined" sx={{m:2}}/>
                    <TextField
                        id="templateDescription"
                        label="templateDescription"
                        name="templateDescription"
                        multiline
                        maxRows={7}
                        sx={{m:2}}
                        className="field"
                    />
                    <TextField className="field" id="ruleDetailNumber" label="ruleDetailNumber" name="ruleDetailNumber" variant="outlined" onChange={handleChange} sx={{m:2}}/>
                    <div>{ruleDetail.map(item => {
                        return item
                    })}</div>
                    <TextField className="field" id="operation" label="operation" name="operation" variant="outlined" sx={{m:2}}/>
                    <TextField className="field" id="operationName" label="operationName" name="operationName" variant="outlined" sx={{m:2}}/>
                    <TextField className="field" id="question" label="question" name="question" variant="outlined" sx={{m:2}}/>
                    <Button className="btn" type="submit" fullWidth variant="contained" sx={{mt: 2, mb: 2}}>
                        Submit Rule
                    </Button>
                </Box>
            </div>
        </div>

    )
}