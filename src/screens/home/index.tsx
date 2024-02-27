import {Button, Text, View} from 'react-native';
import {ScreenComponent} from '../_types/screenTypes';
import {DETAILS} from '../../constants/routes';

export interface HomeScreenProps extends ScreenComponent {
  // add any here accordingly
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(DETAILS)}
      />
    </View>
  );
};
