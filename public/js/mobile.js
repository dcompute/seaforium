var yayhooray = (typeof yayhooray !== 'undefined') ? yayhooray : {};

(function (yay) {
    /*
     *  YayHooray Mobile
    */
    yay.mobile = {
        /*
         *  Initialize YayHooray Mobile
        */
        init : function () {
            $(".thread").each(function () {
                var url = $(this).find(".subject a").attr("href");
                $(this).find("a").removeAttr("href");
                $(this).wrapInner("<a href='" + url + "'></a>");
            });
        }
    };
} (yayhooray));

$(document).ready(function () {
    yayhooray.mobile.init();
});