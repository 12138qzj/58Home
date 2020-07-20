import React, { Component } from 'react';
import './main.css'
import SearchInput from '../../components/SearchInput/SearchInput';
class Main extends Component {
    state = {}
    render() {
        const classifyItem = ['擦玻璃', '空调清洗', '修电脑', '修手机', '空调移机', '洗窗帘', '修灯具'];
        return (
            <div className='main'>
                <SearchInput />
                <div className="classify">

                    {
                        classifyItem.map(() => {
                            return (
                                <div className="classify-item">
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Main;