import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const Config = ({ navigation, route }) => {
  const [fill, setFill] = useState(new Animated.Value(0));
  const [fillPercentage, setFillPercentage] = useState(0);
  const [savedFoods, setSavedFoods] = useState([]);

  useEffect(() => {
    const loadSavedFoods = async () => {
      try {
        const savedFoodsData = await AsyncStorage.getItem('savedFoods');
        if (savedFoodsData) {
          const parsedSavedFoods = JSON.parse(savedFoodsData);
          if (Array.isArray(parsedSavedFoods)) {
            setSavedFoods(parsedSavedFoods);
            const completedFoods = parsedSavedFoods.filter(food => food.quantity > 0).length;
            const newFillPercentage = (completedFoods / parsedSavedFoods.length) * 100;
            setFillPercentage(newFillPercentage);
            animateFill(newFillPercentage);
          } else {
            setSavedFoods([]);
          }
        } else {
          setSavedFoods([]);
        }
      } catch (error) {
        console.error('Error loading saved foods:', error);
        setSavedFoods([]);
      }
    };

    loadSavedFoods();
  }, []);

  useEffect(() => {
    if (route.params?.newFood) {
      const addNewFood = async () => {
        const updatedFoods = [...savedFoods, { food: route.params.newFood, quantity: 0 }];
        setSavedFoods(updatedFoods);
        try {
          await AsyncStorage.setItem('savedFoods', JSON.stringify(updatedFoods));
        } catch (error) {
          console.error('Error saving new food:', error);
        }
      };
      addNewFood();
    }
  }, [route.params?.newFood]);

  const animateFill = (newFillPercentage) => {
    Animated.timing(fill, {
      toValue: newFillPercentage,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const toggleFoodCompletion = async (index) => {
    const updatedFoods = [...savedFoods];
    updatedFoods[index].quantity = updatedFoods[index].quantity === 0 ? 1 : 0;

    const completedFoods = updatedFoods.filter(food => food.quantity > 0).length;
    const newFillPercentage = (completedFoods / updatedFoods.length) * 100;

    setSavedFoods(updatedFoods);
    setFillPercentage(newFillPercentage);
    animateFill(newFillPercentage);

    try {
      await AsyncStorage.setItem('savedFoods', JSON.stringify(updatedFoods));
      // Reload saved foods after updating AsyncStorage
      const savedFoodsData = await AsyncStorage.getItem('savedFoods');
      const parsedSavedFoods = JSON.parse(savedFoodsData);
      setSavedFoods(Array.isArray(parsedSavedFoods) ? parsedSavedFoods : []);
    } catch (error) {
      console.error('Error saving foods:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>List</Text>
        <View style={styles.scaleContainer}>
          <Animated.View style={[styles.fill, { width: `${fillPercentage}%` }]} />
        </View>
      </View>
      <FlatList
        data={savedFoods.filter(item => item.food.trim() !== '')}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.foodItem} onPress={() => toggleFoodCompletion(index)}>
            {item.quantity > 0 && (
              <View style={[styles.foodBought, { backgroundColor: 'orange' }]}>
                <Ionicons name="checkmark" size={24} color="white" />
              </View>
            )}
            <Text style={styles.foodName}>{item.food}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Food')}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#111" },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 20, color: "#fff", marginBottom: 10 },
  scaleContainer: { width: '85%', height: 20, backgroundColor: '#333', borderRadius: 10, overflow: 'hidden', marginTop: 23, marginLeft: 30, },
  fill: { height: '100%', backgroundColor: 'orange', borderRadius: 5000 },
  headerContainer: { flexDirection: "row", backgroundColor: "#222", marginHorizontal: -20, paddingHorizontal: 20, paddingTop: 40, marginTop: -30, marginBottom: 10 },
  addButton: { marginTop: 20, backgroundColor: '#333', padding: 10, borderRadius: 500, alignItems: 'center', width: 140, height: 50, justifyContent: "center", alignItems: "center", position: "absolute", bottom: 50, right: 20 },
  addButtonText: { color: '#fff', fontSize: 19, fontWeight: "bold" },
  foodItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, backgroundColor: "#222", borderRadius: 102, marginBottom: 5 },
  foodName: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginLeft: 20, },
  foodQuantity: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginRight: 8, marginLeft: 16 },
  oval: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#111', marginRight: 8, position: "absolute", right: 2 },
  foodBought: { borderRadius: 100, position: "absolute", right: 7, height: 27, width: 27, }
});

export default Config;
