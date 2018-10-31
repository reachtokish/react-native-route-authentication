import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TextInput,Switch, TouchableOpacity, AppState } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Input, Item, Label, Textarea, Left, Right, Button, Icon, Title, Picker } from "native-base";
import { onSignOut } from "../auth/auth";

class CreateProjectScreen extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
          seconds: 5
        };
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
      }

    onValueChange(value) {
        this.setState({
            seconds: value
        });
      }

      componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
      }

      componentWillUnmount() {
        AppState.addEventListener('change', this.handleAppStateChange);
      }

      handleAppStateChange(AppState) {
        // console.log(AppState);
        if(AppState === 'background') {
            console.log("App is in background")
        }
      }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: "#fff"}} androidStatusBarColor="#000000">
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='menu' style={{color: "#333"}} />
                        </Button>
                    </Left>
                    <Body>
                        <TouchableOpacity>
                            <Title style={{color: "#333"}}>Project</Title>
                        </TouchableOpacity>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='ios-notifications' style={{color: "#333"}} />
                        </Button>
                    </Right>
                </Header>
                <Content padder>

                    {/* card */}
                    <View style={style.card}>
                        <Text>Picker</Text>
                        <Picker
                        note
                        mode="dropdown"
                        style={{ width: 120 }}
                        selectedValue={this.state.seconds}
                        onValueChange={this.onValueChange.bind(this)}
                        >
                        <Picker.Item label="5" value={5} />
                        <Picker.Item label="10" value={10} />
                        <Picker.Item label="15" value={15} />
                        </Picker>

                        {/* card header */}
                        <View style={style.cardHeader}>
                            <Text style={{fontWeight: 'bold', color: "#333", fontSize: 14}}>Create Project</Text>
                        </View>
                        {/* card header */}
                        {/* card body */}
                        <View style={style.cardBody}>
                            <View style={{marginBottom: 15}}>
                                <Text style={{marginBottom: 5, fontWeight: 'bold', fontSize: 12}}>Project Name</Text>
                                <Item style={{borderRadius: 4, height: 40, borderColor: "#ddd"}} regular>
                                    <Input />
                                </Item>
                            </View>
                            <View style={{marginBottom: 15}}>
                                <Text style={{marginBottom: 5, fontWeight: 'bold', fontSize: 12}}>Project Description</Text>
                                <Textarea rowSpan={5} bordered style={{borderRadius: 4, borderColor: "#ddd"}} />
                            </View>
                            <View style={{marginBottom: 15}}>
                                <Text style={{marginBottom: 5, fontWeight: 'bold', fontSize: 12}}>Project Duration</Text>
                                <View style={{marginBottom: 5}}>
                                    <Text style={style.subLabel}>Start Date</Text>
                                    <Item style={{borderRadius: 4, height: 40, borderColor: "#ddd"}} regular>
                                        <Input />
                                    </Item>
                                </View>
                                <View>
                                    <Text style={style.subLabel}>End Date</Text>
                                    <Item style={{borderRadius: 4, height: 40, borderColor: "#ddd"}} regular>
                                        <Input />
                                    </Item>
                                </View>
                            </View>
                            <View style={{marginBottom: 15}}>
                                <Text style={{marginBottom: 5, fontWeight: 'bold', fontSize: 12}}>Core Team</Text>
                                
                            </View>
                        </View>
                        {/* card body */}
                    </View>
                </Content>
            </Container>
        );
    }

}

export default CreateProjectScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4f6d7a"
    },
    customFont: {
        // fontFamily: 'ProximaNovaRegular',
        textAlign: 'center',
        color: "#fff",
        fontSize: 50
    },
    card: {
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 4,
        shadowOpacity: 0.15,
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: { height: 1, width: 1 },
        elevation: 3
    },
    cardHeader: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 15,
        paddingLeft: 15,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1
    },
    cardBody: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 15,
        paddingLeft: 15,
    },
    subLabel: {
        marginBottom: 5
    }
})