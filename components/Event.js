import React, {Component} from 'react';
import {View} from 'react-native';

/**
 * Event will have event name, event thrower, description (as props) and apply button. 
 */
export default class Event extends Component 
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <View>
        <Text>{this.props.host}</Text>
        <Text>{this.props.name}</Text>
        <Text>{this.props.description}</Text>
    </View>;
    }
}