(function($){
    var setActive = function() {
        var self = $(this);

        // REMOVE ANY ACTIVE STATES
        $('.footer-socialmedia').removeClass('active');
        
        // SET CURRENT ACTIVE STATE
        self.addClass('active');
    };

    var scrollHandler = function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
    }

    var init = function(){
        $('.footer-socialmedia').on('click', setActive);

        $('.scroll-top').on('click', scrollHandler);
    };

    $(init);

}(jQuery));

var ATVI = ATVI || {};

(function($, ATVI) {

	var ld = ATVI.localeDetector;

    var init = function() {
		if (ld.region && (ld.region == 'ca' || ld.region == 'co' || ld.region == 'va' || ld.region == 'ct')) addPrivacyLink(ld.region);
        else {
			document.addEventListener('localeDetectionReady', function() {
                if (ld.region == 'ca' || ld.region == 'co' || ld.region == 'va' || ld.region == 'ct') addPrivacyLink(ld.region);
            });
        }

        if(ld.region && ld.region == 'ca') {
			addCALink();
        }
        else {
			document.addEventListener('localeDetectionReady', function() {
                if (ld.region == 'ca') addCALink();
            });
        }
    };

    var addPrivacyLink = function(r) {
        var anchor = $('<a/>', { 'class': 'footer-ext-link', 'href':'https://support.activision.com/privacyrequest?st=' + r, 'text': 'Your Privacy Choices', 'target': '_blank' }),
            item = $('<li/>', { 'class': 'privacy-check' });
        item.append(anchor);
        $('.footer-links .footer-col-4 ul').append(item);
    };

    var addCALink = function() {

        var anchor = $('<a/>', { 'class': 'footer-ext-link', 'href':'https://www.activision.com/legal/privacy-policy#toc10b', 'text': 'California Privacy Notice', 'target': '_blank' }),
            item = $('<li/>'); 
        item.append(anchor);
        $('.footer-links .footer-col-4 ul').append(item);

    };

    $(init);

})(jQuery, ATVI);
(function ($, ATVI) {
    var init = function () {
        initFooterAnalytics();
    };

    var initFooterAnalytics = function () {
        document
            .querySelectorAll(".footer-socialmedia-list a[data-label]")
            .forEach(function (node) {
                node.addEventListener("click", function (e) {
                    updateDataLayer($(this), $(this).attr("href"), "social", this.dataset.label);
                });
            });
    };

    var updateDataLayer = function ($el, labelStr, catStr, actionStr) {
        if (dataLayer) {
            var obj = {};
            labelStr = labelStr || "";
            obj.event = "event";
            obj.category = catStr;
            obj.action = actionStr;
            obj.label = labelStr;
            obj.destinationURL = $el.attr("href");
            obj.pageURL = window.location.href;
            dataLayer.push(obj);
        }
    };

    $(init);
})(jQuery, ATVI);

