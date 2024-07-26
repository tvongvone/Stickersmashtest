import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageView from './components/ImageView';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';

const PlaceHolderImage = require('./assets/images/starry-night.png')

export default function App() {

  const [selectedImage, setImage] = useState(null)
  const [showAppOptions, setShowAppOptions] = useState(false)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    })

    if(!result.canceled) {
      setImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      console.log('You did not choose a image.')
    }
  }

  // The conditional for is when we choose a photo a modal will pop up with options

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageView placeHolderImage={PlaceHolderImage} selectedImage={selectedImage}/>
      </View>

      {showAppOptions ? (
        <View />
      ) : (
        <View style={styles.footContainer}>
          <Button theme='primary' label='Choose a photo' onPress={pickImageAsync}/>
          <Button label='Use this photo' onPress={() => setShowAppOptions(true)}/>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },

  footContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  }
});
