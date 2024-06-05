import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  const [lists, setLists] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>My lists</Text>
      </View>
      {lists.length === 0 ? (
        <TouchableOpacity style={styles.listContainer} onPress={() => navigation.navigate('Config')}>
          <Text style={styles.plus}>+</Text>
          <Text style={styles.addListText}>ADD LIST</Text>
        </TouchableOpacity>
      ) : (
        <FlatList
          data={lists}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#111" },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 20, color: "#fff", marginBottom: 10 },
  item: { padding: 10, fontSize: 18, borderBottomWidth: 1, borderBottomColor: '#ccc', color: '#fff' },
  listContainer: { backgroundColor: "#222", width: '100%', height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 12, marginBottom: 20 },
  plus: { fontSize: 32, color: "white", fontWeight: 'bold', marginRight: 10 },
  addListText: { fontSize: 16, fontWeight: "bold", color: "white", marginTop: 2 },
  headerContainer: { flexDirection: "row", backgroundColor: "#222", marginHorizontal: -20, paddingHorizontal: 20, paddingTop: 40, marginTop: -30, }
});

export default Home;
