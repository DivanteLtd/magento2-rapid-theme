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
    ], function ($) {
        'use strict';

        var mixin = {
            initScroll: function (elem) {
                $(elem).closest('.minicart-items-wrapper').customScroll();
            }
        };

        return function (target) {
            return target.extend(mixin);
        };
    }
);
