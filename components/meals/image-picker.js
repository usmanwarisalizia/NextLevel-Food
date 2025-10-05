'use client'

import { useRef, useState } from 'react'
import Image from 'next/image';
import classes from './image-picker.module.css'

export default function ImagePicker({ label, name }) {




    const [pickedImage, setPickedImage] = useState();

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);
    }

    const imageInputRef = useRef();

    function handlePickClick() {
        imageInputRef.current.click();

    }

    return (
        <>
            <div className={classes.picker}>
                <label htmlFor={name}>{label}</label>
                <div className={classes.controls}>
                    <div className={classes.preview}>
                        {!pickedImage && <p>No image picked yet.</p>}
                        {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill />}
                    </div>
                    <input className={classes.input} type='file' id={name} accept='image/png, image/jpeg'
                        ref={imageInputRef} name={name} onChange={handleImageChange} />
                    <button className={classes.button} type='button' onClick={handlePickClick}>
                        Pick an Image
                    </button>
                </div>
            </div>
        </>
    )
}