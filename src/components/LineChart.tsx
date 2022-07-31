import React from 'react';
import {Image, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {LineChart} from 'react-native-wagmi-charts';
import ChartData from '../utils/data';
const LineChartComponent = () => {
  return (
    <View>
      <View
        style={{
          justifyContent: 'flex-end',
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Image
          source={require('./../assets/icons/eth-icon.png')}
          style={{
            width: 25,
            height: 25,
            borderColor: '#fff',
            borderWidth: 1,
            borderRadius: 50,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: '#E0E0E0',
              paddingTop: 7,
            }}>
            $1,000.00
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 15,
                color: '#E0E0E0',
                paddingTop: 7,
              }}>
              Bitcoin
            </Text>
            <View
              style={{
                marginTop: -19,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#E0E0E0',
                }}>
                Today
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#DD4B4B',
                }}>
                -1.8%
              </Text>
            </View>
          </View>
        </View>
      </View>
      <GestureHandlerRootView>
        <LineChart.Provider data={ChartData}>
          <LineChart height={110} width={500}>
            <LineChart.Path color="#5ED5A8">
              <LineChart.Gradient color="#E0E0E0" />
            </LineChart.Path>
            <LineChart.CursorCrosshair color="white">
              <LineChart.Tooltip
                textStyle={{color: 'white'}}
                cursorGutter={100}
                xGutter={16}
                yGutter={-18}
              />
              <LineChart.Tooltip
                cursorGutter={100}
                xGutter={16}
                yGutter={-18}
                style={{
                  marginBottom: 70,
                }}
                position="bottom">
                <LineChart.DatetimeText
                  style={{
                    color: 'white',
                    marginTop: 67,
                  }}
                />
              </LineChart.Tooltip>
            </LineChart.CursorCrosshair>
          </LineChart>
        </LineChart.Provider>
      </GestureHandlerRootView>
    </View>
  );
};

export default LineChartComponent;
