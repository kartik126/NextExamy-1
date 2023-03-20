//import liraries
import {t} from 'i18n-js';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../styles';

// create a component
const Button = ({text, onpress,color, load, ...props}) => {
  return (
    <Pressable style={[styles.button,{backgroundColor:color ? "white" : colors.primaryBlue,borderWidth:color ? 0.5 : 0, }]} onPress={onpress}>
      {load ? 
      <View style={{alignSelf:"center",width:"100%"}}>
      <ActivityIndicator size="small" color={colors.white} />
      </View> 
      :
      <>
      <Text
        style={[
          styles.p,
          {fontSize: 18, color: color ? colors.gray : colors.white, fontFamily: 'Poppins-Medium'},
        ]}>
        {text}
      </Text>
        
        </>
}
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    width: '87%',
    height: 50,
    borderRadius: 10,
    borderColor:"#575757",
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent:'center',
    marginTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});

//make this component available to the app
export default Button;
