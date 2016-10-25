$(function() {
	var index = 0;
	var index2 = 0;
	var imgWidth = $('.firstfloor .detailbox').width();
	$('.firstfloor .next').click(function() {
		index++;
		index2++;
		if(index == $('.item-detail li').length - 1) {
			index2 = 0;
			$('.firstfloor .item li').eq(index2).addClass('active').siblings().removeClass('active');
			$('.firstfloor .line').stop().animate({
				left: $('.firstfloor .item li a').eq(index2).offset().left - 40
			}, 400);
		}
		if(index == $('.item-detail li').length) {
			$('.firstfloor .item-detail').offset({
				left: 0
			});
			console.log(1);
			index = 1;
			index2 = 1;
		}
		$('.firstfloor .item li').eq(index2).addClass('active').siblings().removeClass('active');
		$('.firstfloor .line').stop().animate({
			left: $('.firstfloor .item li a').eq(index2).offset().left - 40
		}, 400);
		$('.firstfloor .item-detail').stop().animate({
			left: -imgWidth * index
		}, 1500);

	});

	$('.firstfloor .item li').click(function() {

		$('.firstfloor .item-detail').stop().animate({
			left: (-$(this).index()) * imgWidth
		}, 1500);
		$('.firstfloor .line').stop().animate({
			left: $(this).find('a').offset().left - 40
		}, 400);
		$(this).addClass('active').siblings().removeClass('active');
		index = $(this).index() + 1;
		index2 = $(this).index() + 1;
	});
})

