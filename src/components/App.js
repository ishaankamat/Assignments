import React from 'react';
import img from '../images/logo.svg';
import DogSelect from './DogSelect';
import DogImage from './DogImage';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list:['african', 'airedale', 'akita'],
			error: null,
			isLoaded: false,
			result: []
			//selectValue: ''
		};
		//this.val = this.state.list[0]
		this.state.selectValue = this.state.list[0]
		console.log(this.state.selectValue)
		this.getNewImage = this.getNewImage.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
	}

	componentDidMount() {
		console.log('componentDidMount')
		this.getNewImage()
	}

	
	handleChange(e){
		//console.log(this)
		this.setState({selectValue:e.target.value});
		//this.val = e.target.value
		console.log(e.target.value)
		this.getNewImage()
	}
	
	getNewImage(){
		console.log("fetch")
		console.log(this.state.selectValue)
		//console.log('this.val='+this.val)
		fetch("https://dog.ceo/api/breed/"+this.state.selectValue+"/images/random")
		.then(res => res.json())
		.then(
        (result) => {
			console.log(result)
			this.setState({
				isLoaded: true,
				result: result
			});
			
        },
        (error) => {
			this.setState({
				isLoaded: true,
				error
			});
        })
	}

	render() {
		return (
			<div style={{textAlign: 'left'}}>
				<h1>Breed Dog Image Generator</h1>
				<h2>Ishan Kamat ikamat@hawk.iit.edu – ITMD-565</h2>
				<p>Please press the button to generate a new random image.</p>
				<DogSelect handleChange_prop={this.handleChange} list={this.state.list} />
				<button onClick={this.getNewImage}>Fetch</button>
				<hr />
				<DogImage src={this.state.result.message} alt={this.state.selectValue} />
			</div>
		);
	}
}

export default App;