import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

// Sample orders
const ORDERS = [
  { 
    id: 'ORD001', 
    customer: 'John Doe', 
    date: '10/15/2023', 
    total: '$45.99', 
    status: 'New',
    items: [
      { name: 'Organic Lavender Buds', quantity: 2 }
    ]
  },
  { 
    id: 'ORD002', 
    customer: 'Jane Smith', 
    date: '10/14/2023', 
    total: '$32.50', 
    status: 'Confirmed',
    items: [
      { name: 'Chamomile Tea Blend', quantity: 1 },
      { name: 'Peppermint Essential Oil', quantity: 1 }
    ]
  },
  { 
    id: 'ORD003', 
    customer: 'Robert Johnson', 
    date: '10/13/2023', 
    total: '$78.25', 
    status: 'Shipped',
    items: [
      { name: 'Winter Wellness Pack', quantity: 1 }
    ]
  },
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

const OrdersScreen = () => {
  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <View style={styles.orderHeader}>
        <View>
          <Text style={styles.orderId}>Order #{item.id}</Text>
          <Text style={styles.orderDate}>{item.date}</Text>
        </View>
        <StatusBadge status={item.status} />
      </View>
      
      <View style={styles.orderDetails}>
        <Text style={styles.customerName}>Customer: {item.customer}</Text>
        <Text style={styles.orderTotal}>Total: {item.total}</Text>
        
        <View style={styles.orderItems}>
          <Text style={styles.itemsTitle}>Items:</Text>
          {item.items.map((orderItem, index) => (
            <Text key={index} style={styles.itemText}>
              {orderItem.quantity}x {orderItem.name}
            </Text>
          ))}
        </View>
        
        <View style={styles.actionButtons}>
          {item.status === 'New' && (
            <TouchableOpacity style={[styles.actionButton, styles.confirmButton]}>
              <Text style={styles.actionButtonText}>Confirm</Text>
            </TouchableOpacity>
          )}
          
          {item.status === 'Confirmed' && (
            <TouchableOpacity style={[styles.actionButton, styles.shipButton]}>
              <Text style={styles.actionButtonText}>Ship</Text>
            </TouchableOpacity>
          )}
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Orders</Text>
      </View>
      
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>New</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Confirmed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Shipped</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={ORDERS}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.ordersList}
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
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#2d6a4f',
  },
  tabText: {
    color: '#757575',
  },
  activeTabText: {
    color: '#2d6a4f',
    fontWeight: '600',
  },
  ordersList: {
    padding: 16,
  },
  orderItem: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 16,
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderDate: {
    fontSize: 14,
    color: '#757575',
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
    padding: 16,
  },
  customerName: {
    fontSize: 14,
    marginBottom: 4,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d6a4f',
    marginBottom: 12,
  },
  orderItems: {
    marginBottom: 16,
  },
  itemsTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemText: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 2,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: '#2d6a4f',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginRight: 8,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: '#4caf50',
  },
  shipButton: {
    backgroundColor: '#00b0ff',
  },
});

export default OrdersScreen; 