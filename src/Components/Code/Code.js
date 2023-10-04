import React, {useContext} from "react";
import {useLocation} from "react-router-dom";
import resultContext from "../../resultContext";

const style = {
    backgroundColor: '#c8d8e4',
    border: '1px solid #2b6777',
    borderRadius: '1rem',
    padding: '1rem',
}
export default function Code(props) {
    // console.log(localStorage.getItem('codes'))
    let pythonCode = "import clips\n"
    let clipsCode = ""
    pythonCode += "environment = clips.Environment()\n"
    let object = JSON.parse(localStorage.getItem('codes'))

    let facts = []
    let templates = []
    let rules = []
    object.forEach(item => {
        item?.fact && facts.push(item)
        item?.templateName && templates.push(item)
        item?.ruleName && rules.push(item)
    })

    // console.log(facts)
    // console.log(templates)
    // console.log(rules)
    facts.forEach((item, index) => {
        pythonCode += `environment.assert_string('${item.fact}')\n`
        clipsCode += `(assert (${item.fact}))\n`
    })
    rules.forEach((item, index) => {
        // console.log(item)
        pythonCode += `DEFRULE_STRING${index}= """ (defrule ${item.ruleName} "${item.ruleDescription}" \n`
        clipsCode += `(defrule ${item.ruleName} "${item.ruleDescription}" \n`
        item?.ruleDetail.forEach(d => {
                // console.log(d)
                pythonCode += `(${d.valueType})\n`
                clipsCode += `(${d.valueType})\n`
            }
        )
        pythonCode += `=>\n`
        clipsCode += `=>\n`
        pythonCode += `(printout ${item.operation})\n`
        clipsCode += `(printout ${item.operation})\n`
        if (item?.question) clipsCode += `(assert ( ${item.question} (read))))\n`
        else clipsCode += `)\n`
        if (item?.question) pythonCode += `(assert ( ${item.question} (read))))"""\n`
        else pythonCode += `)"""\n`
        pythonCode += `environment.build(DEFRULE_STRING${index})\n`
    })
    templates.forEach((item, index) => {
        console.log(item)
        pythonCode += `template_string${index}= """ (deftemplate ${item.templateName} ${item.templateDescription} \n`
        clipsCode += `(deftemplate ${item.templateName} ${item.templateDescription} \n`
        item?.templateDetail.forEach(d => {
                pythonCode += `(${d.valueType} ${d.name} ${d.type})\n`
                clipsCode += `(${d.valueType} ${d.name} ${d.type})\n`
            }
        )
        pythonCode += `"""\n`
    })
    pythonCode += "environment.run()"
    console.log(pythonCode)
    return (
        <div>
            <div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column',}}>
                <pre style={style}>{pythonCode}</pre>
                <pre style={style}>{clipsCode}</pre>
            </div>

        </div>
    )
}