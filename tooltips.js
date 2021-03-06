var clickStarStyles = " background-color: white; \
                        width: 200px; \
                        line-height: 12px;";

var activateClickStars = function(){
    $(".footnote.um-fn-number").each(function () {
        var $this = $(this);
        $this.on("click", function (e) {

            showTooltip($this, e);
            deActivateClickStars();

            $this.on("click", function (e) {
                // Delete click tooltip
                // $this.empty(); deletes too much: click AND hover tooltip
                $(".footnote.um-fn-number").removeClass("hover")
                $this.off('click'); 
                $('#activeTooltip').remove();
                activateClickStars();
            });
        });
    });
};

var deActivateClickStars = function(){
    $(".footnote.um-fn-number").each(function () {
        var $this = $(this);
        $this.off('click'); // keep hover listener for hint tooltip
    });
};

var showTooltip = function(clickStar, e) {
    var tooltipContent = clickStar.data('content');
    var clickCoordinates = e.pageX + ' , ' + e.pageY;
    console.log("Content: " + tooltipContent + " at " + clickCoordinates);
    // clickStar.append('<div class="tooltip" id="activeTooltip" style="' + clickStarStyles + '"> <span> X </span>' + tooltipContent + '</div>');
    $('<div class="tooltip" id="activeTooltip" style="' + clickStarStyles + '"> <span> X </span>' + tooltipContent + '</div>').insertAfter( clickStar);
    // Delete click listener
    clickStar.off('click'); // keep hover listener for hint tooltip
};

activateClickStars();



// Some copyright to this code may apply. 
// So please use this only for reference or academic purposes only.
// No licenses granted or warranties given whatsoever. Sorry.


/*

div#activeTooltip {
    z-index: 1000;
    position: absolute;
}

#activeTooltip span {
    text-indent: 0;
    color: black;
    float: left;
    border: 1px solid red;
}
*/
