$(function() {
	//将iframe的内容转移到index.html
	function iframeTextChang() {
		$(".container_iframe").empty().css({
			"z-index": 1
		});
		$(".aside_doc").css({
			"z-index": 10
		});
		$(".aside_doc").addClass("open").find(".dropdown-menu").remove()
		$("#mf").contents().find("body").find("ul").eq(0).addClass("dropdown-menu").appendTo(".aside_doc")
		$("#mf").contents().find("body").children().appendTo(".container_iframe")
		$("#mf").contents().find("head link[rel='stylesheet']").appendTo("head")
		$("table").addClass("table table-hover table-bordered")
	}

	$("iframe").load(function() {
		iframeTextChang()
	})
	//点击导航切换内容
	$(".navbar a[href='javascript:;']").click(function() {
		$("iframe").attr("src", $(this).attr("data_href"))
	})
	//试图阻止移动端触摸默认行为
	$(document).on("touchmove", function(e) {
		//e.preventDefault() 
		//e.stopPropagation() 
		//return false
	})
	//回到顶部
	$(".gotop").click(function() {
		$("body,html").stop().animate({
			scrollTop: 10
		}, "slow")
	})
	$(window).scroll(function() {

		$(".aside_doc .dropdown-menu")
		if($(this).scrollTop() > 600) {
			$(".gotop").css({
				display: "block"
			})
		} else {
			$(".gotop").css({
				display: "none"
			})
		}

		if($(this).scrollTop() > 50) {
			$(".aside_doc").css({
				top: 0
			})
		} else {
			$(".aside_doc").css({
				top: "50px"
			})
		}
	})
})
