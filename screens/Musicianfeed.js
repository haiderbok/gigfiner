import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Event from '../components/Event'

export default class MusicianFeed extends Component 
{
    constructor(props)
    {
        super(props);

    }

    render()
    {
        return <Event desctiption="house party" host="tarcan" name="Salty Saturday"/>;
    }
};