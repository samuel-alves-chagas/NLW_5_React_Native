import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Header } from "../components/Header";
import { EnviromentButton } from "../components/EnviromentButton";

export function PlantSelect() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Header></Header>

        <Text style={styles.title}>Em qual ambiente</Text>

        <Text style={styles.subtitle}>Você quer colocar sua planta?</Text>
      </SafeAreaView>

      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <EnviromentButton title='Cozinha' active></EnviromentButton>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  enviromentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 20,
    marginVertical: 32,
  },
});
