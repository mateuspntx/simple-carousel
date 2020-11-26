class Carousel {
  constructor({ imagesList, imageEl, nextButtonEl, prevButtonEl }) {
    this.currentIndex = 0;
    this.imagesList = imagesList || [];
    this.totalImages = imagesList.length || 0;

    this.imageElement = document.getElementById(imageEl);
    this.nextButtonElement = document.getElementById(nextButtonEl);
    this.prevButtonElement = document.getElementById(prevButtonEl);
  }

  mount() {
    this.setImageSrc();
    this.nextImage();
    this.prevImage();
  }

  setImageSrc(currentIndex) {
    !currentIndex
      ? (this.imageElement.src = this.imagesList[0])
      : (this.imageElement.src = this.imagesList[currentIndex]);
  }

  nextImage() {
    const handleNext = () => {
      this.currentIndex++;

      if (this.currentIndex === this.totalImages) {
        this.currentIndex = 0;
      }

      this.setImageSrc(this.currentIndex);
    };

    this.nextButtonElement.addEventListener('click', handleNext);

    return () =>
      this.nextButtonElement.removeEventListener('click', handleNext);
  }

  prevImage() {
    const handlePrev = () => {
      if (this.currentIndex === 0) {
        this.currentIndex = this.totalImages;
      }

      this.currentIndex--;

      this.setImageSrc(this.currentIndex);
    };

    this.prevButtonElement.addEventListener('click', handlePrev);

    return () =>
      this.prevButtonElement.removeEventListener('click', handlePrev);
  }
}

export default Carousel;
