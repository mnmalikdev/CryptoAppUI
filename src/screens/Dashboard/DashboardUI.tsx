import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import CoinList from '../../components/CoinList';
import LineChartComponent from '../../components/LineChart';

import styles from './styles';
const DashboardUI = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBarContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/avatarImage.png')}
            style={styles.avatarImage}
          />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/topIcon1.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/topicon2.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.actionPane}>
        {/* <-- This is actionpane row 2 */}
        <View style={styles.actionPaneRowOne}>
          <TouchableOpacity style={styles.actionItemContainer}>
            <Image
              style={{
                width: 70,
                height: 70,
              }}
              source={require('../../assets/icons/bottomicon1.png')}
            />
            <Text style={styles.h3}>trade</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItemContainer}>
            <Image
              style={{
                width: 70,
                height: 70,
              }}
              source={require('../../assets/icons/bottomicon2.png')}
            />
            <Text style={styles.h3}>add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItemContainer}>
            <Image
              style={{
                width: 70,
                height: 70,
              }}
              source={require('../../assets/icons/bottomicon3.png')}
            />
            <Text style={styles.h3}>referal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItemContainer}>
            <Image
              style={{
                width: 70,
                height: 70,
              }}
              source={require('../../assets/icons/bottomicon4.png')}
            />
            <Text style={styles.h3}>deposit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lineChartContainer}>
        <Text style={styles.h1}>Market Mover</Text>
        {/* react native chart here */}
        <LineChartComponent></LineChartComponent>
      </View>
      <View style={styles.TransactionStyles}>
        <Text style={styles.h1}>Recently Bought</Text>
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 12,
        }}>
        <CoinList />
      </View>
    </SafeAreaView>
  );
};

export default DashboardUI;
