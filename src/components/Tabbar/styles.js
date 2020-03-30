import styled from 'styled-components/native';
import {ICON_SIZE, PADDING, SEGMENT} from '../../assets/icons/Constants';

export const Container = styled.SafeAreaView`
  background-color: #fff;
`;

export const Tabs = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TabItem = styled.View`
  width: ${SEGMENT};
  height: ${ICON_SIZE + PADDING * 2};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
