import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params || {
    name: 'Organic Lavender Buds',
    price: 5.99,
    category: 'Herbs',
    description: 'Our organic lavender buds are sourced from the finest fields, hand-picked and naturally dried to preserve their potent aroma and therapeutic properties. Ideal for relaxation, sleep aids, and culinary uses.',
    vendor: "Nature's Touch Herbs",
    stock: 100
  };

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
        </View>

        {product.image ? (
          <Image 
            source={product.image} 
            style={styles.productImage}
            resizeMode="cover"
          />
        ) : (
          <View style={[styles.productImage, { backgroundColor: product.color || '#2d6a4f' }]}>
            <Text style={styles.productImageText}>{product.name.charAt(0)}</Text>
          </View>
        )}

        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{product.category}</Text>
            </View>
          </View>

          <Text style={styles.priceText}>${product.price.toFixed(2)}</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
          </View>

          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Vendor:</Text>
              <Text style={styles.detailValue}>{product.vendor}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Availability:</Text>
              <Text style={styles.stockText}>{product.stock} in stock</Text>
            </View>
          </View>

          <View style={styles.addToCartSection}>
            <View style={styles.quantitySelector}>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={decreaseQuantity}
              >
                <Text style={styles.quantityButtonText}>−</Text>
              </TouchableOpacity>
              <View style={styles.quantityDisplay}>
                <Text style={styles.quantityText}>{quantity}</Text>
              </View>
              <TouchableOpacity 
                style={styles.quantityButton}
                onPress={increaseQuantity}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
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
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: '#2d6a4f',
    fontSize: 16,
    fontWeight: '500',
  },
  productImage: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImageText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  contentContainer: {
    padding: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
    flex: 1,
  },
  categoryBadge: {
    backgroundColor: '#9bc53d',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  categoryText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 12,
  },
  priceText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e76f51',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#424242',
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    color: '#2d6a4f',
    fontWeight: '500',
  },
  stockText: {
    fontSize: 16,
    color: '#4caf50',
    fontWeight: '500',
  },
  addToCartSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  quantityButton: {
    backgroundColor: '#2d6a4f',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityDisplay: {
    paddingHorizontal: 16,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#2d6a4f',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default ProductDetailScreen; 