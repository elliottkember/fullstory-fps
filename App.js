import React from 'react';
import { FlatList, Image, Text, TouchableHighlight, View } from 'react-native';

const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    title: 'Item ' + i,
  });
}

export default function App() {
  return (
    <FlatList
      style={{ flexGrow: 1 }}
      data={data}
      getItemLayout={(data, index) => ({
        length: 80,
        offset: 80 * index,
        index,
      })}
      renderItem={({ item, index }) => (
        <TouchableHighlight
          style={{
            height: 80,
            padding: 24,
            backgroundColor: 'white',
            flexDirection: 'row',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{ uri: 'http://placekitten.com/48/48' }}
              style={{ width: 48, height: 48, marginRight: 12 }}
            />

            <View style={{ flexDirection: 'column' }}>
              <Text>
                Item {index}/{data.length}
              </Text>
              <Text>Second line</Text>
              <Text>Third line</Text>
              <Text>invisible line</Text>
              <Text>invisible line</Text>
              <Text>invisible line</Text>
              <Text>invisible line</Text>
              <Text>invisible line</Text>
              <Text>invisible line</Text>
              <Text>invisible line</Text>
              <Text>invisible line</Text>
              <Text>invisible line</Text>
              <Text>invisible line</Text>
              <Text>invisible line</Text>
            </View>
          </View>
        </TouchableHighlight>
      )}
    />
  );
}
