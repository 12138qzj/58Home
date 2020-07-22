import React, { Component } from 'react';
import './main.css'
import SearchInput from '../../components/SearchInput/SearchInput';
import Classify from '../../components/main/classify/Classify';
import RotationChart from '../../components/main/rotationChart/RotationChart'
import MenuBarItem from '../../components/main/menuBar/MenuBar'
import ImgList from '../../components/main/imgList/ImgList';


class Main extends Component {
    state = {}
    render() {
        return (
            <div className='main'>
                <SearchInput />
                <Classify />
                <RotationChart />
                <MenuBarItem />
                <ImgList />
            </div>
        );
    }
}

export default Main;
