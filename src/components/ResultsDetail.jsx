import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ResultsDetail = ({ data }) => {
  return (
    <View style={styles.containerStyle}>
      {/* uri is an identifier of a specific resource */}
      <Image source={{ uri: data.image_url }} style={styles.imageStyle} />
      <Text style={styles.nameStyle}>{data.name}</Text>
      <Text>
        {data.rating} Stars, {data.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
