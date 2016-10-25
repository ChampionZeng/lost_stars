$(function() {
	var re = /^\w{5,13}\@(qq|126|163)\.com$/;
	var re2 = /^1[3|4|5|7|8]\d{9}$/;
	var re3 = /^\w{8,16}$/;
	var newPassword = /^[A-Za-z|\d]{6,16}$/;
	$('.tips').css('display', 'none');
	$('button[type="submit"]').prop('disabled', 'true');
	$('#account').blur(function() {
		if($('#account').val() == "") {
			$('.tips').eq(0).css('display', 'block').find('p').eq(1).css('display', 'none');
			return;
		} else {
			if(re3.test($('#account').val())) {
				console.log(re3.test($('#account').val()));
				$('.tips').eq(0).css('display', 'none');
				return;
			} else {
				console.log(re3.test($('#account').val()));
				$('.tips').eq(0).css('display', 'block').find('p').eq(0).css('display', 'none');
				$('.tips').eq(0).css('display', 'block').find('p').eq(1).css('display', 'block');
			}
		}
	});
	$('#pwd').blur(function() {
		if($('#pwd').val() == "") {
			$('.tips').eq(1).css('display', 'block').find('p').eq(1).css('display', 'none');
			return;
		} else {
			if(re3.test($('#pwd').val())) {
				console.log(re3.test($('#pwd').val()));
				$('.tips').eq(1).css('display', 'none');
				return;
			} else {
				console.log(re3.test($('#pwd').val()));
				$('.tips').eq(1).css('display', 'block').find('p').eq(0).css('display', 'none');
				$('.tips').eq(1).css('display', 'block').find('p').eq(1).css('display', 'block');
			}
		}
	});
	$('#rpwd').blur(function() {
		if($('#rpwd').val() != $('#pwd').val()) {
			$('.tips').eq(2).css('display', 'block');
		} else {
			$('.tips').eq(2).css('display', 'none');
		}
	});

	$('#phone').blur(function() {
		if($('#phone').val() == '' || !re2.test($('#phone').val())) {
			$('.tips').eq(3).css('display', 'block');
		} else {
			$('.tips').eq(3).css('display', 'none');
			if($('#account').val() != '' && $('#pwd').val() != '' && $('#rpwd').val() != '' && $('#phone') != '') {
				$('button[type="submit"]').prop('disabled', '');
			} else {
				return;
			}
		}
	});
	$.cookie.raw = true;
	$.cookie.json = true;
	$('button[type="submit"]').click(function() {
		$.cookie('name', {
			'username': $('#account').val(),
			'userpwd': $('#pwd').val(),
			'phone': $('#phone').val()
		});
		window.location.href = './index.html';
		return false;
	});
});