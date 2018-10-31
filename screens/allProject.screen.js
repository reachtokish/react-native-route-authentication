import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TextInput,Switch, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Input, Item, Label, Textarea, Left, Right, Button, Icon, Title } from "native-base";
import { onSignOut } from "../auth/auth";

class AllProjectScreen extends Component<Props> {

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: "#fff"}} androidStatusBarColor="#000000">
                    <Left>
                        <Button transparent onPress={() => onSignOut().then(() => this.props.navigation.navigate("SignedOut"))}>
                            <Icon name='menu' style={{color: "#333"}} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: "#333"}}>Project</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    {/* card */}
                    <View><Text>All Project</Text></View>
                </Content>
            </Container>
        )
    }
}

export default AllProjectScreen;