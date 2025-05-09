import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';

// Sample products
const PRODUCTS = [
  { 
    id: '1', 
    name: 'Organic Lavender Buds', 
    price: 5.99, 
    stock: 120, 
    category: 'Herbs' 
  },
  { 
    id: '2', 
    name: 'Chamomile Tea Blend', 
    price: 6.99, 
    stock: 85, 
    category: 'Teas' 
  },
];

const ProductsScreen = () => {
  const renderProduct = ({ item }) => (
    <View style={styles.productItem}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productCategory}>{item.category}</Text>
        <Text style={styles.productStock}>In stock: {item.stock}</Text>
      </View>
      <View style={styles.productPrice}>
        <Text style={styles.priceText}>${item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.productActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.deleteButton]}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Products</Text>
      </View>
      
      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Product</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={PRODUCTS}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productsList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  header: {
    backgroundColor: '#2d6a4f',
    padding: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  addButton: {
    backgroundColor: '#9bc53d',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  productsList: {
    padding: 16,
  },
  productItem: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 4,
  },
  productStock: {
    fontSize: 14,
    color: '#4caf50',
  },
  productPrice: {
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d6a4f',
  },
  productActions: {
    justifyContent: 'center',
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#2d6a4f',
    borderRadius: 4,
    marginBottom: 8,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: '#f44336',
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ProductsScreen; 