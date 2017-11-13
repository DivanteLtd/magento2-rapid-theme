/**
* @package Divante/rapid
* @author Kacper Chara <kchara@divante.pl>
* @copyright 2017 Divante Sp. z o.o.
* @license See LICENSE_DIVANTE.txt for license details.
*/

define([
    'jquery',
    'slick'
], function($) {
    'use strict';

    $.widget('divante.slider', {
        options: {
            arrows: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        },
        _create: function() {
            var slider = $(this.element);

            // Functionality for .basic-carousel
            function setMaxHeightSlider(slider){
                var images = slider.find('.basic-carousel-img');
                var maxHeight = 0;

                images.each(function(){
                    var currentImgHeight = $(this).height();
                    if (currentImgHeight > maxHeight) {
                        maxHeight = currentImgHeight;
                    }
                });

                slider.closest('.basic-carousel').height(maxHeight);
            }

            if(slider.hasClass('equal-height-slides')){
                slider.on('init', function(){
                    setMaxHeightSlider(slider);
                });

                $(window).on('resize', function(){
                    setMaxHeightSlider(slider);
                });
            }

            slider.slick(this.options);
        }

    });

    return $.divante.slider;
});
