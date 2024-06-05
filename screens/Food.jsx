import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';
import products from '../js/List';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Food = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = products.filter(product =>
      product.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleItemClick = (item) => {
    const updatedSelectedItems = [...selectedItems, item];
    setSelectedItems(updatedSelectedItems);
  };

  const handlePublish = async () => {
    // Save selected items to AsyncStorage
    try {
      await AsyncStorage.setItem('selectedItems', JSON.stringify(selectedItems));
      // Navigate to Config.jsx
      navigation.navigate('Config');
    } catch (error) {
      console.error('Error saving selected items:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Config')}>
          <Text style={styles.title}>{'<'}</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for product"
          placeholderTextColor={'grey'}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredProducts.filter(item => item.trim() !== '')}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.addButton} onPress={() => handleItemClick(item)}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.item}>{item}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
        <Text style={styles.publishButtonText}>Publish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#111" },
  itemContainer: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  item: { fontSize: 18, color: '#fff', fontWeight: "bold", flex: 1 },
  clickCount: { fontSize: 16, fontWeight:"bold", color: '#ccc', marginLeft: 10 },
  addButton: { backgroundColor: '#333', padding: 5, borderRadius: 50, width: 30, height: 30, justifyContent: "center", alignItems: "center", paddingTop: 3, marginRight: 10, },
  addButtonText: { color: '#fff', fontSize: 20, fontWeight: "bold" },
  headerContainer: { flexDirection: "row", backgroundColor: "#222", marginHorizontal: -20, paddingHorizontal: 20, paddingTop: 40, marginTop: -30, justifyContent: "space-between", alignItems: "center", },
  title: { fontSize: 24, fontWeight: 'bold', color: "#fff", marginBottom: 10, marginTop: 5, },
  searchInput: { height: 40, width: 300, backgroundColor: '#333', color: '#fff', paddingHorizontal: 10, borderRadius: 50, marginBottom: 10, fontWeight: "bold", marginTop: 10, },
  input: { color: "white", fontWeight: "bold", width: 200, fontSize: 18, backgroundColor: "#222", padding: 0, paddingHorizontal: 10, borderRadius: 12, },
  backButton: { backgroundColor: "#333", width: 60, height: 40, borderRadius: 500, justifyContent: "center", alignItems: "center", },
  publishButton: { backgroundColor: '#333', padding: 15, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  publishButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default Food;
