/**
 * @package Divante/rapid
 * @author Kacper Chara <kchara@divante.pl>
 * @copyright 2017 Divante Sp. z o.o.
 * @license See LICENSE_DIVANTE.txt for license details.
 */

define([
    'jquery',
    'mage/calendar'
], function($){
    'use strict';

    $.widget('divante.customCalendar', $.mage.calendar, {
        options: {
            showOn: "both",
            showOtherMonths: true,
            firstDay: 1
        },
        _create: function() {
            var self = this;

            $(self.element).calendar(self.options);
        }
    });

    return $.divante.customCalendar;
});
