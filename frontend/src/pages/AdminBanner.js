import React, { Component } from 'react';
import '../css/banner.css';
import { Box, Button, Input } from '@chakra-ui/react';
import axios from 'axios';




class AdminBanner extends Component {
    //initialize state 
    state = {
        selectedFile: null,
        bannerImg: ""
    }

    //file is now stored in the selected state
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }
    textHandler = event => {
        this.setState({
            bannerImg: event.target.value
        })
    }

    fetchUserDetails = () => {
        fetch(`http://localhost:5000/img`)
            .then(res => res.json())
            .then(data => {
                this.setState({ bannerImg: data.items[data.items.length - 1].img })
            }).catch((err) => console.log(err))

    }



    //method no argument goal is to upload a file. 
    //https://academind.com/tutorials/reactjs-image-upload/
    //https://www.youtube.com/watch?v=XeiOnkEI7XI

    // fileUploadHandler = () => {debugger
    //     //create an API endpoint that accepts foriegn data a mixture files. And stores the files in cloud storage. 
    //     const fd = new FormData();
    //     fd.append('image',
    //         this.state.selectedFile,
    //         this.state.selectedFile
    //     )
    //     axios.post('my-domain.com/file-upload', this.state.selectedFile, fd,{
    //         onUploadProgress: progressEvent => {
    //             console.log(progressEvent.loaded / progressEvent.total)
    //         }
    //     })
    // }

    fileUploadHandler = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("image", this.state.selectedFile);
        formData.append("text", this.state.bannerImg)


        fetch('http://localhost:5000/img/', {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(data => {
                alert("Picture uploaded successfully");
                window.location.reload();
                console.log(data)
            })
            .catch((e) => console.log(e))

    }

    componentDidMount() {
        this.fetchUserDetails();
    }

    render() {

        if (this.state.bannerImg) {
            var imagestr = this.state.bannerImg;
            var profilePic = imagestr
        }


        return (

            <Box className="imageBox">
                <img src={profilePic} alt="profils pic" style={{ width: "80%", height: "300px" }} />
                <Input type="file" onChange={this.fileSelectedHandler} />
                <Input type="text" placeholder="write your text here..." onChange={this.textHandler} />
                <Button
                 color="white" 
                 backgroundColor="#ff0000"
                 _focus="none"
                 _hover={{color: "none"}}
                 _active={{ bg: "none" }}
                 border="none" 
                onClick={this.fileUploadHandler}
                >Upload
                </Button>
            </Box>
        );
    }

}

export default AdminBanner