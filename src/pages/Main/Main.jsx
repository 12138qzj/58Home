import React, { Component } from 'react';
import './main.css'
import SearchInput from '../../components/SearchInput/SearchInput';
import Classify from '../../components/main/classify/Classify';
import RotationChart from '../../components/main/rotationChart/RotationChart'


class Main extends Component {
    state = {}
    render() {
        return (
            <div className='main'>
                <SearchInput />
                <Classify />
                <RotationChart />
            </div>
        );
    }
}

export default Main;
