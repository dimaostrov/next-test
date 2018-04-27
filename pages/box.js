import React, { Component } from 'react'
import NoSSR from 'react-no-ssr'
import 'aframe'
import { Entity, Scene } from 'aframe-react'
import 'aframe-particle-system-component'
import 'aframe-animation-component'

import Layout from '../components/MyLayout';

export default class App extends React.Component {

  render () {
    let anime;

    if(window === undefined) {
        anime = (<div></div>)
    } else {
        anime = (<NoSSR onSSR={'loading'}>
        <Scene>
          <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
          <Entity particle-system={{preset: 'snow'}}/>
          <Entity light={{type: 'point'}}/>
          <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
          <Entity text={{value: 'Hello, WebVR!'}}/>
        </Scene>
      </NoSSR>)
    }

    return (
      <div>
          Hey Ho, Lets Go
      </div>
    );
  }
}

