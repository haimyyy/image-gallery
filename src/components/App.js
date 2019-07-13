import React from 'react';
import '../css/App.css';
import Header from './Header';
import Body from './Body'
import APIService from '../services/APIService';
import Modal from './Modal';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            photos: [],
            filteredPhotos:[],
            isModalOpen: false,
            searchValue: '',
            modalMode: ''
        }
    }

    async componentDidMount () {
        const data = await APIService.getPhotos();
        this.setState({
            photos: data.photos,
            filteredPhotos: data.photos.photo,
        })
    }

    onChange = (event) => {
        const searchValue = event.target.value.toLowerCase();
        this.filteredPhotos(searchValue)
    }

    filteredPhotos = (searchValue) => {
        const photos = this.state.photos.photo.filter((photo)=> photo.title.toLowerCase().indexOf(searchValue) > -1)
        this.setState({
            filteredPhotos: photos,
            searchValue: searchValue,
        })
    }

    openSaveModal = () => {
        this.setState({
            isModalOpen: true,
            modalMode: 'save'
        })
    }
    closeModal = () => {
        this.setState({
            isModalOpen: false,
            modalMode: '',
        })
    }

    updateConfiguration = (configName) => {
        window.localStorage.setItem(configName, this.state.searchValue);
        this.closeModal();
    }

    onLoadClick = () => {
        this.setState({
            isModalOpen: true,
            modalMode: 'load'
        })
    }

    getItemsFromLocalStorage = () => {
        const configurations = [];
        for (let i = 0; i < window.localStorage.length; i++ ) {
            let key = localStorage.key(i);
            let value = localStorage[key];
            configurations.push({key, value});
        }
        return configurations;
    }

    loadConfiguration = (key) => {
        const searchValue = window.localStorage.getItem(key)
        this.filteredPhotos(searchValue);
        this.closeModal();
    }

    render() {
        return (
            <div className="App">
                <Header onChange={this.onChange}
                        onLoadClick={this.onLoadClick}
                        searchValue={this.state.searchValue}
                        onSaveClick={this.openSaveModal}/>
                <Body photos={this.state.filteredPhotos}/>
                <Modal
                    configurations={this.getItemsFromLocalStorage()}
                    mode={this.state.modalMode}
                    handleClose={this.closeModal}
                    isModalOpen={this.state.isModalOpen}
                    loadConfiguration={this.loadConfiguration}
                    updateConfiguration={this.updateConfiguration}/>
            </div>
        );
    }
}

export default App;
