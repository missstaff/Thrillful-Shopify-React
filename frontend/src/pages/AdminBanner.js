import React, { Component } from 'react';
import '../css/banner.css';
import { Box, Button, Input } from '@chakra-ui/react';
//import axios from 'axios';




class AdminBanner extends Component {
    //initialize state 
    state = {
        selectedFile: null
    }

    //file is now stored in the selected state
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
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

    render() {
        return (
            <Box className="imageBox">
                <Input type="file" onChange={this.fileSelectedHandler} />
                <Button onClick={this.fileUploadHandler}>Upload</Button>

            </Box>
        );
    }

}

export default AdminBanner