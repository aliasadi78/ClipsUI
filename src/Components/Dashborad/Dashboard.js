import * as React from 'react';
import Link from '@mui/material/Link';
import "./Dashboard.css"
import resultContext from "../../resultContext";
import factContext from "../Create/factContext";
import FactCreate from "../Create/FactCreate";
import Button from "@mui/material/Button";
import templateContext from "../Create/templateContext";
import CreateTemplate from "../Create/CreateTemplate";
import ruleContext from "../Create/ruleContext";
import RuleCreate from "../Create/CreateRule";
import Box from "@mui/material/Box";
import Create from "../Create/Create";
export default function Dashboard() {
    return (
        <div className="div">
            <div className="container">
                <a href="#create"><img className="img" src={require("../../clipslogo.png")} alt="logo"/></a>
            </div>
            <img src={require("../../wave.png")} alt="logo"/>
            <img  src={require("../../wave-r.png")} alt="logo"/>
            <div id="create">
                <Create />
            </div>
        </div>
    )
}


