import React from 'react'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createNavigator  } from 'react-navigation'
import { createBottomTabNavigator, createTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import SpringPage from './screen/SpringPage'
import SequencePage from './screen/SequencePage'
import ParallelPage from './screen/ParallelPage'

const AnimationTabNavigator = createBottomTabNavigator(
    {
        Spring: { screen: SpringPage },
        Sequence: { screen: SequencePage },
        Parallel: {screen: ParallelPage}
    }
)

export default createAppContainer(AnimationTabNavigator)