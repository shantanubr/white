import {Button, Text, View} from 'react-native';
import {ScreenComponent} from '../_types/screenTypes';
import {DETAILS, HOME} from '../../constants/routes';

export interface DetailScreenProps extends ScreenComponent {
  // add any here accordingly
}

export const DetailScreen: React.FC<DetailScreenProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push(DETAILS)}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate(HOME)} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};
