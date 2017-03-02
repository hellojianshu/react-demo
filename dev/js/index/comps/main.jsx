import React from 'react';
import ReactDOM from 'react-dom';
import Comp1 from './component1.jsx';
import style from '../../../style/index/index.css';

ReactDOM.render(
    <div className="main">
        react es2015 demo:
        <Comp1 />
    </div>
    ,
    document.getElementById('comp')
);