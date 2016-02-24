/* My JS */

/* Changing the Modal */
var item = 0;
$(".more").click(function(){
	item =  parseInt($(this).attr("id"));
	$(".modal-title").html($(".page-header").html());
	$(".modal-img").attr('alt', $(".photo"+item).attr('alt')).attr('src', $(".photo"+item).attr('src'));
	$(".modal-desc").html($("#hidden"+item).html());
});

/* Dim picture so that More Info is pronounced */
$('.overlay-box').hover(
	function(){
		$(this).find('img').animate({opacity: ".4"}, 300);
	},
	function(){
		$(this).find('img').animate({opacity: "1.0"}, 300);
	}
);