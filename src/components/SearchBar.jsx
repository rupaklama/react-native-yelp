import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name='search1' style={styles.iconStyle} />
      <TextInput
        placeholder='Search'
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: '#AED6F1',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    // alignItems: 'center',
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 18,
    padding: 10,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
