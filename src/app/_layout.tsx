// import {Stack} from "expo-router";
//
// export default function RootLayout() {
//     //navigation stack system
//     //there is other types of navigation
//
//
//     return
//
//     (<Stack screenOptions={{
//         headerStyle: {backgroundColor: "cornflowerblue"},
//         headerTintColor: "white",
//     }}
//     >
//         < Stack.Screen name="index" options={{title: "Home"}}/>
//         <Stack.Screen name="about" options={{title: "About"}}/>
//     </Stack>);
//
//
// }

import { Stack } from "expo-router";

export default function RootLayout() {
    // Navigation stack system
    // There are other types of navigation (like Tabs or Drawer)

    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "cornflowerblue" },
                headerTintColor: "white",
                animation: "fade_from_bottom",
            }}
        >
            {/* These names must match your file names (e.g., index.tsx and about.tsx) */}
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="about" options={{ title: "About" }} />
        </Stack>
    );
}
