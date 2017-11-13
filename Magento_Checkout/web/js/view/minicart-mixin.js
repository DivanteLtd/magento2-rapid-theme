/**
 * @package Divante/rapid
 * @author Kacper Chara <kchara@divante.pl>
 * @copyright 2017 Divante Sp. z o.o.
 * @license See LICENSE_DIVANTE.txt for license details.
 */
/*browser:true*/
/*global define*/
define(
    [
        'jquery',
        'customScroll'
    ], function ($, customScroll) {
        'use strict';

        var miniCart = $('[data-block=\'minicart\']');
        miniCart.on('dropdowndialogopen', function () {
            initCustomScrollbar();
        });

        function initCustomScrollbar(){
            var miniCartItems = miniCart.find('.minicart-items-wrapper');

            if(miniCartItems.length){
                if(miniCartItems.data('mCS') != undefined){
                    miniCartItems.mCustomScrollbar('destroy');
                }

                if(miniCartItems.data('mCS') == undefined){
                    customScroll({}, miniCartItems);
                }
            }
        }

        var mixin = {};

        return function (target) {
            return target.extend(mixin);
        };
    }
);
