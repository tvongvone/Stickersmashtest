import { StyleSheet, Image } from "react-native";

// Expected Format for Image Source in React Native: In React Native, when you want to display
// an image, you typically use the Image component or similar components like ImageBackground.
// These components expect the source prop to be an object with a uri property pointing to the image's location.


export default function ImageView({placeHolderImage, selectedImage}) {
    const imageSource = selectedImage ? {uri: selectedImage} : placeHolderImage

    return (
        <Image source={imageSource} style={styles.image}/>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})
