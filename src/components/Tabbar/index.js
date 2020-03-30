import React from 'react';
import {withTransition, timing} from 'react-native-redash';
import {Value, useCode, block, onChange, set} from 'react-native-reanimated';
import {Container, Tabs, TabItem} from './styles';
import {DURATION} from '../../assets/icons/Constants';

// Components
import Tab from './Tab';
import Weave from './Weave';
import Particules from './Particules';

// Icons
import Compass from '../../assets/icons/Compass';
import Chat from '../../assets/icons/Chat';
import Camera from '../../assets/icons/Camera';
import Bell from '../../assets/icons/Bell';
import User from '../../assets/icons/User';

const tabs = [
  {icon: <Compass />},
  {icon: <Chat />},
  {icon: <Camera />},
  {icon: <Bell />},
  {icon: <User />},
];

export default function Tabbar() {
  const active = new Value(0);
  const transition = withTransition(active, {duration: DURATION});
  const activeTransition = new Value(0);

  useCode(
    () =>
      block([
        onChange(active, set(activeTransition, 0)),
        set(activeTransition, timing({duration: DURATION})),
      ]),
    [active, activeTransition],
  );

  return (
    <Container>
      <Tabs>
        {tabs.map(({icon}, index) => (
          <TabItem key={index}>
            <Weave {...{active, index}} />
            <Tab
              onPress={() => active.setValue(index)}
              {...{active, transition, index}}>
              {icon}
            </Tab>
          </TabItem>
        ))}
        <Particules {...{transition, activeTransition}} />
      </Tabs>
    </Container>
  );
}
