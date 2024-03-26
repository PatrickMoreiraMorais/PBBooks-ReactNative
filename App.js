import { StyleSheet, View } from 'react-native';
import BookListPage from './src/pages/BookListPage';
import BookListDetailsPage from './src/pages/BookListDetailsPage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

 const Stack = createStackNavigator()
  return (
    // <View style={styles.container}>
    //   <BookListPage/>
    // </View>
    <NavigationContainer>  
    <Stack.Navigator>
      <Stack.Screen name='List Books' component={BookListPage} />
      <Stack.Screen name='List Books Details' component={BookListDetailsPage}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    marginBottom: 90,
  },
});
