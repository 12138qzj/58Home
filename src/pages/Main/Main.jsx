import React, { Component } from 'react';
import './main.css'
import SearchInput from '../../components/SearchInput/SearchInput';
import Classify from '../../components/main/classify/Classify';
import RotationChart from '../../components/main/rotationChart/RotationChart'
import MainBottomChoose from '../../components/mainbottomchoose/MainBottomChoose';

class Main extends Component {
    state = {}
    render() {
        return (
            <>
            <div className='main'>
                <SearchInput /> 
                <Classify />
                <RotationChart />
                
                {/* <div style={{height:"20rem" , width:"10rem" , background:"pink"}}> */}

                {/* </div> */}
            </div>
            <MainBottomChoose/>
            </>
            
        );
    }
}

export default Main;
