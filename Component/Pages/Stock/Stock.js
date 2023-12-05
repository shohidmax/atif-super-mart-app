import React, { useState, useEffect } from 'react';
import { Text, View,ScrollView, StyleSheet, Button, TextInput, ActivityIndicator, RefreshControl } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner'; 


export default function Stock() {
    const notify = (copyMe) => toast('Copied!');

    let [Pdata, setPdata] = useState([]);
    const [loading, setloading] = useState('');
    const [Loadingg, setLoadingg] = useState(true);
    let [add, setAdd] = useState('');
    let [remove, setRemove] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('')
  const [copySuccess, setCopySuccess] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  } 
  const copyToClipBoard = async copyMe => {
    try {
      await Clipboard.setString(copyMe);
      setCopySuccess('Copied!');
      notify()
      alert('copied');
    } catch (err) {
      setCopySuccess('Failed to copy!');
    }
};
 
  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    findproduct(data)

    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  const findproduct = (B) =>{ 
    const Find = B;
    const url = `https://atifsupermart.onrender.com/damage-stock-update/${Find}`;
    console.log(url);
    fetch(url)
    .then(r => r.json(), setIsLoading(true))
    .then(data => {
        if (!data) {
            alert('No Data Found');
            
        }else{
            setPdata(data);
            setIsLoading(false)
            console.log(data);
            alert('Data load Successfully');
        }
    }); 
};
// https://atifsupermart.onrender.com
const handleAddToDamage = event =>{ 
    const ids = Pdata._id; 
    console.log('remover id ', ids);
    const Damage_Quntity = add;
    const reStock = parseFloat(Damage_Quntity) + Pdata.Damage_Quntity;
    const updatedStock = {reStock};

    const url = `https://atifsupermart.onrender.com/handleAddToDamage/${ids}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedStock)
    })
    .then(res => res.json(), setIsLoading(true))
    .then(data =>{
        setPdata(data);  
        setAdd = '';
        setIsLoading(false)
        setloading('')
        alert('Add to Damage Successfully');
        
    }) 
};
const handleRemoveDamage = event =>{  
    const ids = Pdata._id; 
    console.log('remover id ', ids);
    const Damage_Quntity = remove;
    const reStock =  Pdata.Damage_Quntity - parseFloat(Damage_Quntity);
    const updatedStock = {reStock}; 
    console.log(updatedStock ,); 

    const url = `https://atifsupermart.onrender.com/handleAddToDamage/${ids}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(updatedStock)
    })
    .then(res => res.json(), setIsLoading(true))
    .then(data =>{
        setPdata(data);  
        setRemove = '';
        setIsLoading(false);
        setloading('')
        alert('Remove Damage  Successfully'); 
       
    }) 
};
 
// -------------------------------------

  // Return the View
  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing}  onRefresh={onRefresh} />
    } >
      
      
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        {!scanned ? <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} /> :<Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
      </View>
 
      <Button onPress={() => copyToClipBoard(text)} title={text}/>

      {/* {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />} */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text>Data Loaded Successfully!</Text>
          {/* Render your content here */}
        </View>
      )}

      
        <Text>Product Details</Text> 
        <Text>add  Damage : {add || '00'} or Remove : { remove || '00'} </Text> 
        <View>
            {/* <Button title='load' onPress={() => findproduct('111111')}/> */}
            <Text>{loading}</Text>
            <Text>  {Pdata?.Brand}{" "}{Pdata?.Product}{" "} {Pdata?.Style}</Text>
            <Text>  Stock : {Pdata?.StockQty || '00'} {" "}Damage : {Pdata.Damage_Quntity || '00'}</Text>
        </View> 
        <View >
                <View>   
                <TextInput
                        keyboardType = 'numeric'
                        style={styles.input}
                        placeholder="Type Damage Quantity"
                        onChangeText={newText => setAdd(newText)}
                        defaultValue={loading} 
                    />
                        <Button style={styles.button1} onPress={() => handleAddToDamage()} title='Add to Damage'/>

                </View>
                <View> 
                    <TextInput 
                        keyboardType = 'numeric'
                        style={styles.input}
                        placeholder="Type Damage remove Quantity"
                        onChangeText={newText => setRemove(newText)}
                        defaulValue={loading} 
                    />
                        <Button color="#841584" style={styles.button} onPress={() => handleRemoveDamage ()} title='Remove Damage'/>
                </View> 
        </View> 
    </View>  
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button1: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'red',
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
      }

});
