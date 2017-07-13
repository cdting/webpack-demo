// var config = require('./config.json');

// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;

// }


// 使用Babel

//引用react
import React, { Component } from 'react'
//引用config
import config from './config.json';
//引入css
import styles from './Greeter.css';

//定义一个类
class Greeter extends Component {
    render() {
        return ( 
            <div className={sytles.root}> 
                { config.greetText } 
            </div>
        )
    }
}

export default Greeter;