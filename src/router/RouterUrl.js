import React, 
{ Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import Icons from '../components/UI/Icons';
import Buttons from '../components/UI/Buttons';
import DropdownMenu from '../components/UI/DropdownMenu';
import Pageination from '../components/UI/Pageination';
import Grid from '../components/Layout/Grid';
import EnterpriseInfo from '../components/info/EnterpriseInfo';
import MonitoringWarning from '../components/warning/MonitoringWarning'
export default class RouterUrl extends Component{
    render(){
        return( 
                <Switch>
                    <Route exact path="/" component={EnterpriseInfo}/>
                    <Route path='/warning/nonitoringwarning' component={MonitoringWarning}/>
                    <Route path='/ui/icons' component={Icons}/>
                    <Route path='/ui/dropdown' component={DropdownMenu}/>
                    <Route path='/ui/pageination' component={Pageination}/>
                    <Route path='/layout/grid' component={Grid}/>
                    <Route component={Icons}/>
                </Switch>
        )
    }
}