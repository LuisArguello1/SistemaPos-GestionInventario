import React from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ImageViewer = ({ isOpen, close, image }) => {
    return (
        <Lightbox
            open={isOpen}
            close={close}
            slides={[{ src: image }]}
            render={{
                buttonPrev: () => null,
                buttonNext: () => null,
            }}
            styles={{
                container: { backgroundColor: "rgba(15, 23, 42, 0.95)" },
            }}
        />
    );
};

export default ImageViewer;
