import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useState, useContext} from "react";
import Button from "@mui/material/Button";
import CreateTemplate from "./CreateTemplate";
import RuleCreate from "./CreateRule";
import templateContext from "./templateContext";
import ruleContext from "./ruleContext";
import factContext from "./factContext";
import resultContext from "../../resultContext";
import './creat.css'
import FactCreate from "./FactCreate";
import Link from "@mui/material/Link";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
}
export default function Create() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let templateTmp = []
    let ruleTmp = []
    let factTmp = []
    let result = useContext(resultContext)

    const [templateIndex, setTemplateIndex] = useState(0)
    const [ruleIndex, setRuleIndex] = useState(0)
    const [factIndex, setFactIndex] = useState(0)

    const [templateList, setTemplateList] = useState([])
    const [ruleList, setRuleList] = useState([])
    const [factList, setFactList] = useState([])

    const [templates, setTemplates] = useState([])
    const [rules, setRules] = useState([])
    const [facts, setFacts] = useState([])

    const [codes, setCodes] = useState([])

    const handleChange1 = (event) => {
        // result.push(templates)
        // result.push(rules)
        // result.push(facts)
        setCodes(result)
        console.log(result)
        console.log(codes)
        localStorage.setItem('codes', JSON.stringify(result))
    }
    const handleChangeTemplate = (event) => {
        setTemplateIndex(templateIndex + 1)
        for (let i = 0; i <= templateIndex; i++) {
            ruleTmp.push(
                <div key={i}>
                    <CreateTemplate/>
                </div>
            )
        }
        setTemplateList([...ruleTmp])
    };
    const handleChangeRule = (event) => {
        setRuleIndex(ruleIndex + 1)
        for (let i = 0; i <= ruleIndex; i++) {
            templateTmp.push(
                <div key={i}>
                    <RuleCreate/>
                </div>
            )
        }
        setRuleList([...templateTmp])
    };
    const handleChangeFacts = (event) => {
        setFactIndex(factIndex + 1)
        for (let i = 0; i <= factIndex; i++) {
            factTmp.push(
                <div key={i}>
                    <FactCreate/>
                </div>
            )
        }
        setFactList([...factTmp])
    };

    return (
        <div>
            <resultContext.Provider value={result}>
                <factContext.Provider value={facts}>
                    <div  style={{backgroundColor: '#2b6777', margin: '1rem', padding: '1rem', borderRadius: '1rem'}}>
                        <FactCreate/>


                    <div>{factList.map(item => {
                        return item
                    })}</div></div>
                    <div style={center}>
                        <Button className="btn" type="submit" variant="contained" sx={{mt: 3, mb: 2}}
                                onClick={handleChangeFacts}>
                            add Facts
                        </Button>
                    </div>

                    {/*<Box sx={{minWidth: 120, textAlign: 'center'}}>*/}
                    {/*    <Button className="btn" type="submit" variant="contained" sx={{mt: 3, mb: 2}}*/}
                    {/*            onClick={handleChange1}>*/}
                    {/*        Submit Facts*/}
                    {/*    </Button>*/}
                    {/*</Box>*/}
                </factContext.Provider>
                <div className='create'>
                    <div>
                        <templateContext.Provider value={templates}>
                            <div  style={{backgroundColor: '#2b6777', margin: '1rem', padding: '1rem', borderRadius: '1rem'}}>
                            <CreateTemplate/>
                            <div>{templateList.map(item => {
                                return item
                            })}</div></div>
                            <div style={center}>
                                <Button className="btn" type="submit" variant="contained" sx={{mt: 3, mb: 2}}
                                        onClick={handleChangeTemplate}>
                                    add template
                                </Button>
                            </div>
                            {/*<Box sx={{minWidth: 120, textAlign: 'center'}}>*/}
                            {/*    <Button className="btn" type="submit" variant="contained" sx={{mt: 3, mb: 2}}*/}
                            {/*            onClick={handleChange1}>*/}
                            {/*        Submit Templates*/}
                            {/*    </Button>*/}
                            {/*</Box>*/}
                        </templateContext.Provider>
                    </div>
                    <div>
                        <ruleContext.Provider value={rules}>
                            <div  style={{backgroundColor: '#2b6777', margin: '1rem', padding: '1rem', borderRadius: '1rem'}}>
                            <RuleCreate/>
                            <div>{ruleList.map(item => {
                                return item
                            })}</div></div>
                            <div style={center}>
                                <Button className="btn" type="submit" variant="contained" sx={{mt: 3, mb: 2}}
                                        onClick={handleChangeRule}>
                                    add rule
                                </Button>
                            </div>

                        </ruleContext.Provider>
                    </div>

                </div>
                <Box sx={{minWidth: 120, textAlign: 'center'}}>
                    <Button className="btn" type="submit" variant="contained" sx={{mt: 3, mb: 2}}
                            onClick={handleChange1}>
                        <Link style={{
                            color: 'white',
                            textDecoration: 'none',
                        }} href="/Code/">
                            Generate Code
                        </Link>

                    </Button>
                </Box>
            </resultContext.Provider>
        </div>
    )
}