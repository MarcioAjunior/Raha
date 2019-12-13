import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';
import CadastroRecebimento from './src/telas/cadastro-recebimentos';
import CadastroDespesa from './src/telas/cadastros-despesas';

const AppNavigator = createStackNavigator(
    {
      Home,
      CadastroRecebimento,
      CadastroDespesa,
    },
    {
      initialRouteName: 'Home'
    }
  );

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer></AppContainer>;
  }
}