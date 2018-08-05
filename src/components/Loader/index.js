import React from 'react'
import loaderSrc from '../../assets/loader.gif'
const Loader = props => (
	<div>
		<img
			style={{paddingTop: '5px'}}
			alt="loader icon"
			src={loaderSrc}
		/>
	</div>
);

export default Loader;