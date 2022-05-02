$(document).ready(function () {
    function valid(element) {
        if (element.val() == "") {
            element.removeClass("is-valid");
            element.addClass("is-invalid");
        } else {
            element.removeClass("is-invalid");
            element.addClass("is-valid");
        }
    }
    $("#cixis").click(function () {
        $('#exampleModal').removeClass("show");
        $('exampleModal').addClass("d-none");
    });

    $("#elaveEt").click(function () {
        valid($("#kateqoriya"));
        valid($("#ad"));
        valid($("#qiymet"));
        valid($("#tesviri"));
        valid($("#yoxla"));
        valid($("#sekli"));
        valid($("#eyaddas"));
        valid($("#prosessor"));
        valid($("#dyaddas"));
        valid($("#tip"));
        valid($("#sistem"));
        valid($("#video"));
    });
});