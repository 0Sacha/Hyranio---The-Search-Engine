import React from 'react';
import { withExpoSnack } from 'nativewind';

import { Pressable, Text } from "react-native"
import { styled, useColorScheme } from "nativewind";

const StyledPressable = styled(Pressable)
const StyledText = styled(Text)

function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <StyledPressable
      onPress={toggleColorScheme}
      className="flex-1 items-center justify-center dark:bg-slate-800"
    >
      <StyledText
        selectable={false}
        className="dark:text-white"
      >
        {`Try clicking me! ${colorScheme === "dark" ? "🌙" : "🌞"}`}
      </StyledText>
    </StyledPressable>
  );
}

// This demo is using a external compiler that will only work in Expo Snacks.
// You may see flashes of unstyled content, this will not occur under normal use!
// Please see the documentation to setup your application
export default withExpoSnack(App);
