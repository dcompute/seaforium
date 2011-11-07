var yayhooray = (typeof yayhooray !== 'undefined') ? yayhooray : {};

(function(yay) {
    /*
     *  Editing functionality for modifying the Main Title.
    */
    mainTitle = {
        // Title Variable
        title : null,

        // Change Main Page Heading
        edit : function () {
            if ($(this).is(":not(.editing)")) {
                mainTitle.title = $(this).text();

                $(this).addClass("editing");

                $(this).empty().append($("#title-input").html());

                var input = $(this).find("#title-input");

                input.val(mainTitle.title);
                input[0].focus();
                input[0].select();
            }
        },

        // Cancel Updating Title
        cancel : function () {
            $("#main-title")
                .empty()
                .html("<h3>" + mainTitle.title + "</h3>")
                .removeClass("editing");
        },

        // Post Updated Title
        save : function () {
            var newTitle = $("#title-input").val();

            $.ajax({
                type    : "POST",
                url     : "/title/edit",
                data    : "title=" + newTitle,
                success : function (msg) {
                    $("#main-title")
                        .empty()
                        .html("<h3>" + newTitle + "</h3>")
                        .removeClass("editing");
                }
            });
        }
    };

    /*
     *  Initialize YayHooray
    */
    init = function() {
        $('#main-title.changeling').click(yay.mainTitle.edit());

        $('#cancel-title').click(yay.mainTitle.cancel());

        $('#save-title').live('click', yay.mainTitle.save());

        // Toggle HTML on/ off
        $('#toggle-html').bind('click', function() {
            var button = $(this);

            $.get('/ajax/toggle_html/' + session_id, function (data) {
                button.html(data);
            });

            return;
        });
    };

} (yayhooray));

$(document).ready(function () {
    yayhooray.init();
});