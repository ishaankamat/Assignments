import React from 'react';
//import img from '../images/logo.svg';

class DogSelect extends React.Component {
	constructor(props) {
		super(props);
		//this.props.handleChange_prop = this.props.handleChange_prop.bind(this);
	}
	
	render() {
		return (
			<select onChange={this.props.handleChange_prop}>
				{this.props.list.map(function(val){
					return <option value={val}>{val}</option>
				})}
			</select>
		);
	}
}

export default DogSelect;