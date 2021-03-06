import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";

import Card from '../Components/Card';
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer';
import BodyText from '../Components/BodyText';
import Colors from '../constants/colors';
import colors from '../constants/colors';
import TitleText from '../Components/TitleText';
import MainButton from '../Components/MainButton';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedValue, setSelectedValue] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    useEffect(() => {
        updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        }
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    })

    const confirmedInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Input',
                'Number has to be between 1 to 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setSelectedValue(chosenNumber);
        setEnteredValue('')
        setConfirmed(true);
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.confirmedOutput}>
                <Text>You Selected </Text>
                <NumberContainer>{selectedValue}</NumberContainer>
                <MainButton onPress={props.onStartGame.bind(this, selectedValue)}>
                    START GAME
            </MainButton>
            </Card>
        )
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset="30">
                <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                    <View style={styles.screen}>
                        <TitleText style={styles.title}>Start New Game</TitleText>
                        <Card style={styles.inputContainer}>
                            <BodyText>Choose a Number</BodyText>
                            <Input
                                blurOnSubmit
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType='number-pad'
                                maxLength={2}
                                style={styles.input}
                                onChangeText={numberInputHandler}
                                value={enteredValue} />
                            <View style={styles.buttonContainer}>
                                <View style={{width: buttonWidth}}>
                                    <Button title="CONFIRM" onPress={() => { confirmedInputHandler() }} color={Colors.secondary1} />
                                </View>
                                <View style={{width: buttonWidth}}>
                                    <Button title="RESET" onPress={() => { resetInputHandler() }} color={Colors.secondary2} />
                                </View>

                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 15
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: "center",
    },
    // button: {
    //     width: Dimensions.get('window').width / 4
    // },
    input: {
        width: 50,
        textAlign: 'center'
    },
    confirmedOutput: {
        marginTop: 20,
        alignItems: "center"
    }
});

export default StartGameScreen;