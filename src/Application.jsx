import React from 'react';
import Navigation from './components/Navigation';
import Content from './components/Content'

export default class Application extends React.Component {
  render() {
    return (
    	<div className="wrapper">
    		<Navigation />
    		<Content />
    	</div>
    )
  }
}