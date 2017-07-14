// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());

// 使用Babel

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

//使用require导入css文件
import './main.css';


render(<Greeter />,document.getElementById('root'));
