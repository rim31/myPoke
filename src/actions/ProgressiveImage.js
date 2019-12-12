import React, { Component } from "react";
import loading from '../assets/loading.png';

const omit = (obj, omitKey) =>
	Object.keys(obj).reduce((result, key) => {
		if (key !== omitKey) {
			result[key] = obj[key];
		}
		return result;
	}, {});

const overlayStyles = {
	position: "absolute",
	filter: "blur(1px)",
	transition: "opacity ease-in 100ms",
	clipPath: "inset(0)"
};

export default class ProgressiveImage extends Component {
	constructor(props) {
		super(props);
		this.state = { highResImageLoaded: false };
	}
	render() {
		const { highResImageLoaded } = this.state;
		let filteredProps = omit(this.props, {loading});
		return (
			<span>
				<img
					{...filteredProps}
					onLoad={() => {this.setState({ highResImageLoaded: true });}}
					ref={img => {this.highResImage = img;}}
					src={this.props.src}
					alt="poke"
				/>
				<img
					{...filteredProps}
					className={`${this.props.className} ${overlayStyles}`}
					{...highResImageLoaded && { style: { opacity: "0" } }}
					src={loading}
					alt="poke"
				/>
			</span>
		);
	}
}