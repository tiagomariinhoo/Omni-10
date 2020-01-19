import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps'
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons'

import api from '../services/api'

//Mesma coisa do react pra web mas troca a div pela view
//Instala o react-navigation para navegar entre as pages

//Revisar o uso do useEffect
//Instala o axios para ter acesso à api
function Main({ navigation }) { //Desestruturação
    //As chaves duplas é pq a primeira chaves é pq to colocando um codigo JS aí dentro
    //A segunda é pq é um objeto
    // return <MapView style={{flex:1}}></MapView>
    /**
     * ESTADOS
     */
    const [devs, setDevs] = useState([]) //Armazena os devs encontrados
    const [currentRegion, setCurrentRegion] = useState(null) //Vai começar como nulo, sem região de inicio
    const [techs, setTechs] = useState('');

    useEffect(() => {
        async function loadInitialPosition() { //Usa o expo-location
            const { granted } = await requestPermissionsAsync() //Pede a permissão para usar a localização ao usuário
            //Granted retorna true ou false que seria se deu permissão ou não

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true, //Pra isso funcionar tem que tá com o gps ligado
                });

                // location.coords //trás as coordenadas do usuário
                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                });
            }

        }
        loadInitialPosition();
    }, []);

    async function loadDevs() { //Pega a localização atualmente do mapa
        const { latitude, longitude } = currentRegion;

        const response = await api.get('/search', { //Acessa a api
            params: {
                latitude,
                longitude,
                techs
            }
        });

        setDevs(response.data.devs); //Seta os devs com a resposta que veio da api
    }

    function handleRegionChanged(region) {
        console.log(region)
        setCurrentRegion(region); //Agora sempre que o usuário mexer no mapa ele atualiza a localização real-time
    }

    if (!currentRegion) {
        return null;
    }

    //Callout é pra tudo que aparecer quando clicar no avatar
    return (
        <>
            <MapView
                onRegionChangeComplete={handleRegionChanged}
                initialRegion={currentRegion}
                style={styles.map}>
                {devs.map(dev => (

                    <Marker key={dev._id} coordinate={{ latitude: dev.location.coordinates[1], longitude: dev.location.coordinates[0] }}>
                        <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/17099024?s=460&v=4' }}></Image>
                        <Callout onPress={() => {
                            //Navegação
                            navigation.navigate('Profile', { github_username: dev.github_username }) //Passa o nome da tela 

                        }}>
                            <View style={styles.callout}>
                                <Text style={styles.devName}>{dev.name}</Text>
                                <Text style={styles.devBio}>{dev.bio}</Text>
                                <Text style={styles.devTechs}>{dev.techs.join(', ')}</Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            <View style={styles.searchForm}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar devs por techs..."
                    placeholderTextColor="#999"
                    autoCapitalize="characters"
                    autoCorrect={false}
                    value = {techs}
                    onChangeText={setTechs}
                    >

                </TextInput>

                <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
                    <MaterialIcons name="my-location" size={20} color="#FFF"></MaterialIcons>
                </TouchableOpacity>
            </View>
        </>
    );

}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
    },

    callout: {
        width: 260
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    devBio: {
        color: '#666',
        marginTop: 5,
    },
    devTechs: {
        marginTop: 5,
    },

    searchForm: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },
    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8E4Dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    }
})

export default Main;