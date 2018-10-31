import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StatusBar, Image, TextInput } from 'react-native';
import { onSignIn } from "../auth/auth";
const login_bg = require('../images/login_bg.png');
const logo = require('../images/logo.png');

class LoginScreen extends Component<Props> {

    onPressLearnMore() {
        alert();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#fff',
                }} >
                <StatusBar
                    animated={true}
                    backgroundColor="#000"
                    barStyle="light-content" />
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }} >
                    <Image
                        style={{
                            flex: 1
                        }}
                        source={login_bg}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        justifyContent: 'center',
                        alignItems: "center"
                    }} >
                    <View style={{
                        justifyContent: "center", 
                        alignItems: "center",
                        marginBottom: 30
                    }}>
                        <Image source={logo} style={{
                            width: 150, 
                            height: 50,
                            resizeMode: 'contain'
                        }} />
                    </View>
                    <View style={{
                        width: '80%',
                        backgroundColor: "#fff",
                        borderRadius: 6,
                        padding: 20,
                        shadowOpacity: 0.3,
                        shadowRadius: 10,
                        shadowColor: '#000',
                        shadowOffset: { height: 0, width: 0 },
                        elevation: 5
                    }} >
                        <Text style={{
                            textAlign: "center",
                            fontSize: 20,
                            // fontFamily: 'ProximaNovaRegular',
                            marginBottom: 30
                        }}>Login</Text>
                        <View>
                            <View style={{
                                borderWidth: 1,
                                borderStyle: "solid",
                                borderColor: "#b2b2b2",
                                borderRadius: 4,
                                marginBottom: 15
                            }}>
                                <TextInput placeholder="Username" style={{
                                    marginTop: 6,
                                    marginBottom: 6,
                                    padding: 0,
                                    paddingLeft: 15
                                }} />
                            </View>
                            <View 
                                style={{
                                    borderWidth: 1,
                                    borderStyle: "solid",
                                    borderColor: "#b2b2b2",
                                    borderRadius: 4,
                                    marginBottom: 15,
                                }}>
                                <TextInput secureTextEntry={true} placeholder="Password" style={{
                                    marginTop: 6,
                                    marginBottom: 6,
                                    padding: 0,
                                    paddingLeft: 15,
                                }} />
                            </View>
                            <View style={{marginTop: 10}}>
                                <TouchableOpacity 
                                    onPress={() => {
                                        onSignIn().then(() => this.props.navigation.navigate('SignedIn'));
                                    }}
                                    style={{
                                        backgroundColor: "#f46f48",
                                        borderRadius: 4,
                                        height: 40,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Text style={{
                                        textAlign: "center",
                                        color: "#fff"
                                    }}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}

export default LoginScreen;