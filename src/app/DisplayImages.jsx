import ImageGallery from '../../utils/imageGallery';

export default function DisplayImages({ images }) {
  return (
    <div className="grid-cols-3 gap-4">
      <div></div>
      <div className="grid gap-4">
        <ImageGallery images={images} />
      </div>
      <div></div>
    </div>
  );
}