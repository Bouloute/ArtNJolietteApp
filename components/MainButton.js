import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default class MainButton extends Component {
    render() {
        return (
            <View>
                <Image source={require('C:\Users\jlewi\OneDrive\Documents\BIPO\React-Native\Art-N-Joliette-Phone\images\history.png')}/>
                <Text> Hello its me Bip o </Text>
            </View>
        )
    }
}
