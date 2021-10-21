import React from 'react';

import ChildComponent from './ChildComponent/ChildComponent';

class LifecycleMethods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            baseURL: 'https://api.openweathermap.org/data/2.5/weather',
            city: 'Indianapolis',
            apiKey: 'Your API key here',
            main: {},
            weather: [],
            time: null
        }
    }

    render() {
        return (
            <div className='main'>
                <div className='mainDiv' style={{textAlign: 'center'}}>
                    <ChildComponent />
                </div>
            </div>
        )
    }
}

export default LifecycleMethods;