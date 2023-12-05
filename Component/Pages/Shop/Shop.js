import React, { Component, useEffect, useState } from 'react'
import { ActivityIndicator , Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import useProducts from '../../Hooks/useProducts';
const styles = StyleSheet.create({
  container: {
    padding: 5,
    width:150,
    borderWidth: 3,
    borderColor: 'red',
  },
  stretch: {
    width: 120,
    height: 150,
    resizeMode: 'stretch',
    marginLeft: 6
  },
  butt: {
    paddingBottom:6,
    borderRadius: 20
  },
  text:{
    marginLeft: 6,

  }
});
 
const Shop = () => {
  const [Products, setProducts] = useProducts();
  console.log(Products);
  // if (Products.length !== 0) {
  //   return <ActivityIndicator size="small" color="#0000ff" />;
  // }
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);
  // console.log(data);

  // useEffect(() => {
  //   fetch('https://atifsupermart.onrender.com/Products')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);
  const red = [
    {"BarCode": 8941100658611, "Brand": "VASELINE", "CPU": 231.42, "CPU_Value": 0, "Damage_Quntity": 0, "Group": "TOILETRIES", "Product": "LOTION", "RPU": 270, "RPU_Value": 0, "Status": "active", "StockQty": 0, "Stock_Qty": 3, "Style": "ALOE FRESH 200ML", "Supplier_Name": "UNILEVER BANGLADESH LTD", "_id": "64b586a1fd8916a877d7c3ca", "comment": 0, "like": 0, "review": 0}
  ]
 
  return (
    <View> 
        <SafeAreaView>
          
          <ScrollView>
           {
            Products.map((r, q ) => {
              return(
                <View style={styles.container}>
                <Image style={styles.stretch} source={{ uri:'https://chaldn.com/_mpimage/nutrilife-mango-juice-160-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131477&q=best&v=1', }}/>
                <Text>{r.Brand} {r.Style}</Text>
                <Text style={{textAlign:'right'}}> more .. </Text>
                <Text>125 / 4.5 * </Text>
                <Text>TK . {r.RPU} </Text>
                <Button style={styles.butt} title='Add to Cart'/>
                <Button style={styles.butt} title='Buy Now'/>
               </View>
              )
            })
           }
          </ScrollView>
        </SafeAreaView>
      </View>
  );
};

export default Shop;


          // <View style={styles.container}>
          //   <Image style={styles.stretch} source={{ uri:'https://chaldn.com/_mpimage/nutrilife-mango-juice-160-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131477&q=best&v=1', }}/>
          //   <Text>nutralife orange juice 150 ml</Text>
          //   <Text style={{textAlign:'right'}}> more about </Text>
          //   <Text>125 / 4.5 * </Text>
          //   <Button style={styles.butt} title='Add to Cart'/>
          //   <Button style={styles.butt} title='Buy Now'/>
          //  </View>