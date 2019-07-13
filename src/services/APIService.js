const photoURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1"

class APIService {
	getPhotos = async () => {
		try {
			return await fetch(photoURL, {
				method: 'GET',
			}).then(response => {
				return response.json();
			}).catch(err => {
			    throw err;
			})

		} catch (e) {
			return e;
		}
	}
}

const apiService = new APIService()
export default apiService