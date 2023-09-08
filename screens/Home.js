import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import firebase from "firebase";

export default class Feed extends Component {
    constructor(){
        super();
        this.state = {
        id_prato:"",
        nome_prato:"",
        preço:"",
        porção:"",
        cardápio:[]
        }
    }
    componentDidMount(){
        this.fetchMenu();

    }
    fetchMenu = () => {
        firebase
          .database()
          .ref("/cardápio/")
          .on(
            "value",
            snapshot => {
              let cardápio = [];
              if (snapshot.val()) {
                Object.keys(snapshot.val()).forEach(function (key) {
                  cardápio.push({
                    key: key,
                    value: snapshot.val()[key]
                  });
                });
              }
              this.setState({ cardápio: cardápio });
              this.props.setUpdateToFalse();
            },
            function (errorObject) {
              console.log("A leitura falhou: " + errorObject.code);
            }
          );
      };
    render() {
        return (
            <View
                style={{
                    flex: 1,
                }}>
                    <Image source = {require("../assets/FOOD.png")} style ={styles.baseImg}></Image>
            
              <View>
                <Text>{this.state.cardápio}</Text>
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    baseImg: {
        width: 200,
        height: 200,
        marginLeft: 1720,
    }
})