import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';

import BodyText from '../Components/BodyText';
import TitleText from '../Components/TitleText';
import MainButton from '../Components/MainButton';
import colors from '../constants/colors';

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>The Game is Over!!</TitleText>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../assets/success.png')}
                        resizeMode="cover" />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userChoice}</Text>
                    </BodyText>
                </View>
                <MainButton onPress={props.onRestart} >
                    NEW GAME
            </MainButton>
            </View>
        </ScrollView>
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
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: "hidden",
        marginVertical: Dimensions.get('window').height / 30
    },
    highlight: {
        color: colors.secondary1,
        fontFamily: 'open-sans-bold'
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    }
});

export default GameOverScreen;