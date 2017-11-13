/**
* @package Divante/rapid
* @author Kacper Chara <kchara@divante.pl>
* @copyright 2017 Divante Sp. z o.o.
* @license See LICENSE_DIVANTE.txt for license details.
*/

define([
    'jquery',
    'mCustomScrollbar',
    'mousewheel'
], function($) {
    'use strict';
    
    $.widget('divante.customScroll', {
        options: {
            theme: "dark"
        },
        _create: function() {
            var self = this;
            $(self.element).mCustomScrollbar(self.options);
        }
    });
    
    return $.divante.customScroll;
});
