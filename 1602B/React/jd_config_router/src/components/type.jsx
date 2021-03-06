import React from 'react';
import {
    NavLink,
    // Route
} from 'react-router-dom';
import SubType from './subType';
import '../scss/type.css';
import Route from '../router/route';

export default class Type extends React.Component{
    constructor(){
        super();
        this.state = {
            list: ['热门推荐', '手机数码', '家用电器', '电脑办公']
        }
    }

    render(){
        console.log('type...', this.props);
        return <div className="list">
            <div>{
                this.state.list.map((item, index)=>{
                    return <NavLink to={`/type/${index}`} key={index}>{item}</NavLink>
                })
            }</div>
            <Route routes={this.props.routes}></Route>   
            {/* <Route path="/type/:id?" component={SubType}></Route> */}
        </div>
    }
}