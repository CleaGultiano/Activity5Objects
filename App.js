import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const data =

    [
        {"id": 1, first_name: "Manny", "last_name": "McNeilley", "nickname": "Man", "course": "Criminology", "year": 1},
        {"id": 2, "first_name": "Danika", "last_name": "Christofle", "nickname": "Nik", "course": "Criminology", "year": 2},
        {"id": 3, "first_name": "Megan", "last_name": "Gaddes", "nickname": "Meg", "course": "Criminology", "year": 3},
        {"id": 4, "first_name": "Sammuel", "last_name": "Skures", "nickname": "Sam", "course": "Criminology", "year": 4},
        {"id": 5, "first_name": "Deibe", "last_name": "Robelet", "nickname": "Deb", "course": "Criminology", "year": 5},
        {"id": 6, "first_name": "Cally", "last_name": "McKinless", "nickname": "Cal", "course": "Criminology", "year": 6},
        {"id": 7, "first_name": "Hansel", "last_name": "Edmondson", "nickname": "Hans", "course": "Criminology", "year": 7},
        {"id": 8, "first_name": "Sandy", "last_name": "Doha", "nickname": "San", "course": "Criminology", "year": 8},
        {"id": 9, "first_name": "Anne", "last_name": "Coffy", "nickname": "Anne", "course": "Criminology", "year": 9},
             
        // Add more items here...
        {"id": 73, "first_name": "Ingar", "last_name": "Danat", "nickname": "Sebastiano", "course": "Course73", "year": 73}
      
      
];


  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <Text>{item.nickname}</Text>
    </TouchableOpacity>
  );
return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List of Nicknames:</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      <Text>Selected Item Information:</Text>
      <ScrollView>
        {selectedItem && (
          <View>
            <Text>First Name: {selectedItem.first_name}</Text>
            <Text>Last Name: {selectedItem.last_name}</Text>
            <Text>Nickname: {selectedItem.nickname}</Text>
            <Text>Course: {selectedItem.course}</Text>
            <Text>Year: {selectedItem.year}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default App;
