import * as React from "react";
import * as prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { ResultData } from '~model'


export const Result = ({ script }: ResultData) => {
    console.log(script)
    return (
    <div className="result-script">
        <div className="tabs">
            <ul>
                <li><a>POSIX</a></li>
                <li><a>GNU (w/ --long-opts)</a></li>
            </ul>
        </div >

        <pre>
            <a className="button is-outlined is-link is-inverted is-pulled-right"
                style={{ marginLeft: "1vh" }}>
                <span>Copy&nbsp;</span>
                <span className="icon"><i className="fa fa-copy"></i></span>
            </a>
            <a className="button is-outlined is-link is-inverted is-pulled-right">
                <span>Download&nbsp;</span>
                <span className="icon"><i className="fa fa-download"></i></span>
            </a>

            <code className="language-bash">{script}</code>
        </pre>
    </div >
)
    }
