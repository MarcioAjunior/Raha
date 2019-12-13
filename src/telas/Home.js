import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Cadastrar Despesa"
          onPress={() => this.props.navigation.navigate('CadastroDespesa')}
        />
        <Button
          title="Cadastrar Recebimento"
          color="green"
          onPress={() => this.props.navigation.navigate('CadastroRecebimento')}
        />
      </View>
    );
  }
}