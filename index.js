import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

// Import screens
import LoginScreen from '../screens/LoginScreen.js';
import HomeScreen from '../screens/Customer/HomeScreen.js';
import ProfileScreen from '../screens/Customer/ProfileScreen.js';
import CartScreen from '../screens/Customer/CartScreen.js';
import OrdersScreen from '../screens/Customer/OrdersScreen.js';
import ProductDetailScreen from '../screens/Customer/ProductDetailScreen.js';
import VendorDashboardScreen from '../screens/Vendor/DashboardScreen.js';
import VendorProductsScreen from '../screens/Vendor/ProductsScreen.js';
import VendorOrdersScreen from '../screens/Vendor/OrdersScreen.js';

// Create the navigators
const Stack = createStackNavigator();
const CustomerStack = createStackNavigator();
const VendorStack = createStackNavigator();
const CustomerTab = createBottomTabNavigator();
const VendorTab = createBottomTabNavigator();

// Customer Stack Navigator (for screens that need to be stacked on top of tabs)
const CustomerStackNavigator = () => {
  return (
    <CustomerStack.Navigator screenOptions={{ headerShown: false }}>
      <CustomerStack.Screen name="CustomerTabs" component={CustomerTabNavigator} />
      <CustomerStack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </CustomerStack.Navigator>
  );
};

// Customer Tab Navigator
const CustomerTabNavigator = () => {
  return (
    <CustomerTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2d6a4f',
        tabBarInactiveTintColor: '#757575',
        headerShown: false,
      }}
    >
      <CustomerTab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color }}>🏠</Text>,
        }}
      />
      <CustomerTab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color }}>🛒</Text>,
        }}
      />
      <CustomerTab.Screen 
        name="Orders" 
        component={OrdersScreen} 
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color }}>📦</Text>,
        }}
      />
      <CustomerTab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color }}>👤</Text>,
        }}
      />
    </CustomerTab.Navigator>
  );
};

// Vendor Tab Navigator
const VendorTabNavigator = () => {
  return (
    <VendorTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2d6a4f',
        tabBarInactiveTintColor: '#757575',
        headerShown: false,
      }}
    >
      <VendorTab.Screen 
        name="Dashboard" 
        component={VendorDashboardScreen} 
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color }}>📊</Text>,
        }}
      />
      <VendorTab.Screen 
        name="Products" 
        component={VendorProductsScreen} 
        options={{
          tabBarIcon: ({ color }) => <Text style={{ color }}>🌿</Text>,
        }}
      />
      <VendorTab.Screen 
        name="VendorOrders" 
        component={VendorOrdersScreen} 
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color }) => <Text style={{ color }}>📦</Text>,
        }}
      />
    </VendorTab.Navigator>
  );
};

// Main App Navigation
const AppNavigation = () => {
  const [userType, setUserType] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userType === null ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            initialParams={{ setUserType }}
          />
        ) : userType === 'customer' ? (
          <Stack.Screen name="CustomerStack" component={CustomerStackNavigator} />
        ) : (
          <Stack.Screen name="VendorTab" component={VendorTabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation; 