(function ($) {
    $.support.cors = true;
    //TODO create db service
    //window.data = $.fn.DataService();  //exist till the site is changed
    //sessionStorage.dataService = $.fn.DataService();  //stores data for one session
    //localStorage.dataService = $.fn.DataService();  //stores data with no expiration date
    
    $.ajaxSetup({
        cache: false
    });

})(jQuery);
