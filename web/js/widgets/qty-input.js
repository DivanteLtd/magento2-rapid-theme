/**
* @package Divante/rapid
* @author Marcin Kwiatkowski <mkwiatkowski@divante.pl>
* @copyright 2017 Divante Sp. z o.o.
* @license See LICENSE_DIVANTE.txt for license details.
*/

define([
    'jquery'
], function($) {
    'use strict';

    $.widget('divante.qtyInput', {
        options: {
            inputSelector: '.qty'
        },
        _create: function() {
            this._super();
            var self = this;

            self._on( this.element, {
                "click .decrease-qty": self.decreaseQty,
                "click .increase-qty": self.increaseQty
            });
        },

        decreaseQty: function() {
            var qty = parseInt($(this.element).find(this.options.inputSelector).val());
            var newQty =  qty - 1;

            if (newQty < 1 || isNaN(newQty)) {
                newQty = 1;
            }

            this._changeQtyValue(newQty);
        },

        increaseQty: function() {
            var qty = parseInt($(this.element).find(this.options.inputSelector).val());
            var newQty = qty + 1;

            if (isNaN(newQty)) {
                newQty = 1;
            }

            this._changeQtyValue(newQty);
        },

        _changeQtyValue: function(newQty) {
            $(this.element).find(this.options.inputSelector).val(newQty)
        }

    });

    return $.divante.qtyInput;
});
