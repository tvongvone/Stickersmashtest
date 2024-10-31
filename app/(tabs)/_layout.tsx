import { Stack } from "expo-router";
/* @tutinfo */
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";


export default function RootLayout() {
  /* @tutinfo Add the <CODE>useEffect</CODE> hook to set the status bar style to <CODE>light</CODE> when the app loads. */
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

// ...rest of the import statements remain same
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  // ...rest of the code remains same

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        {/* ...rest of the code remains same */}
      </GestureHandlerRootView>
      /* @tutinfo Mount the <CODE>StatusBar</CODE> component and set the <CODE>style</CODE> prop to <CODE>light</CODE>. */
      <StatusBar style="light" />
    </>
  );
}
