/**
* @package Divante/rapid
* @author Kacper Chara <kchara@divante.pl>
* @copyright 2017 Divante Sp. z o.o.
* @license See LICENSE_DIVANTE.txt for license details.
*/

// Info: This file was created to make home page cleaner in wysiwyg editor

require([
    'jquery',
    'slider'
], function($) {
    'use strict';

    // Initialize slider for popular brands carousel
    var brandsCarousel = $('.brands-section .basic-carousel .equal-height-slides');
    if(brandsCarousel.length){
        var brandsCarouselOptions = {
            "arrows": false,
            "dots": false,
            "useCSS": false,
            "useTransform": false,
            "slidesToShow": 5,
            "autoplay": true,
            "infinite": true,
            "responsive": [
                {
                    "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 4,
                        "slidesToScroll": 1
                    }
                },
                {
                    "breakpoint": 768,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 1
                    }
                },
                {
                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 1
                    }
                }]
        };

        brandsCarousel.slider(brandsCarouselOptions);
    }

});
