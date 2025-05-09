import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from 'react-native';

// Sample data
const ANALYTICS = [
  { id: '1', title: 'Products', value: '24', icon: '📋' },
  { id: '2', title: 'Categories', value: '5', icon: '🌿' },
  { id: '3', title: 'Earnings', value: '$1,245.50', icon: '💰' },
  { id: '4', title: 'New Orders', value: '3', icon: '📦' },
];

const RECENT_ORDERS = [
  { id: 'ORD001', customer: 'John Doe', date: '10/15/2023', status: 'New', total: '$45.99' },
  { id: 'ORD002', customer: 'Jane Smith', date: '10/14/2023', status: 'Confirmed', total: '$32.50' },
  { id: 'ORD003', customer: 'Robert Johnson', date: '10/13/2023', status: 'Shipped', total: '$78.25' },
];

const StatusBadge = ({ status }) => {
  let bgColor;
  switch (status.toLowerCase()) {
    case 'new':
      bgColor = '#ffab00';
      break;
    case 'confirmed':
      bgColor = '#64dd17';
      break;
    case 'shipped':
      bgColor = '#00b0ff';
      break;
    case 'delivered':
      bgColor = '#00c853';
      break;
    default:
      bgColor = '#757575';
  }

  return (
    <View style={[styles.statusBadge, { backgroundColor: bgColor }]}>
      <Text style={styles.statusText}>{status}</Text>
    </View>
  );
};

const DashboardScreen = ({ navigation }) => {
  const renderAnalyticsItem = ({ item }) => (
    <View style={styles.analyticsCard}>
      <Text style={styles.analyticsIcon}>{item.icon}</Text>
      <Text style={styles.analyticsValue}>{item.value}</Text>
      <Text style={styles.analyticsTitle}>{item.title}</Text>
    </View>
  );

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity style={styles.orderItem}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderId}>{item.id}</Text>
        <StatusBadge status={item.status} />
      </View>
      <View style={styles.orderDetails}>
        <Text style={styles.orderCustomer}>Customer: {item.customer}</Text>
        <Text style={styles.orderDate}>Date: {item.date}</Text>
        <Text style={styles.orderTotal}>Total: {item.total}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Vendor Dashboard</Text>
          <Text style={styles.headerSubtitle}>Welcome to your store management</Text>
        </View>

        <View style={styles.analyticsContainer}>
          <FlatList
            data={ANALYTICS}
            renderItem={renderAnalyticsItem}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.analyticsRow}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Orders</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={RECENT_ORDERS}
            renderItem={renderOrderItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Store Performance</Text>
          </View>
          <View style={styles.performanceCard}>
            <View style={styles.performanceItem}>
              <View style={styles.performanceHeader}>
                <Text style={styles.performanceLabel}>Profile Completion</Text>
                <Text style={styles.performanceValue}>85%</Text>
              </View>
              <View style={styles.progressBarContainer}>
                <View 
                  style={[
                    styles.progressBar, 
                    { width: '85%', backgroundColor: '#4caf50' }
                  ]} 
                />
              </View>
            </View>
            
            <View style={styles.performanceItem}>
              <View style={styles.performanceHeader}>
                <Text style={styles.performanceLabel}>Customer Rating</Text>
                <Text style={styles.performanceValue}>4.8/5</Text>
              </View>
              <View style={styles.progressBarContainer}>
                <View 
                  style={[
                    styles.progressBar, 
                    { width: '96%', backgroundColor: '#4caf50' }
                  ]} 
                />
              </View>
            </View>

            <TouchableOpacity style={styles.improveButton}>
              <Text style={styles.improveButtonText}>Improve Your Store</Text>
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
    backgroundColor: '#2d6a4f',
    padding: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
  },
  analyticsContainer: {
    padding: 16,
  },
  analyticsRow: {
    justifyContent: 'space-between',
  },
  analyticsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  analyticsIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  analyticsValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d6a4f',
    marginBottom: 4,
  },
  analyticsTitle: {
    fontSize: 14,
    color: '#757575',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
  },
  seeAllText: {
    color: '#2d6a4f',
    fontWeight: '600',
  },
  orderItem: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  orderDetails: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
  orderCustomer: {
    fontSize: 14,
    marginBottom: 4,
  },
  orderDate: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 4,
  },
  orderTotal: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2d6a4f',
  },
  performanceCard: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  performanceItem: {
    marginBottom: 16,
  },
  performanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  performanceLabel: {
    fontSize: 14,
    color: '#212121',
  },
  performanceValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2d6a4f',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
  improveButton: {
    backgroundColor: '#9bc53d',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  improveButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default DashboardScreen; 