import React from 'react'

class Body extends React.Component {
	render() {
		return (
		  <div className="body-container">
			  {
			  	this.props.photos && this.props.photos.length > 0 ? this.props.photos.map(photo => {
			        return <div key={photo.id} className="photo-container">
				        <img className="photo" src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={photo.title}/>
				        <span className="photo-title">{photo.title}</span>
			        </div>
			    }) : null
			  }
		  </div>
		)
	}
}

export default Body