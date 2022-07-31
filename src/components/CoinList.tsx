import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';

const CoinList = () => {
  const coins = [
    {
      Name: 'Bitcoin',
      symbol: 'BTC',
      priceBought: '$12,000.00',
      current: '$1,000.00',
      image: require('./../assets/icons/eth-icon.png'),
    },
    {
      Name: 'Chainlink',
      symbol: 'LINK',
      priceBought: '$12,000.00',
      current: '$1,000.00',
      image: require('./../assets/icons/coin1.png'),
    },
    {
      Name: 'Cardano',
      symbol: 'ADA',
      priceBought: '$12,000.00',
      current: '$1,000.00',
      image: require('./../assets/icons/coin2.png'),
    },
    {
      Name: 'ShibaInu',
      symbol: 'SHIBA',
      priceBought: '$12,000.00',
      current: '$1,000.00',
      image: require('./../assets/icons/coin3.png'),
    },
    {
      Name: 'HIFI',
      symbol: 'MFT',
      priceBought: '$12,000.00',
      current: '$1,000.00',
      image: require('./../assets/icons/coin4.png'),
    },
    {
      Name: 'REN',
      symbol: 'REN',
      priceBought: '$12,000.00',
      current: '$1,000.00',
      image: require('./../assets/icons/coin5.png'),
    },
  ];
  return (
    <View>
      <FlatList
        data={coins}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {/* view to manage image and parallel name of coin and symbol */}
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 10,
                }}>
                <View>
                  <Image source={item.image} />
                </View>
                <View
                  style={{
                    paddingLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#E0E0E0',
                    }}>
                    {item.Name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '400',
                      color: '#777777',
                    }}>
                    {item.symbol}
                  </Text>
                </View>
              </View>
              <View>
                <View
                  style={{
                    marginVertical: 14,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '500',
                      color: '#E0E0E0',
                    }}>
                    {item.priceBought}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      color: '#777777',
                    }}>
                    {item.current}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CoinList;
