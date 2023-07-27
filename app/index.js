import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES} from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

const Home = () => {

    const rounter = useRouter();

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite, shadowOpacity: 20},
                    headerShadowVisible: true,
                    shadowOpacity: 300,
                }} 
            />
        </SafeAreaView>
    )
}

export default Home;