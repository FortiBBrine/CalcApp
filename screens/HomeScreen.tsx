import {Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../store/store";
import React, {FC} from "react";
import {addSymbol, clear, eraseOne, evaluate} from "../store/inputSlice";

type CalcButtonProps = {
    title: string;
    onPress: () => void;
}

const CalcButton: FC<CalcButtonProps> = (props) => {
    return (
        <Pressable style={{
            flex: 1
        }} onPress={() => props.onPress()}>
            <Text style={{
                flex: 1,
                // backgroundColor: 'yellow',
                textAlign: 'center',
                textAlignVertical: 'center',
                fontSize: 40,
                borderStyle: 'solid',
                borderColor: 'red',
                // borderWidth: 2,
            }}>{props.title}</Text>
        </Pressable>

    );
};

export default function HomeScreen() {

    const input = useSelector<IRootState, string>(state => state.input.text)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>

            <Text style={{
                flex: 1,
                flexGrow: 1,
                fontSize: 50,
                fontWeight: 'bold',
                backgroundColor: "#fff",
                textAlign: "right",
                textAlignVertical: "center"
            }}>{input}</Text>
            <View style={{
                flex: 1,
                flexGrow: 4,
                alignItems: 'stretch',
            }}>
                <View style={{
                    flexDirection: "row",
                    flex: 1,
                }}>
                    <CalcButton onPress={() => dispatch(addSymbol("+"))} title="+" />
                    <CalcButton onPress={() => dispatch(addSymbol("-"))} title="-" />
                    <CalcButton onPress={() => dispatch(addSymbol("/"))} title=":" />
                    <CalcButton onPress={() => dispatch(addSymbol("*"))} title="X" />
                </View>

                <View style={{
                    flexDirection: "row",
                    flex: 1,
                }}>
                    <CalcButton onPress={() => dispatch(addSymbol("1"))} title="1" />
                    <CalcButton onPress={() => dispatch(addSymbol("2"))} title="2" />
                    <CalcButton onPress={() => dispatch(addSymbol("3"))} title="3" />
                    <CalcButton onPress={() => dispatch(clear())} title="C" />
                </View>

                <View style={{
                    flexDirection: "row",
                    flex: 1,
                }}>
                    <CalcButton onPress={() => dispatch(addSymbol("4"))} title="4" />
                    <CalcButton onPress={() => dispatch(addSymbol("5"))} title="5" />
                    <CalcButton onPress={() => dispatch(addSymbol("6"))} title="6" />
                    <CalcButton onPress={() => dispatch(eraseOne())} title="<x" />
                </View>

                <View style={{
                    flexDirection: "row",
                    flex: 1,
                }}>
                    <CalcButton onPress={() => dispatch(addSymbol("7"))} title="7" />
                    <CalcButton onPress={() => dispatch(addSymbol("8"))} title="8" />
                    <CalcButton onPress={() => dispatch(addSymbol("9"))} title="9" />
                    <CalcButton onPress={() => dispatch(addSymbol("."))} title="," />
                </View>

                <View style={{
                    flexDirection: "row",
                    flex: 1,
                }}>
                    <CalcButton onPress={() => {}} title="" />
                    <CalcButton onPress={() => dispatch(addSymbol("0"))} title="0" />
                    <CalcButton onPress={() => {}} title="" />
                    <CalcButton onPress={() => dispatch(evaluate())} title="=" />
                </View>

            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 5,
    },

});
