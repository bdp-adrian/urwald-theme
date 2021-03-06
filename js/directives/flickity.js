const $        = require('jquery');
const Flickity = require('flickity');

if ($('.image-slider')[0]){
    const flkty = new Flickity( '.image-slider', {
        cellAlign: 'center',
        cellSelector: ".image-slider__slide",
        pageDots: true,
        prevNextButtons: false,
        setGallerySize: false,
        wrapAround: true
    });
}

if ($('.teaser-slider')[0]){
    const flkty = new Flickity( '.teaser-slider', {
        cellAlign: 'center',
        wrapAround: true,
        prevNextButtons: false,
        setGallerySize: false,
        pageDots: true,
        cellSelector: ".teaser-slider__slide"
    });
}

if ($('.testimonial-slider')[0]){
    const flkty = new Flickity( '.testimonial-slider', {
        cellAlign: 'center',
        pageDots: true,
        prevNextButtons: false,
        wrapAround: true,
        setGallerySize: false,
        cellSelector: ".testimonial-slider__slide"
    });
}

if ($('.numbers-slider')[0]){
    const flkty = new Flickity( '.numbers-slider', {
        cellAlign: 'center',
        pageDots: true,
        prevNextButtons: false,
        wrapAround: false,
        setGallerySize: false,
        groupCells: '100%',
        cellSelector: ".numbers-slider__slide"
    });
}

// START – Flickity previous next classes
Flickity.createMethods.push( '_createPrevNextCells' );

Flickity.prototype._createPrevNextCells = function () {
    this.on( 'select', this.setPrevNextCells );
};

Flickity.prototype.setPrevNextCells = function () {
    // Remove classes
    changeSlideClasses( this.previousSlide, false, 'is-previous' );
    changeSlideClasses( this.nextSlide, false, 'is-next' );

    // Set previous and next slides
    this.previousSlide = this.slides[this.selectedIndex - 1];
    this.nextSlide = this.slides[this.selectedIndex + 1];

    // If wrapped around, use last and first slide accordingly.
    if (this.options.wrapAround) {
        if (this.previousSlide == null) {
            this.previousSlide = this.slides[this.slides.length - 1];
        }

        if (this.nextSlide == null) {
            this.nextSlide = this.slides[0];
        }
    }

    // Add classes
    changeSlideClasses( this.previousSlide, true, 'is-previous' );
    changeSlideClasses( this.nextSlide, true, 'is-next' );
};

function changeSlideClasses( slide, toggle, className ) {
    if (slide == null) {
        return;
    }

    slide.getCellElements().forEach( function ( cellElement ) {
        $( cellElement ).toggleClass( className, toggle );
    } );
}

// END – Flickity previous next classes