import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Pedido extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <View
                   style={{
                    flex: 0.3,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "red",
                    marginTop: 820,
                    borderRadius: 400,
                    position: 'absolute',
                    width: 2000,
                    
                }}>
                 <Text style ={styles.textoPedido}>Total do Pedido:</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textoPedido: {
        fontSize: 40,
        position: 'relative',
        zIndex: 2,
        color: "yellow"
        
    }
})