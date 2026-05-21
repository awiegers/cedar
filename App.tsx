import { memo } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Provider } from 'react-redux';
import { store } from './store/store';

import RecipesScreen from './screens/RecipesScreen';
import ShoppingScreen from './screens/ShoppingScreen';


const Tab = createBottomTabNavigator();

const RecipesIcon = memo(({ focused, focus_icon, icon }: { focused: boolean, focus_icon: string, icon: string }) => (
  <Ionicons
   name={focused ? focus_icon : icon}
   size={24}
   color={focused ? '#007AFF' : 'white'}
  />
));

function AppTabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen
          name='Recipes' 
          component={RecipesScreen}
          options={{
            tabBarAccessibilityLabel: 'Recipes tab',
            tabBarIcon: (tabInfo) => <RecipesIcon 
              focused={tabInfo.focused} 
              focus_icon={'book'} 
              icon={'book-outline'}
            />
          }}
        />
        <Tab.Screen 
          name='Shopping List' 
          component={ShoppingScreen}
          options={{
            tabBarAccessibilityLabel: 'Shopping List tab',
            tabBarIcon: (tabInfo) => <RecipesIcon 
              focused={tabInfo.focused} 
              focus_icon={'basket'} 
              icon={'basket-outline'}
            />
          }}
        />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={NavTheme}>
        <AppTabs />
      </NavigationContainer>
    </Provider>
  );
}

const NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: '#454f2c',
    text: 'white',
  }
}
