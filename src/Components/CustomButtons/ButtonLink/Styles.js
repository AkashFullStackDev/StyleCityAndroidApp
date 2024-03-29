import {StyleSheet} from 'react-native';
import { Theme } from '../../../Theme/Theme';

export const Styles = StyleSheet.create({
  ButtonLinkContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  ButtonLinkText: {
    fontSize: 18,
    color: Theme.colors.text,
    marginLeft: 8,
  },
});
