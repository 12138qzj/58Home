import React, { PureComponent } from 'react';
import ServerContent from './servercontent/ServerContent';
import ServerSearchInput from './serverhead/serversearchinput/ServerSearchInput';
class Server extends PureComponent {
    state = {  }
    render() { 
        return ( 
            <div>
                <ServerSearchInput/>
                <ServerContent/>
            </div>
         );
    }
}
 
export default Server;