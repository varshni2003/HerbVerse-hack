import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  TextInput
} from 'react-native';

// Import products data
import { PRODUCTS, CATEGORIES } from '../../constants/ProductData';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get greeting based on time of day
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good Morning';
    if (hours < 18) return 'Good Afternoon';
    return 'Good Evening';
  };
  
  const renderProductItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <View 
        style={[styles.productImage, { backgroundColor: item.color || '#2d6a4f' }]}
      >
        <Text style={styles.productImageText}>{item.name.charAt(0)}</Text>
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productCategory}>{item.category}</Text>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={(e) => {
            e.stopPropagation(); // Prevent triggering the parent TouchableOpacity
            console.log('Add to cart:', item.name);
          }}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryCard}>
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>
            {getGreeting()}, User!
          </Text>
          <Text style={styles.subGreeting}>
            What herbal treasures are you seeking today?
          </Text>
        </View>
        
        {/* Search bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search herbs or wellness products"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        
        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        
        {/* Featured banner */}
        <TouchableOpacity style={styles.bannerContainer}>
          <View style={styles.banner}>
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>Winter Wellness Pack</Text>
              <Text style={styles.bannerDescription}>
                Boost your immunity this season with our specially curated blend.
              </Text>
              <TouchableOpacity style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>Shop Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        
        {/* Product list */}
        <View style={styles.productsContainer}>
          <Text style={styles.sectionTitle}>Popular Products</Text>
          <FlatList
            data={PRODUCTS}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  greeting: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2d6a4f',
    marginBottom: 4,
  },
  subGreeting: {
    fontSize: 14,
    color: '#757575',
  },
  searchContainer: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  categoriesContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d6a4f',
    marginBottom: 12,
    paddingHorizontal: 24,
  },
  categoryCard: {
    alignItems: 'center',
    marginLeft: 24,
    marginRight: 8,
    width: 80,
  },
  categoryIcon: {
    fontSize: 28,
    marginBottom: 4,
  },
  categoryName: {
    fontSize: 12,
    textAlign: 'center',
  },
  bannerContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  banner: {
    height: 150,
    backgroundColor: '#2d6a4f',
    borderRadius: 8,
    overflow: 'hidden',
  },
  bannerContent: {
    padding: 16,
    justifyContent: 'center',
    height: '100%',
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  bannerDescription: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 16,
    opacity: 0.8,
  },
  bannerButton: {
    backgroundColor: '#9bc53d',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  productsContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
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
  productImage: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  productDetails: {
    padding: 12,
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 12,
    color: '#9bc53d',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d6a4f',
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#2d6a4f',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default HomeScreen; 