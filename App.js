import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import ImageView from './components/ImageView';
import Button from './components/Button';
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react';
import domtoimage from 'dom-to-image';



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

  const onReset = () => {
    setShowAppOptions(false)
  }

  const onAddSticker = () => {
    // We will implement this sticker later
  }

  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });
        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('Saved!');
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageView placeHolderImage={PlaceHolderImage} selectedImage={selectedImage}/>
      </View>

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
          <View>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {/* ...rest of the code remains same */}
    </View>
        </View>
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
