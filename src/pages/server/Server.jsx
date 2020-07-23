import React, { PureComponent } from 'react';
import ServerContent from './servercontent/ServerContent';
import ServerContentHSS from './servercontent/ServerContent';

import ServerSearchInput from './serverhead/serversearchinput/ServerSearchInput';
class Server extends PureComponent {
    state = {  }
    render() { 
        return ( 
            <div>
                <ServerSearchInput/>
                <ServerContentHSS/>
            </div>
         );
    }
}
 
export default Server;