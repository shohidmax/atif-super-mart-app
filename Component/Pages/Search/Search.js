import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Grapes' },
  ]);

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setData(filteredData);
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{ height: 15, borderWidth: 1, margin: 10, padding: 10 , width:250}}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchText}
      />
      {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      /> */}
    </View>
  );
};

export default Search;

