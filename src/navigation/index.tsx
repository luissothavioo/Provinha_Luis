import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { MenuBottomTabs } from './MenuBottomTabs';
import { Loading } from '../components/Loading';

export default function Navigation () {
    return (
        <NavigationContainer>
            <MenuBottomTabs/>
        </NavigationContainer>
    )
}