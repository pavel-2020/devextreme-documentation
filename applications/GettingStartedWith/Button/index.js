$(function(){
    $("#button").dxButton({
        text: "Show the message",
        type: "success",
        stylingMode: "outlined",
        width: "200px",
        height: "40px",
        icon: "comment",
        hint: "Click to show the message",
        onClick: function() {
            DevExpress.ui.notify("The button was clicked");
        } 
    });
});