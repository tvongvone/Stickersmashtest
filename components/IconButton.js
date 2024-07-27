import {View, Pressable} from 'react-native'

export default function IconButton() {
    return (
        <View>
            <Pressable onPress={props.onPress}></Pressable>
        </View>
    )
}
