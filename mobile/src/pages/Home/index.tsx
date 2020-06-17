import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Image, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const [uf, setUf] = useState('');
    const [city, setCity] = useState('');
    const [KeyboardShow, setKeyboardShow] = useState(false);
    const navigation = useNavigation();

    const _keyboardDidShow = () => {
      // alert("Keyboard Show");
      setKeyboardShow(true);
    };
  
    const _keyboardDidHide = () => {
      // alert("Keyboard Hidden");
      setKeyboardShow(false);
    };

    useEffect(() => {
      Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  
      // cleanup function
      return () => {
        Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
      };
    }, []);

    function handNavigationToPoints() {
      navigation.navigate('Points');
    }

    return  (
      <KeyboardAvoidingView style={{flex: 1}} behavior={ Platform.OS === 'ios' ? "padding" : undefined}>
        <ImageBackground 
          source={require('../../assets/home-background.png')} 
          style={styles.container}
          imageStyle={{ width: 274, height: 368 }}
          >
          <View 
            style={
            KeyboardShow && styles ?
            {marginBottom: 32}:
            {flex: 1, justifyContent: 'center',}
            }
          >
            <Image source={require('../../assets/logo.png')} />
            <View>
              <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
              <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
            </View>
          </View>

          <View style={styles.footer}>
          <TextInput 
            style={styles.input}
            placeholder="Digite a UF"
            value={uf}
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            onChangeText={setUf}
            onSubmitEditing={Keyboard.dismiss}
          />

          <TextInput 
            style={styles.input}
            placeholder="Digite a cidade"
            value={city}
            autoCorrect={false}
            onChangeText={setCity}
            onSubmitEditing={Keyboard.dismiss}
          />

            <RectButton style={styles.button} onPress={handNavigationToPoints}>

                <View style={styles.buttonIcon}>
                  <Text>
                    <Icon name="arrow-right" color="#FFF" size={24} />
                  </Text>
                </View>

                <Text style={styles.buttonText}>
                  Entrar
                </Text>

            </RectButton>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
  
    main: {
      flex: 1,
      marginBottom: 0,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });

export default Home;