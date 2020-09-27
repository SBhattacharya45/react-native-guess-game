import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../Components/BodyText';
import TitleText from '../Components/TitleText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/success.png')}
                    resizeMode="cover" />
            </View>
            <BodyText>Number of Rounds: {props.rounds}</BodyText>
            <BodyText>Number was: {props.userChoice}</BodyText>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 150,
        width: 300,
        height: 300,
        overflow: "hidden",
        marginVertical: 30
    }
});

export default GameOverScreen;