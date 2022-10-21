import React from 'react';

class HelloWorld extends React.Component{
	greeting(name){
		if(name){
			return <h1>Hello {name}</h1>;
		}
		return <h1>hello anno!</h1>
	}
	render(){
		return (<div>Hello {this.greeting(this.props.name)}, {this.props.children}</div>)
	}
}

export default HelloWorld;
