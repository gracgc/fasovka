import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import GoodsComponent from "./components/Goods/GoodsContainer";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <div className='header'><Header/></div>
            <div className='app-wrapper-content-navbar'>
                <div className='navbar'><Navbar/></div>
                <div className='content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={"/contacts"}/>}/>
                        <Route path='/contacts' render={() => <Contacts/>}/>
                        <Route path='/goods' render={() => <GoodsComponent/>}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default App;
