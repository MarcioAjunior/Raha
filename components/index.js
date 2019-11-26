import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

    // import Login from './screens/Login'
    // import Home from './screens/Home'
    // import Produtos from './screens/Cadastro';
    // import Listagem from './screens/Listagem_Despesas.js_Recebimentos';
    // import Cadastro_Recebimento from './screens/Cadastro_Recebimento';



const index = createStackNavigator (

{
    Login : {
        screen : Login,
        navigationOptions : {
            header : null
        }
    },
    Home : {
        screen : Home,
        navigationOptions : {
         headerTitle : 'Home',
         headerLeft : null
        }
    },

    Produtos : {
        screen : Produtos,
        navigationOptions : {
            headerTitle : 'Produtos'
        }
    }




    


}

)
    



export default createAppContainer(index);