//左侧浮动icon
$(function() {
	var indexitem = 0;
	var imgWidth = $('.changeitem ul li').width();
	$('.change .changeBtn').click(function() {
		indexitem++;
		if(indexitem == $('.changeitem ul li').length - 1) {
			$('.changeitem ul').offset({
				left: 0
			});
			indexitem = 1;
		}
		$('.changeitem ul').animate({
			left: -indexitem * imgWidth
		});
	})
})
$(function() {
	$(window).scroll(function() {
		if($(document).scrollTop() > $(window).height()) {
			$('#gotop').css('display', 'block');
		} else {
			$('#gotop').css('display', 'none');
		}
	});

	$('#gotop .gotop').click(function() {
		$(document).scrollTop(0);
	});

	$('.chanceage .r').click(function() {
		if($('.thirdfloor .chanceage ul').css('display') == 'none') {
			$('.thirdfloor .chanceage ul').show();
		} else {
			$('.thirdfloor .chanceage ul').hide();
		}
	});

	$('.thirdfloor .chanceage li').click(function() {
		$('.thirdfloor .chanceage .l').val($(this).html());
		$('.thirdfloor .chanceage ul').hide();
	})
	
	
	$.cookie.raw = false;
	$.cookie.json = true;
	$('#nav form .l').keyup(function() {
		$('#nav .searchs').html('');
		var result = $.cookie('faq');
		for(var i = 1; i <= 5; i++) {
			var jieguo = result['faq'+i];
			if(jieguo == false) {
				continus;
			}
			$('#nav .searchs').append('<li><a href="javascript:;">' + jieguo + '</a></li>');
		}
		$('#nav .searchs').css('display', 'block');
	});

	$('#nav form').mouseout(function() {
		$(document).click(function() {
			$('#nav .searchs').css('display', 'none');
		});
	});

	$('#nav form li').click(function() {
		$('#nav form .l').val($(this).find('a').html());
	});

	var index = 0
	var imgWidth = $('.bot-carousel li').width();
	$('.carousel-lbtn').click(function() {
		index--;
		if(index <= 0) {
			index = 0;
		}
		$('.bot-carousel ul').stop().animate({
			left: -index * imgWidth
		}, 1500);
		console.log(index);
	});

	$('.carousel-rbtn').click(function() {
		index++;
		if(index > $('.bot-carousel li').length - 1) {
			index = $('.bot-carousel li').length - 1;
		}
		$('.bot-carousel ul').stop().animate({
			left: -index * imgWidth
		}, 1500);

		console.log(index);
	});

	var index2 = 0
	var imgWidth = $('.comment .carousel li').width();
	$('.carousel-left').click(function() {
		index2--;
		if(index2 <= 0) {
			index2 = 0;
		}
		$('.comment .carousel ul').stop().animate({
			left: -index2 * imgWidth
		}, 1500);

		console.log(index2);
	});

	$('.carousel-right').click(function() {
		index2++;
		if(index2 > $('.comment .carousel li').length - 1) {
			index2 = $('.comment .carousel li').length - 1;
		}
		$('.comment .carousel ul').stop().animate({
			left: -index2 * imgWidth
		}, 1500);

		console.log(index2);
	});

	//登录
	$('#loginBtn').click(function() {
		$('#mask').css('display', 'block');

		$('#login').css({
			display: 'block',
			left: ($(window).width() - $('#login').width()) / 2
		});

	});

	$('.close').click(function() {
		$('#mask').css('display', 'none');

		$('#login').css({
			display: 'none'
		});
	});
	$.cookie.raw = false;
	$.cookie.json = true;
	$('#sub').click(function() {
		console.log($.cookie('name'));
		if($('#account').val() == '' || $('#pwd').val() == '') {
			alert('账号或密码不能为空');
		} else if($.cookie('name')==undefined) {
			alert('账号不存在');
		}else if($.cookie('name')['username'] != $('#account').val()){
			alert('账号不存在或您的输入有误')
		}else {
			if($.cookie('name')['userpwd'] != $('#pwd').val()) {
				alert('您的密码错误');
			} else {
				$('#loginBtn').html($.cookie('name')['username'] + '您好');
				$('#register').attr('href', 'javascript:;').html('注销');
				alert('登录成功');
				$('#login').css('display', 'none');
				$('#mask').css('display', 'none');
			}
		}
	})

	$.get('http://127.0.0.1:8020/anngo/json/marquee.json', function(data, status) {
		for(var a in data) {
			for(var i = 0; i < a.length; i++) {
				if(typeof(data[a][i]) === undefined) {
					continue;
				} else {
					for(var son in data[a][i]) {
						if(son == 'links') {
							$('marquee').append('<a href=' + '"' + data[a][i][son] + '"' + '></a><br/><br/>');
						} else {
							$('marquee').find('a').eq(i).text(data[a][i][son]);
						}
					}
				}
			}
		}
	});

	$.get('http://127.0.0.1:8020/anngo/json/banner.json', function(data, status) {
		for(var a in data) {
			for(var i = 0; i < a.length; i++) {
				if(typeof(data[a][i]) === undefined) {
					continue;
				} else {
					for(var son in data[a][i]) {
						if(son == 'links') {
							$('#banner ul').append('<li><a href=' + '"' + data[a][i][son] + '"' + '></a></li>');
						} else if(son == "src") {
							$('#banner ul li').eq(i).find('a').append('<img src=' + '"' + data[a][i][son] + '"' + '/>');
						} else {
							$('#banner ul li').eq(i).find('img').attr('alt', data[a][i][son])
						}
					}
				}
			}
		}
	});
})

function banner() {
	var imgWidth = $('#banner ul li').width();
	var timer = null;
	var index = 0;
	var index2 = 0;
	timer = setInterval(function() {
		index++;
		index2++;
		if(index == $('#banner ul li').length - 1) {
			index2 = 0;
			$('#banner p a').eq(index2).addClass('active').siblings().removeClass('active');
		}
		if(index == $('#banner ul li').length) {
			$('#banner ul').offset({
				left: 0
			});
			index = 1;
			index2 = 1;
		}
		$('#banner p a').eq(index2).addClass('active').siblings().removeClass('active');
		$('#banner ul').animate({
			left: -imgWidth * index
		}, 1500);

	}, 8000)

	$('#banner p a').click(function() {
		$('#banner ul').offset({
			left: -$(this).index() * imgWidth
		});
		$(this).addClass('active').siblings().removeClass('active');
		index = $(this).index() + 1;
		index2 = $(this).index() + 1;
	})

}

$(function() {
	setTimeout(banner, 200);
});