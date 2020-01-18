import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main';
import Profile from './pages/Profile';
//Qualquer coisa tem na documentação do React Navigation na parte de como criar as rotas
const Routes = createAppContainer(
    createStackNavigator({ //Passa um objeto com as rotas da nossa aplicação
        Main: {
            screen: Main,
            navigationOptions: {title: 'DevRadar'}
        }, 
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#7D40E7'
            }
        }
    })
);

export default Routes;