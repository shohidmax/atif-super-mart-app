import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image , Button } from 'react-native';
import Cart from './Component/Pages/Cart/Cart';
import Search from './Component/Pages/Search/Search';
import Slider from './Component/Pages/Slider/Slider'; 
import { NavigationContainer } from '@react-navigation/native';
import Menu from './Component/Pages/Menu/Menu';


export default function App() {
    const [data, setData] = useState([]);
    const [point, setPoint] = useState(0);
    // useEffect(() =>{
    //   fetch('https://restcountries.com/v3.1/all')
    //   .then(res => res.json())
    //   .than(data => setData(data))
    // },[])
    const fetchData = async () => {
      const resp = await fetch("https://restcountries.com/v3.1/all");
      const data = await resp.json();
      setData(data);
    };

  const counter2 = () =>{
    return setPoint(point + 1);
  };

  const counter3 = () =>{
    return setPoint(point - 1);
  }

  return (
    <View style={styles.container} >
      <Slider></Slider>
      <Search></Search>
      
      

      
      <View>
        <Button title="Incriment" color="blue" onPress={counter2} />
      </View>
      <View>
        <Button title="Decrement" color="red"  onPress={counter3} />
      </View>
    
      <Text>{point}</Text>
      <Cart></Cart>
      
      <NavigationContainer>
        
      </NavigationContainer> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    borderTopStartRadius:10
  },
});