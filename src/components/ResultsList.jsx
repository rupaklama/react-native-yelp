import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, stores }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.titleStyle}>{title}</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={stores}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        return <ResultsDetail data={item} />;
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  containerStyle: {
    marginBottom: 10,
  },
});

export default ResultsList;
