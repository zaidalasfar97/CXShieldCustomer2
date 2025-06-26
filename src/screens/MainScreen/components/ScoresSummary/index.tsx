/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View} from 'react-native';
import {ScreenWidth} from '../../../../config/metrics';
import ScoresSummaryPic from '../../../../assets/svg/Home/ScoresSummary.svg';

interface ScoresSummaryProps {
  title?: any;
  numberOfTitle?: any;
  icon?: React.ReactElement;
}

const ScoresSummary = (props: ScoresSummaryProps) => {
  console.log(props);
  return (
    <View
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        marginHorizontal: 15,
        marginVertical: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
          marginVertical: 16,
          alignItems: 'center',
        }}>
        <ScoresSummaryPic style={{marginHorizontal: 5}} />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Scores Summary</Text>
      </View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          marginHorizontal: 13,
          borderRadius: 16,
          flexDirection: 'row',
          paddingVertical: 15,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#2EC4B6',
            fontSize: 34,
            fontWeight: 'bold',
            paddingHorizontal: 10,
          }}>
          89%
        </Text>
        <View style={{marginHorizontal: 10}}>
          <Text style={{color: '#2EC4B6', fontSize: 16}}>Overall</Text>
          <Text style={{color: '#2EC4B6', fontSize: 16}}>Score</Text>
        </View>
        <Text
          style={{
            marginHorizontal: 5,
            color: '#202B36',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Non Critical
        </Text>
        <Text
          style={{
            marginHorizontal: 5,
            color: '#202B36',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Critical
        </Text>
      </View>
      <View style={{marginVertical: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginVertical: 5,
          }}>
          <View style={{width: '50%'}}>
            <Text style={{color: '#202B36', fontSize: 16}}>
              Quality of Product
            </Text>
          </View>
          <Text style={{color: '#202B36', fontSize: 16, fontWeight: 'bold'}}>
            100%
          </Text>
          <Text style={{color: '#202B36', fontSize: 16, fontWeight: 'bold'}}>
            0%
          </Text>
        </View>
        <View
          style={{
            borderColor: '#DEDEEC',
            borderWidth: 1,
            marginHorizontal: 15,
            marginVertical: 8,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginVertical: 5,
          }}>
          <View style={{width: '50%'}}>
            <Text style={{color: '#202B36', fontSize: 16}}>
              Quality of service
            </Text>
          </View>
          <Text style={{color: '#202B36', fontSize: 16, fontWeight: 'bold'}}>
            100%
          </Text>
          <Text style={{color: '#202B36', fontSize: 16, fontWeight: 'bold'}}>
            0%
          </Text>
        </View>
        <View
          style={{
            borderColor: '#DEDEEC',
            borderWidth: 1,
            marginHorizontal: 15,
            marginVertical: 8,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginVertical: 5,
          }}>
          <View style={{width: '50%'}}>
            <Text style={{color: '#202B36', fontSize: 16}}>
              Enviroment and Hygine
            </Text>
          </View>
          <Text style={{color: '#202B36', fontSize: 16, fontWeight: 'bold'}}>
            100%
          </Text>
          <Text style={{color: '#202B36', fontSize: 16, fontWeight: 'bold'}}>
            0%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ScoresSummary;
