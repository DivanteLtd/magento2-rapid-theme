/**
 * @package Divante/rapid
 * @author Kacper Chara <kchara@divante.pl>
 * @copyright 2017 Divante Sp. z o.o.
 * @license See LICENSE_DIVANTE.txt for license details.
 */

define([
    'ko',
    'jquery',
    'uiComponent',
    'Magento_Checkout/js/model/totals',
    'Magento_Checkout/js/model/step-navigator'
], function (ko, $, Component, totals, stepNavigator) {
    'use strict';

    var SHIPPING_STEP_ID = 0;

    return Component.extend({
        defaults: {
            template: 'Magento_Checkout/summary/custom-go-to-payment'
        },
        initialize: function () {
            this._super();
        },
        isDisplayed: function() {
            return stepNavigator.getActiveItemIndex() === SHIPPING_STEP_ID;
        },
        getItemsQty: function() {
            return parseInt(totals.totals().items_qty);
        },
        goToReviewsAndPayments: function() {
            $('[data-role="opc-continue"]').trigger('click');
        }
    });
});