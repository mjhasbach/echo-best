(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        root.objectToDOM = factory(root.jQuery);
    }
}(this, function ($) {
    return function objectToDOM($container, obj, nesting) {
        if (!($container instanceof $)){
            throw new TypeError('$container must be an instance of jQuery');
        }
        if (!_.isObject(obj)){
            throw new TypeError('obj must be an object');
        }
        if (!_.isNumber(nesting)){
            nesting = 0;
        }

        _.each(obj, function(val, key) {
            var $line = $('<div>').css('white-space', 'nowrap');

            $line.append(
                $('<div>')
                    .css('display', 'inline-block')
                    .css('font-weight', 'bold')
                    .css('padding-left', nesting * 20)
                    .text(key + ': ')
            );

            if (_.isObject(val)){
                $container.append($line);

                objectToDOM($container, val, nesting + 1);
            }
            else{
                $line.append(
                    $('<div>')
                        .css('display', 'inline-block')
                        .css('padding-left', 10)
                        .text(val)
                );

                $container.append($line);
            }
        });
    }
}));