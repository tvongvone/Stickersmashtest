export default function EmojiSticker({ imageSize, stickerSource }) {

const doubleTap = Gesture.Tap()
  .numberOfTaps(2)
  .onStart(() => {
    if (scaleImage.value !== imageSize * 2) {
      scaleImage.value = scaleImage.value * 2;
    }
  });


    return (
      <View style={{ top: -350 }}>
        <Animated.Image
          source={stickerSource}
          resizeMode="contain"
          style={{ width: imageSize, height: imageSize }}
        />
      </View>
    );
  }
