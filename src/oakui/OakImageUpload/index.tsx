import React, { useEffect, useRef, useState } from 'react';
import Cropper from 'cropperjs';

import { newId } from '../../events/MessageService';
import OakInput from '../wc/OakInput';
import './style.scss';
import OakButton from '../wc/OakButton';

interface Props {
  handleChange: any;
}

const OakImageUpload = (props: Props) => {
  const [id, setId] = useState(`id-${newId()}`);
  const [file, setFile] = useState<any>(null);
  const [cropUrl, setCropUrl] = useState<any>(null);
  const [canvas, setCanvas] = useState<any>(null);
  const [cropper, setCropper] = useState<any>(null);

  useEffect(() => {
    console.log(cropUrl?.length);
    if (props.handleChange) {
      props.handleChange(cropUrl);
    }
  }, [cropUrl]);

  const chooseFile = (detail: any) => {
    setFile(detail.value);
  };

  useEffect(() => {
    if (file && file.length > 0) {
      const url = window.URL.createObjectURL(file[0]);
      setCropUrl(url);
    } else {
      setCropUrl('');
    }
  }, [file]);

  const startCrop = () => {
    const originalFileUrl = window.URL.createObjectURL(file[0]);
    const el: any = document.getElementById(id);
    if (el) {
      el.src = originalFileUrl;
      const _cropper = new Cropper(el, {
        aspectRatio: 1,
        viewMode: 1,
        autoCropArea: 0.7,
        crop: (event) => {
          const _canvas = _cropper.getCroppedCanvas();
          setCanvas(_canvas);
        },
      });
      setCropper(_cropper);
    }
  };

  const finalizeCrop = () => {
    const canvasUrl = canvas.toDataURL('image/png');
    setCropUrl(canvasUrl);
    const el: any = document.getElementById(id);
    if (el) {
      el.src = canvasUrl;
    }
    cropper.destroy();
    setCropper(null);
  };

  return (
    <div className="oak-image-upload">
      <div className="oak-image-upload__container">
        {cropUrl && <img src={cropUrl} id={id} alt="Destination" />}
        {!cropUrl && (
          <div className="oak-image-upload__container__noimage">No image</div>
        )}
      </div>
      <div className="oak-image-upload__action">
        <OakInput
          name="file"
          value={file}
          type="file"
          handleInput={chooseFile}
        />
        {cropUrl && !cropper && (
          <OakButton theme="default" handleClick={startCrop}>
            Crop
          </OakButton>
        )}
        {cropUrl && cropper && (
          <OakButton theme="default" handleClick={finalizeCrop}>
            Apply
          </OakButton>
        )}
        {cropUrl && !cropper && (
          <OakButton theme="default" handleClick={() => setFile([])}>
            Remove
          </OakButton>
        )}
      </div>
    </div>
  );
};

export default OakImageUpload;
