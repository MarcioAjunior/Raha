import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AlertIOS} from 'react-native';


const botaoPressionado = () => {
    Alert.alert('Salvando');
}

export default class CadastroRecebimento extends Component {
    state = {
        name: ''
      };
     
    render() {
        return(
            <View style={estilo.principal}>

                <View>
                    <TextImput style={estilo.entrada} underlineColorAndroid='transparent' placeholder="Data Recebimento"/>
                </View>

                <View>
                    <TextImput style={estilo.entrada} underlineColorAndroid='transparent' placeholder="Descrição"/>
                </View>

                <View>
                    <TextImput style={estilo.entrada} underlineColorAndroid='transparent' placeholder="Valor(R$)"/>
                </View>

                <View>
                    <TouchableOpacity onPress={botaoPressionado} style={estilo.botao}>
                        <Text>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const estilo = StyleSheet.create({
    entrada:{
        width:300,
        height:40,
        borderColor:'gray',
        borderWidth:0,
        backgroundColor:'white',
        borderWidth: 1,
        marginTop: 10
    },
    principal:{
        backgroundColor: '#91b8da',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    botao:{
        backgroundColor:'e88585',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    }
});