$(document).ready(function () {

	//-----------------------------------------定义和初始化变量----------------------------------------
	var loadBox = $('aside.loadBox');
	var articleBox = $('article');
	var windowScale = window.innerWidth / 750;
	var loadingBox = $("#loadingBox");
	var loadingBox = $("#loadingBox");
	var loadPer = $("#loadingBox .bar");
	var hrefs = window.location.href.split('?');
	var dominUrl = hrefs[0].substr(0, hrefs[0].lastIndexOf('/') + 1);

	var userInfo = {
		userName: "测试",
		userHead: "https://www.seventh77.com/view/food/img/head.jpg",
		userId: "",
		userStatus: 2,		//用户状态 0完成潘神，2未注册手机，17未制作潘神,选择了属性，3未选择属性
		toyUrl: "http://cdn.be-xx.com/test/79e77b44-82fc-4daf-ae12-fa276ab90935.png",
		choseAttr: [],
		choseColor: "",
		hmsr: "default",
		toyInfo: {
			eye: "",
			pants: "",
			head: "",
			bg: "",
			name: ""
		}
	};

	var choseUserInfo = {
		userName: "测试",
		userHead: "https://www.seventh77.com/view/food/img/head.jpg",
		userId: "",
		userStatus: 4,		//用户状态 0完成潘神，2未注册手机，17未制作潘神,选择了属性，3未选择属性
		toyUrl: "http://cdn.be-xx.com/test/79e77b44-82fc-4daf-ae12-fa276ab90935.png",
		choseAttr: ['mm'],
		choseColor: "gray",
		hmsr: "default",
		toyId: "",
		rankBox: null,
		toyInfo: {
			eye: "1",
			pants: "1",
			head: "1",
			bg: "1",
			name: "sssss"
		}
	};

	//----------------------------------------页面初始化----------------------------------------
	icom.init(init);//初始化
	icom.screenScrollUnable();//如果是一屏高度项目且在ios下，阻止屏幕默认滑动行为

	function init() {
		requestAnimationFrame(function () {
			if (os.screenProp < 0.54) articleBox.addClass("screen189");
			if (os.screenProp > 0.64) articleBox.addClass("screen159");
			load_handler();
			bubbleInit($("#loadingBox .left"), 6);
			setTimeout(function () {
				bubbleInit($("#loadingBox .right"), 5);
			}, 1000)
			setTimeout(function () {
				bubbleInit($("#loadingBox .bottom"), 3);
			}, 1500);
		});
		wxUser.init({
			shareInfo: {
				link: dominUrl + "?hmsr=wshare",
				title: "啵啵实验室X泡泡玛特邀你参加潘神DIY大赛",
				friend: "DIY你的专属潘神，即有机会冲刺逆天冠军奖！",
				timeline: "啵啵实验室X泡泡玛特举办潘神DIY大赛，甜品全系列等你斩获！"
			}
		});
		// getUserInfo();
	}//edn func

	//----------------------------------------加载页面图片----------------------------------------
	function load_handler() {
		var loader = new PxLoader();
		loader.addImage('images/common/bgm_off.png');
		loader.addImage('images/common/bgm_on.png');
		loader.addImage('images/common/close.png');
		loader.addImage('images/common/turn_lock.png');
		loader.addImage('images/common/turn_no.png');
		loader.addImage('images/common/turn_phone.png');
		loader.addImage('images/common/turn_unlock.png');
		loader.addImage('images/common/turn_yes.png');
		loader.addImage('images/public/bg.jpg');
		loader.addImage('images/public/btn.png');
		loader.addImage('images/public/bubble.png');
		loader.addImage('images/public/logo.png');
		loader.addImage('images/public/ruleBtn.png');
		loader.addImage('images/loadingBox/k.png');
		loader.addImage('images/loadingBox/mask.png');
		loader.addImage('images/loadingBox/title.png');
		loader.addImage('images/loadingBox/w.png');

		loader.addCompletionListener(function () {
			icom.fadeIn(articleBox);
			load_more();
			// pageInit();
			loader = null;
		});
		loader.start();
	}//end func

	function load_more() {
		var loader = new PxLoader();
		loader.addImage('images/share.jpg');
		loader.addImage('images/tipsBox/btns.png');
		loader.addImage('images/tipsBox/comesoon.png');
		loader.addImage('images/tipsBox/tips.png');
		loader.addImage('images/shareBox/close.png');
		loader.addImage('images/shareBox/hand.png');
		loader.addImage('images/shareBox/k.png');
		loader.addImage('images/shareBox/tips.png');
		loader.addImage('images/ruleBox/rule.jpg');
		loader.addImage('images/ruleBox/rule.png');
		loader.addImage('images/ruleBox/word.jpg');
		loader.addImage('images/resultBox/bg.png');
		loader.addImage('images/resultBox/btn.png');
		loader.addImage('images/resultBox/btn2.png');
		loader.addImage('images/resultBox/gray.png');
		loader.addImage('images/resultBox/green.png');
		loader.addImage('images/resultBox/purple.png');
		loader.addImage('images/resultBox/word/hqx.png');
		loader.addImage('images/resultBox/word/jq.png');
		loader.addImage('images/resultBox/word/lg.png');
		loader.addImage('images/resultBox/word/ml.png');
		loader.addImage('images/resultBox/word/mm.png');
		loader.addImage('images/resultBox/word/sj.png');
		loader.addImage('images/resultBox/spoon2/gray.png');
		loader.addImage('images/resultBox/spoon2/green.png');
		loader.addImage('images/resultBox/spoon2/purple.png');
		loader.addImage('images/resultBox/spoon1/gray.png');
		loader.addImage('images/resultBox/spoon1/green.png');
		loader.addImage('images/resultBox/spoon1/purple.png');
		loader.addImage('images/resultBox/powder/gray.png');
		loader.addImage('images/resultBox/powder/green.png');
		loader.addImage('images/resultBox/powder/purple.png');
		loader.addImage('images/resultBox/bowl/gray.png');
		loader.addImage('images/resultBox/bowl/green.png');
		loader.addImage('images/resultBox/bowl/purple.png');
		loader.addImage('images/rankBox/add.png');
		loader.addImage('images/rankBox/b1.png');
		loader.addImage('images/rankBox/b2.png');
		loader.addImage('images/rankBox/b3.png');
		loader.addImage('images/rankBox/b4.png');
		loader.addImage('images/rankBox/bar.png');
		loader.addImage('images/rankBox/bg.png');
		loader.addImage('images/rankBox/cont.png');
		loader.addImage('images/rankBox/invite.png');
		loader.addImage('images/rankBox/mask.png');
		loader.addImage('images/rankBox/name.png');
		loader.addImage('images/rankBox/search.png');
		loader.addImage('images/rankBox/stripe.png');
		loader.addImage('images/rankBox/title.png');
		loader.addImage('images/posterBox/1.png');
		loader.addImage('images/posterBox/2.png');
		loader.addImage('images/posterBox/3.png');
		loader.addImage('images/posterBox/bg.jpg');
		loader.addImage('images/posterBox/bg.png');
		loader.addImage('images/makeBox/battle.png');
		loader.addImage('images/makeBox/bg.png');
		loader.addImage('images/makeBox/c1.png');
		loader.addImage('images/makeBox/c2.png');
		loader.addImage('images/makeBox/c3.png');
		loader.addImage('images/makeBox/hand.png');
		loader.addImage('images/makeBox/hqx.png');
		loader.addImage('images/makeBox/jq.png');
		loader.addImage('images/makeBox/lg.png');
		loader.addImage('images/makeBox/light.png');
		loader.addImage('images/makeBox/mask.png');
		loader.addImage('images/makeBox/ml.png');
		loader.addImage('images/makeBox/mm.png');
		loader.addImage('images/makeBox/sj.png');
		loader.addImage('images/makeBox/title.png');
		loader.addImage('images/lotteryBox/a1.png');
		loader.addImage('images/lotteryBox/a2.png');
		loader.addImage('images/lotteryBox/b.png');
		loader.addImage('images/lotteryBox/c.png');
		loader.addImage('images/lotteryBox/close.png');
		loader.addImage('images/lotteryBox/k.png');
		loader.addImage('images/lotteryBox/t.png');
		loader.addImage('images/indexBox/btn.png');
		loader.addImage('images/indexBox/form.png');
		loader.addImage('images/codeBox/code.png');
		loader.addImage('images/codeBox/k.png');
		loader.addImage('images/codeBox/k2.png');
		loader.addImage('images/choseBox/btn.png');
		loader.addImage('images/choseBox/cont.png');
		loader.addImage('images/choseBox/control.png');
		loader.addImage('images/choseBox/d.png');
		loader.addImage('images/choseBox/light.png');
		loader.addImage('images/choseBox/name.png');
		loader.addImage('images/choseBox/purple/p.png');
		loader.addImage('images/choseBox/purple/pb.png');
		loader.addImage('images/choseBox/purple/pants/1.png');
		loader.addImage('images/choseBox/purple/pants/2.png');
		loader.addImage('images/choseBox/purple/pants/3.png');
		loader.addImage('images/choseBox/purple/pants/4.png');
		loader.addImage('images/choseBox/purple/pants/5.png');
		loader.addImage('images/choseBox/purple/pants/w.png');
		loader.addImage('images/choseBox/purple/head/1.png');
		loader.addImage('images/choseBox/purple/head/2.png');
		loader.addImage('images/choseBox/purple/head/3.png');
		loader.addImage('images/choseBox/purple/head/4.png');
		loader.addImage('images/choseBox/purple/head/5.png');
		loader.addImage('images/choseBox/purple/head/w.png');
		loader.addImage('images/choseBox/purple/eye/1.png');
		loader.addImage('images/choseBox/purple/eye/2.png');
		loader.addImage('images/choseBox/purple/eye/3.png');
		loader.addImage('images/choseBox/purple/eye/w.png');
		loader.addImage('images/choseBox/green/p.png');
		loader.addImage('images/choseBox/green/pb.png');
		loader.addImage('images/choseBox/green/pants/1.png');
		loader.addImage('images/choseBox/green/pants/2.png');
		loader.addImage('images/choseBox/green/pants/3.png');
		loader.addImage('images/choseBox/green/pants/4.png');
		loader.addImage('images/choseBox/green/pants/5.png');
		loader.addImage('images/choseBox/green/pants/w.png');
		loader.addImage('images/choseBox/green/head/1.png');
		loader.addImage('images/choseBox/green/head/2.png');
		loader.addImage('images/choseBox/green/head/3.png');
		loader.addImage('images/choseBox/green/head/4.png');
		loader.addImage('images/choseBox/green/head/5.png');
		loader.addImage('images/choseBox/green/head/w.png');
		loader.addImage('images/choseBox/green/eye/1.png');
		loader.addImage('images/choseBox/green/eye/2.png');
		loader.addImage('images/choseBox/green/eye/3.png');
		loader.addImage('images/choseBox/green/eye/w.png');
		loader.addImage('images/choseBox/gray/p.png');
		loader.addImage('images/choseBox/gray/pb.png');
		loader.addImage('images/choseBox/gray/pants/1.png');
		loader.addImage('images/choseBox/gray/pants/2.png');
		loader.addImage('images/choseBox/gray/pants/3.png');
		loader.addImage('images/choseBox/gray/pants/4.png');
		loader.addImage('images/choseBox/gray/pants/5.png');
		loader.addImage('images/choseBox/gray/pants/w.png');
		loader.addImage('images/choseBox/gray/head/1.png');
		loader.addImage('images/choseBox/gray/head/2.png');
		loader.addImage('images/choseBox/gray/head/3.png');
		loader.addImage('images/choseBox/gray/head/4.png');
		loader.addImage('images/choseBox/gray/head/5.png');
		loader.addImage('images/choseBox/gray/head/w.png');
		loader.addImage('images/choseBox/gray/eye/1.png');
		loader.addImage('images/choseBox/gray/eye/2.png');
		loader.addImage('images/choseBox/gray/eye/3.png');
		loader.addImage('images/choseBox/gray/eye/w.png');
		loader.addImage('images/choseBox/bg/1.png');
		loader.addImage('images/choseBox/bg/2.png');
		loader.addImage('images/choseBox/bg/3.png');
		loader.addImage('images/choseBox/bg/4.png');
		loader.addImage('images/choseBox/bg/5.png');

		// 实际加载进度
		loader.addProgressListener(function (e) {
			var per = Math.round(e.completedCount / e.totalCount * 50);
			loadPer.css({ "x": per * 0.97 + '%' });
		});

		loader.addCompletionListener(function () {
			load_timer(50);//模拟加载进度
			loader = null;
		});
		loader.start();
	}//end func

	//模拟加载进度
	function load_timer(per) {
		per = per || 0;
		per += imath.randomRange(1, 3);
		per = per > 100 ? 100 : per;
		loadPer.css({ "x": per * 0.97 + '%' });
		if (per == 100) setTimeout(pageInit, 200);
		else setTimeout(load_timer, 33, per);
	}//edn func

	//----------------------------------------页面逻辑代码----------------------------------------
	var lotteryBox = $("#lotteryBox");
	var choseBox = $("#choseBox");
	var makeBox = $("#makeBox");
	var resultBox = $("#resultBox");
	var lotteryBox = $("#lotteryBox");
	var rankBox = $("#rankBox");
	var shareBox = $("#shareBox");
	var posterBox = $("#posterBox");
	var toyBox = $("#toyBox");
	var ruleBox = $("#ruleBox");
	var tipsBox = $("#tipsBox");
	var exchangeEnergy = $("#exchangeEnergy");
	var addEnergy = $("#addEnergy");
	var codeBox = $("#codeBox");
	var rankScrollBox = $("#rankScroll");
	var rankSelfBox = $("#rankSelf");
	var confirmBox = $("#confirmBox");

	var ruleScroll = new IScroll('#ruleScroll', {
		bounce: false,
		scrollbars: true,
		click: true
	});

	var penelScroll = new IScroll('#penelScroll', {
		bounce: false,
		scrollbars: true,
		click: true
	});

	var rankScroll = new IScroll('#rankScroll', {
		bounce: false,
		scrollbars: true,
		click: true
	});

	var readed = false;
	var toyWhite = true;
	var lotteryFlag = false;
	var makeAttrFlag = true;
	var AllRankFlag = true;
	var requestRankFlag = true;
	var nowPage = 1;
	var allPage = 1;

	var attrColor = {
		"ml": {
			color: "gray",
			name: "浪漫灰",
			colorName: "粉灰"
		},
		"jq": {
			color: "gray",
			name: "温柔棕",
			colorName: "粉灰"
		},
		"lg": {
			color: "green",
			name: "俏皮灰",
			colorName: "粉绿"
		},
		"hqx": {
			color: "green",
			name: "元气绿",
			colorName: "粉绿"
		},
		"sj": {
			color: "purple",
			name: "轻甜粉",
			colorName: "粉紫"
		},
		"mm": {
			color: "purple",
			name: "梦幻紫",
			colorName: "粉紫"
		}
	};

	/**
	 * 页面初始化
	 */
	function pageInit() {
		eventInit();
		// DevelopTest();
		monitor_handler();
		judgeUserSource();
		IOSInput();
	}//end func

	/**
	 * 开发测试使用
	 */
	function DevelopTest() {
		loadingBox.hide();
		// QABox.show();

		// penelScroll.refresh();
		// rankScroll.refresh();
		// lotteryAnime();
		// liquidAnime();
		// showChoseBox();
		makeInvitePeople();
	}

	/**
	 * 处理ios输入框的问题
	 */
	function IOSInput() {
		if (os.ios) {
			var itimer;
			document.body.addEventListener('focusin', function () {
				setTimeout(function () {
					clearTimeout(itimer);
				}, 200);
			})
			document.body.addEventListener('focusout', function () {
				itimer = setTimeout(function () {
					$(document).scrollTop(0)
				}, 300);
			})
		}
	}

	/**
	 * 事件初始化
	 */
	function eventInit() {
		$(".limitBtn").on("touchend", limitClick);

		$(".ruleBtn").on("touchend", showRuleBox);

		loadingBox.find(".readed").on("touchend", readPrivacy);
		loadingBox.find(".privacy").on("touchend", gotoPrivacy);
		loadingBox.find("#codeBtn").on("touchend", getCode);
		loadingBox.find("#startBtn").on("touchend", submitPhone);

		makeBox.find(".bubble").on("touchend", choseAttr);
		makeBox.find(".btn").on("touchend", makeAttr);

		resultBox.find(".makeToy").on("touchend", showChoseBox);
		resultBox.find(".showList").on("touchend", showMyRankList);

		choseBox.on("click", ".btn", changeToyImg);
		choseBox.find(".submitbtn").on("touchend", makeMyToyImg);

		rankBox.find(".addEnergy").on("touchend", showAddEnergy);
		rankBox.find(".lottery").on("touchend", lottery);
		rankBox.find(".makeToy").on("touchend", reloadPage);
		rankBox.find(".allBtn").on("touchend", requestAllRankList);
		rankBox.find(".searchBtn").on("touchend", searchRankName);
		rankBox.on("click", ".add", function () {
			var that = $(this);
			choseUserInfo.rankBox = that.parents(".block");
			requestRankUserInfo(that, AddEnergy);
			imonitor.add({ action: 'touchstart', category: 'default', label: '加能量涨排名' });
		});
		rankBox.on("click", ".invite", function (e) {
			var that = $(this);
			requestRankUserInfo(that, makeInvitePeople);
			imonitor.add({ action: 'touchstart', category: 'default', label: '邀请好友加能量' });
		});

		lotteryBox.find(".close").on("touchend", closeLotteryBox);

		addEnergy.find(".confirmBtn").on("touchend", showConfirmBox);
		confirmBox.find(".ok").on("touchend", addEnergyToUser);
		confirmBox.find(".no").on("touchend", function () {
			icom.fadeOut(confirmBox);
			icom.fadeOut(addEnergy);
		});

		rankScroll.on("scrollEnd", requestNextRankList);

		shareBox.find(".closeBtn").on("touchend", hideShareBox);

		icom.clipboard($(".copyBtn1"), "¢afryYLVi5qc¢", showCopySuccess);
		icom.clipboard($(".copyBtn2"), "￥kK1cYLV7xyy￥", showCopySuccess);

		codeBox.find(".closeBtn").on("touchend",function(){
			icom.fadeOut(codeBox);
			icom.fadeIn(rankBox);
		})
	}

	/**
	 * 显示确定页面
	 */
	function showConfirmBox() {
		confirmBox.find("p").html("确认为【" + choseUserInfo.toyInfo.name + "】注入能量吗？");
		icom.popOn(confirmBox);
	}

	/**
	 * 显示拷贝成功
	 */
	function showCopySuccess() {
		showTipsBox("复制成功<br>赶快打开淘宝查看吧");
	}

	/**
	 * 隐藏排行榜页面
	 */
	function hideShareBox() {
		icom.fadeOut(shareBox);
		icom.fadeIn(rankBox);
	}

	/**
	 * 请求用户信息
	 */
	function requestRankUserInfo(ele, callback) {
		var id = ele.attr("data-val");
		API.getUserInfoFromToy({ product_id: id }, function (res) {
			if (res.code == 0) {
				var data = res.data;

				choseUserInfo.toyId = id;
				choseUserInfo.userName = data.userinfo.nickname;
				choseUserInfo.userHead = data.userinfo.headimgurl;
				choseUserInfo.userId = data.userinfo.id;

				updateUserInfoToy(choseUserInfo, data);
				updateUserInfoAttr(choseUserInfo, data);

				if (callback) callback();
			}
			else icom.alert(res.message)
		})
	}

	/**
	 * 生成邀请页面
	 */
	function makeInvitePeople() {
		icom.fadeIn(loadBox);
		var url = "https://bubblepop.beats-digital.com/tmall/?hmsr=imgshare&energy=1&uid=" + choseUserInfo.userId;
		var a = false, b = false, c = false;

		shareBox.find(".toy")[0].src = choseUserInfo.toyUrl;
		shareBox.find(".names").html(choseUserInfo.toyInfo.name);
		shareBox.find(".name").html(choseUserInfo.toyInfo.name);

		posterBox.find(".names").html(choseUserInfo.toyInfo.name);
		posterBox.find(".name").html(choseUserInfo.toyInfo.name);
		posterBox.find(".nikeName").html(choseUserInfo.userName);
		posterBox.find(".tips")[0].src = "images/posterBox/" + choseUserInfo.toyInfo.eye + ".png";

		API.imgtrance({ "img_url": choseUserInfo.userHead }, function (res) {
			if (res.code == 0) {
				posterBox.find(".head")[0].src = res.data.img_base;
				a = true;
				if (a && b && c) {
					setTimeout(function () {
						makePoster(posterBox, "jpg", showShareBox);
					}, 1000);
				}
			}

		});

		makeMyToyImging(choseUserInfo, function (res) {
			b = true;
			posterBox.find(".toy")[0].src = res;
			if (a && b && c) {
				setTimeout(function () {
					makePoster(posterBox, "jpg", showShareBox);
				}, 1000);
			}
		});

		API.imgtrance({ "img_url": "http://upload.be-xx.com/qrcode?s=" + encodeURIComponent(url) + "&color=000" }, function (res) {
			if (res.code == 0) {
				c = true;
				posterBox.find(".code")[0].src = res.data.img_base;
				if (a && b && c) {
					setTimeout(function () {
						makePoster(posterBox, "jpg", showShareBox);
					}, 1000);
				}
			}
		});
	}

	/**
	 * 显示分享页面
	 */
	function showShareBox(src) {
		shareBox.find(".poster")[0].src = src;
		icom.fadeOut(loadBox);
		icom.fadeOut(rankBox);
		shareBox.show();
	}

	/**
	 * 添加能量
	 */
	function AddEnergy() {
		// API.addEnergy({ product_id: choseUserInfo.toyId }, function (res) {
		// 	if (res.code == 0) {
		// 		updateRankUserEnergyInfo(choseUserInfo.rankBox, 1000);
		// 		showTipsBox("您已为【" + choseUserInfo.toyInfo.name + "】<br>成功注入能量！");
		// 	}
		// 	else showAddEnergyBox();
		// })
		showAddEnergyBox();
	}

	/**
	 * 显示添加能量的页面
	 */
	function showAddEnergyBox() {
		icom.popOn(addEnergy);
	}

	/**
	 * 更新排行榜用户能量信息
	 */
	function updateRankUserEnergyInfo(box, eng) {
		var energyBox = box.find(".energy");
		var bar = box.find(".bar");
		var energy = parseInt(energyBox.text());
		var energyPcet = energy / 1000;
		energyPcet = energyPcet > 90 ? 90 : energyPcet;
		energy = energy + eng;
		energyBox.html(energy + "能量");
		bar.css({ x: energyPcet + "%" })
	}

	/**
	 * 给用户添加能量
	 */
	function addEnergyToUser() {
		var code = $("#addEnergyCode").val();
		if (code == "") icom.alert("请输入能量兑换码");
		else {
			API.addEnergyCode({ product_id: choseUserInfo.toyId, code_num: code }, function (res) {
				if (res.code == 0) {
					updateRankUserEnergyInfo(choseUserInfo.rankBox, 5000);
					showTipsBox("您已为【" + choseUserInfo.toyInfo.name + "】<br>成功注入能量！");
					icom.fadeOut(confirmBox);
				}
				else icom.alert(res.message);
			});
		}
	}

	/**
	 * 显示提示页面
	 * @param {} word 
	 */
	function showTipsBox(word) {
		tipsBox.find("p").html(word);
		icom.popOn(tipsBox);
	}

	/**
	 * 关闭抽奖页面
	 */
	function closeLotteryBox() {
		if (!lotteryFlag) {
			icom.fadeIn(rankBox, 500, function () {
				lotteryBox.hide();
			})
		}
	}

	/**
	 * 刷新页面
	 */
	function reloadPage() {
		if (os.weixin) {
			location.replace("https://bubblepop.beats-digital.com/tmall/?v=" + Math.random());
		}
		else {
			showCodeBox();
		}
	}

	/**
	 * 显示code页面
	 */
	function showCodeBox() {
		var url = "https://bubblepop.beats-digital.com/tmall/?hmsr=transfer&hmpl=&hmcu=&hmkw=&hmci=";
		codeBox.find(".code")[0].src = "http://upload.be-xx.com/qrcode?s=" + encodeURIComponent(url) + "&color=000";
		icom.fadeOut(rankBox);
		icom.fadeIn(codeBox);
	}

	/**
	 * 显示加能量的页面
	 */
	function showAddEnergy() {
		icom.popOn(exchangeEnergy);
	}

	/**
	 * 抽奖
	 */
	function lottery() {
		API.lottery(function (res) {
			if (res.code == 0) showLotteryBox(res.data.gift_id);
			else icom.alert(res.message);
		})
	}

	/**
	 * 显示抽奖的页面
	 */
	function showLotteryBox(award) {
		icom.fadeOut(rankBox);
		lotteryBox.show();
		lotteryBox.find(".bubbleBox").show();

		lotteryFlag = true;

		lotteryAnime(function () {
			lotteryFlag = false;
			if (award == 1) {
				icom.fadeIn(lotteryBox.find(".coupon"));
			}
			else if (award == 2) {
				icom.fadeIn(lotteryBox.find(".toy"));
			}
			else {
				icom.alert("未中奖");
			}
		});
	}

	/**
	 * 生成我的潘神形象
	 */
	function makeMyToyImg() {
		userInfo.toyInfo.name = $("#toy_name").val();

		if (userInfo.toyInfo.eye == "") {
			icom.alert("请选择镜片颜色");
			return;
		}
		if (userInfo.toyInfo.pants == "") {
			icom.alert("请选择裤子颜色");
			return;
		}
		if (userInfo.toyInfo.bg == "") {
			icom.alert("请选择背景");
			return;
		}
		if (userInfo.toyInfo.head == "") {
			icom.alert("请选择头发颜色");
			return;
		}
		if (userInfo.toyInfo.name == "") {
			icom.alert("快来给你的专属潘神起个名字哦");
			return;
		}

		icom.fadeIn(loadBox);

		makeMyToyImging(userInfo, function (base64) {
			icom.base64_send(base64, function (src) {
				var toyInfo = JSON.stringify(userInfo.toyInfo);
				var data = {
					name: userInfo.toyInfo.name,
					path: toyInfo,
					user_headimg: userInfo.userHead,
					user_nickname: userInfo.userName,
					img_url: src
				};
				// console.log(data)
				API.addUserToy(data, function (res) {
					icom.fadeOut(loadBox);
					if (res.code == 0) {
						userInfo.toyUrl = src;
						showRankBox();
					}
					else icom.alert(res.message);
				});
			})
		})
	}

	/**
	 * 生成中...
	 */
	function makeMyToyImging(info, callback) {
		toyBox.find(".body")[0].src = "images/choseBox/" + info.choseColor + "/p.png";
		toyBox.find(".pants")[0].src = "images/choseBox/" + info.choseColor + "/pants/" + info.toyInfo.pants + ".png";
		toyBox.find(".head")[0].src = "images/choseBox/" + info.choseColor + "/head/" + info.toyInfo.head + ".png";
		toyBox.find(".eye")[0].src = "images/choseBox/" + info.choseColor + "/eye/" + info.toyInfo.eye + ".png";
		makePoster(toyBox, "png", callback);
	}

	/**
	 * 修改潘神的形象
	 */
	function changeToyImg() {
		var that = $(this);
		var type = that.attr("data-type");
		var val = that.attr("data-val");
		var box = choseBox.find(".block" + type);

		box.find(".btn").removeClass("act");
		that.addClass("act");

		if (toyWhite) {
			toyWhite = false;
			choseBox.find(".toy_w").hide();
			choseBox.find(".toy_b").show();
		}

		switch (type) {
			case "0":
				changeToyEye(val);
				break;
			case "1":
				changeToyPants(val);
				break;
			case "2":
				changeToyBg(val);
				break;
			case "3":
				changeToyHead(val);
				break;
		}
	}

	/**
	 * 修改潘神的眼镜
	 */
	function changeToyEye(id) {
		var eye = choseBox.find(".toy_e");
		eye.show();
		eye[0].src = "images/choseBox/" + userInfo.choseColor + "/eye/" + id + ".png";
		userInfo.toyInfo.eye = id;
	}

	/**
	 * 修改潘神的裤子
	 */
	function changeToyPants(id) {
		var pants = choseBox.find(".toy_p");
		pants.show();
		pants[0].src = "images/choseBox/" + userInfo.choseColor + "/pants/" + id + ".png";
		userInfo.toyInfo.pants = id;
	}

	/**
	 * 修改潘神的背景
	 */
	function changeToyBg(id) {
		var bg = choseBox.find(".bg");
		bg.show();
		bg[0].src = "images/choseBox/bg/" + id + ".png";
		userInfo.toyInfo.bg = id;
	}

	/**
	 * 修改潘神的头
	 */
	function changeToyHead(id) {
		var head = choseBox.find(".toy_h");
		head.show();
		head[0].src = "images/choseBox/" + userInfo.choseColor + "/head/" + id + ".png";
		userInfo.toyInfo.head = id;
	}

	/**
	 * 显示制作潘神的页面
	 */
	function showChoseBox() {
		var toy = choseBox.find(".toy_b");
		var toyw = choseBox.find(".toy_w");
		toy[0].src = "images/choseBox/" + userInfo.choseColor + "/p.png";
		toyw[0].src = "images/choseBox/" + userInfo.choseColor + "/pb.png";
		icom.fadeOut(resultBox);
		choseBox.show();
		penelInit();
		penelScroll.refresh();
	}

	/**
	 * 显示我的排行榜
	 */
	function showMyRankList() {
		icom.fadeOut(resultBox);
		rankBox.show();
		rankBox.find(".lottery").show();
		requestUidList(userInfo.userId);
	}

	/**
	 * 显示排行榜页面
	 */
	function showRankBox() {
		icom.fadeOut(choseBox);
		rankBox.show();
		rankBox.find(".lottery").show();
		requestAllRankList();
	}

	/**
	 * 去排行榜页面
	 */
	function gotoRankList() {
		icom.fadeOut(loadingBox);
		rankBox.show();
		rankBox.find(".makeToy").show();

		rankBox.find(".myselfRank").hide();
		rankBox.find(".search").show();
		$("#rankScroll").removeClass("self");
		requestAllRankList();
	}

	/**
	 * 根据名字搜索排行榜
	 */
	function searchRankName() {
		var name = $("#search").val();
		if (name == "") icom.alert("请输入潘神昵称");
		else requestNameList(name);
	}

	/**
	 * 请求下一页排行榜
	 */
	function requestNextRankList() {
		if (AllRankFlag && rankScroll.y == rankScroll.maxScrollY && requestRankFlag) {
			if (nowPage > allPage) {
				requestRankFlag = false;
				icom.alert("排名到底部了");
				return;
			}
			API.getRankList({ page: nowPage }, function (res) {
				if (res.code == 0) renderRankAll(res.data, false);
				else icom.alert(res.message);
			})
		}
	}

	/**
	 * 请求所有的排行榜
	 */
	function requestAllRankList() {
		API.getRankList({ page: 1 }, function (res) {
			if (res.code == 0) renderRankAll(res.data, true);
			else icom.alert(res.message);
		})
	}

	/**
	 * 请求指定uid的排行榜
	 */
	function requestUidList(uid) {
		API.getRankListFromUid({ uid: uid }, function (res) {
			if (res.code == 0) renderRankSelf(res.data);
			else icom.alert(res.message);
		});
	}

	/**
	 * 请求昵称的排行榜
	 */
	function requestNameList(name) {
		API.getRankListFromName({ name: name }, function (res) {
			if (res.code == 0) renderRankSelf(res.data);
			else icom.alert(res.message);
		});
	}

	/**
	 * 渲染全部排行榜
	 */
	function renderRankAll(data, empty) {
		var box = $("#rankScroll .scroll");
		var cont = makeRankBlock(data.data);

		if (empty) {
			nowPage = 1;
			box.empty();
			rankScroll.scrollTo(0, 0, 100);
			requestRankFlag = true;
		}
		allPage = data.total_page;
		rankScrollBox.show();
		rankSelfBox.hide();
		box.append(cont);
		AllRankFlag = true;
		rankScroll.refresh();
		nowPage++;
	}

	/**
	 * 渲染自己的排行榜
	 * @param {*} data 
	 */
	function renderRankSelf(data) {
		var box = $("#rankSelf .scroll");
		var cont = makeRankBlock(data);

		rankScrollBox.hide();
		rankSelfBox.show();
		box.empty().append(cont);
		AllRankFlag = false;
	}

	/**
	 * 生成排行榜的列表
	 */
	function makeRankBlock(data) {
		var cont = "";
		for (var i = 0; i < data.length; i++) {
			var toy = data[i];
			var energy = toy.energy / 1000;
			energy = energy > 90 ? 90 : energy;
			cont += '<div class="block"><img src="' + toy.img_url + '" class="toy"><div class="name">NO.' + toy.rank + ' ' + toy.name + '</div><div class="barBox"><div class="mask full"><div class="bar" style="transform: translate(' + energy + '%,0);"></div></div><div class="energy">' + toy.energy + '能量</div></div><div class="btns"><div style="" class="add" data-val="' + toy.id + '"></div></div></div>';
		}
		return cont;
	}

	/**
	 * 生成属性
	 */
	function makeAttr() {
		if (makeAttrFlag) {
			if (userInfo.choseAttr.length == 0) icom.alert("至少选择一个属性");
			else {
				makeAttrFlag = false;
				var arr = userInfo.choseAttr;
				var bubble = "";
				var bubble_desc = attrColor[arr[0]].name + "--" + attrColor[arr[0]].colorName;
				for (var i = 0; i < arr.length; i++) {
					bubble += i == 0 ? "" : ",";
					bubble += attrColor[arr[i]].name;
				}
				// console.log(bubble,bubble_desc);
				API.addUserAttr({ bubble: bubble, bubble_desc: bubble_desc }, function (res) {
					if (res) makeAttrAnime();
					else {
						icom.alert(res.message);
						makeAttrFlag = true;
					}
				})
			}
		}
	}

	/**
	 * 生成属性的动画
	 */
	function makeAttrAnime() {
		var bubble = makeBox.find(".bubble");

		bubble.transition({ x: "2.8rem", y: "-1rem", opacity: 0 }, 1500);

		setTimeout(function () {
			liquidAnime(function () {
				icom.fadeOut(makeBox);
				showMyChoseAttr(false, true);
			})
		}, 500);
	}

	/**
	 * 选择属性
	 */
	function choseAttr() {
		var that = $(this);
		var val = that.attr("data-val");

		if (!that.hasClass("act")) {
			that.addClass("act");
			userInfo.choseAttr.push(val);
			if (userInfo.choseAttr.length == 1) {
				userInfo.choseColor = attrColor[val].color;
			}
		}
	}

	/**
	 * 获取验证码
	 */
	function getCode() {
		var that = $(this);
		var text = that.text();
		var phone = $("#index_phone").val();

		if (!icom.checkStr(phone)) {
			icom.alert("请输入正确的手机号码");
			return;
		}

		if (text == "发送验证码") {
			API.sendCode({ phone: phone }, function (res) {
				if (res.code == 0) codeTime(that);
				else icom.alert(res.message);
			});
		}
	}

	/**
	 * 发送二维码计时
	 */
	function codeTime(box) {
		var time = 60;
		box.text(time + "s");
		var timer = setInterval(function () {
			time--;
			box.text(time + "s");
			if (time == 0) {
				clearInterval(timer);
				box.text("发送验证码");
			}
		}, 1000);
	}

	/**
	 * 提交手机信息
	 */
	function submitPhone() {
		var phone = $("#index_phone").val();
		var code = $("#index_code").val();

		if (!icom.checkStr(phone)) {
			icom.alert("请输入正确的手机号码");
		}
		else if (code == "") {
			icom.alert("请输入验证码");
		}
		else if (!readed) {
			icom.alert("请先同意隐私条款");
		}
		else {
			API.addPhone({ phone: phone, code: code }, function (res) {
				if (res.code == 0) showMakePage();
				else icom.alert(res.message);
			})
		}
	}

	/**
	 * 去隐私页面
	 */
	function gotoPrivacy() {
		window.open("https://www.acuvue.com.cn/privacy-policy");
	}

	/**
	 * 阅读隐私
	 */
	function readPrivacy() {
		if (!readed) {
			readed = true;
			$(this).css({ opacity: 1 });
		}
		else {
			readed = false;
			$(this).css({ opacity: 0 });
		}
	}

	/**
	 * 显示规则页面
	 */
	function showRuleBox() {
		icom.popOn(ruleBox);
		ruleScroll.refresh();
	}

	/**
	 * 获取用户基础信息
	 */
	function getUserInfo() {
		API.Login(function (res) {
			if (res.code == 1) {
				location.replace(res.data.url);
				return;
			}

			userInfo.userName = res.data.nickname;
			userInfo.userHead = res.data.headimgurl;
			userInfo.userId = res.data.id;
			userInfo.userStatus = res.code;

			// res.code = 3;
			// res.product = {bubble:"魅力,好奇心"};
			// res.code = 0;
			// res.product = {
			// 	bubble:"魅力,好奇心",
			// 	img_url:"http://cdn.be-xx.com/test/79e77b44-82fc-4daf-ae12-fa276ab90935.png",
			// 	path:'{eye:"gray",pants:"1",head:"1",bg:1,name:"ssss"}'
			// };

			if (res.code == 17 || res.code == 0) {
				updateUserInfoAttr(userInfo, res.data.product);
			}

			if (res.code == 0) {
				updateUserInfoToy(userInfo, res.data.product);
			}
		})
	}

	/**
	 * 更新用户的属性信息
	 */
	function updateUserInfoAttr(info, data) {
		var attr = { "梦幻紫": "mm", "元气绿": "hqx", "轻甜粉": "sj", "俏皮灰": "lg", "温柔棕": "jq", "浪漫灰": "ml" };
		var arr = data.bubble.split(",");
		info.choseAttr = [];

		for (var i = 0; i < arr.length; i++) {
			info.choseAttr.push(attr[arr[i]]);
		}

		info.choseColor = attrColor[info.choseAttr[0]].color;

	}

	/**
	 * 更新用户的玩具信息
	 */
	function updateUserInfoToy(info, data) {
		info.toyUrl = data.img_url;
		info.toyInfo = eval('(' + data.path + ')');
	}

	/**
	 * 判断用户来源
	 */
	function judgeUserSource() {
		var hmsr = icom.getQueryString("hmsr") || "default";
		var energy = icom.getQueryString("energy");
		var userId = icom.getQueryString("uid");

		userInfo.hmsr = hmsr;

		API.addUserSource({ source: hmsr }, function () { });
		gotoRankList();
	}

	/**
	 * 判断用户状态
	 */
	function judgeUserStatus() {
		switch (userInfo.userStatus) {
			case 0:
				icom.fadeOut(loadingBox);
				showTipsBox("欢迎回到啵啵实验室<br>点击查看我的潘神排名<br>查看排名");
				showMyChoseAttr(true);
				break;
			case 2:
				showPhonePage();
				break;
			case 17:
				icom.fadeOut(loadingBox);
				showMyChoseAttr(false);
				break;
			case 3:
				showMakePage();
				break;
		}
	}

	/**
	 * 显示手机页面
	 */
	function showPhonePage() {
		var loadBarBox = loadingBox.find(".loadBarBox");
		var formBox = loadingBox.find(".formBox");
		var startBtn = loadingBox.find(".btn");
		var ruleBtn = loadingBox.find(".ruleBtn");

		icom.fadeOut(loadBarBox);
		icom.fadeIn(formBox);
		icom.fadeIn(startBtn);
		icom.fadeIn(ruleBtn);
	}

	/**
	 * 显示制作页面
	 */
	function showMakePage() {
		makeBox.show();
		icom.fadeOut(loadingBox);
	}

	/**
	 * 显示我选择的属性页面
	 */
	function showMyChoseAttr(make, ani) {
		var word = resultBox.find(".word");
		var bowl = resultBox.find(".bowl");
		var powder = resultBox.find(".powder");
		var spoon1 = resultBox.find(".spoon1");
		var spoon2 = resultBox.find(".spoon2");

		resultBox.show();

		word[0].src = "images/resultBox/word/" + userInfo.choseAttr[0] + ".png";
		bowl[0].src = "images/resultBox/bowl/" + userInfo.choseColor + ".png";
		powder[0].src = "images/resultBox/powder/" + userInfo.choseColor + ".png";
		spoon1[0].src = "images/resultBox/spoon1/" + userInfo.choseColor + ".png";
		spoon2[0].src = "images/resultBox/spoon2/" + userInfo.choseColor + ".png";

		if (ani) {
			spoon1
				.css({ opacity: 0, rotate: "-30deg" })
				.transition({ opacity: 1, rotate: 0, delay: 500 }, 800);
			spoon2
				.css({ opacity: 0, rotate: "30deg" })
				.transition({ opacity: 1, rotate: 0, delay: 500 }, 800);
			powder
				.css({ opacity: 0, y: "-0.5rem" })
				.transition({ opacity: 1, y: 0, delay: 1000 }, 800);
			bowl
				.css({ opacity: 0 })
				.transition({ opacity: 1, delay: 1500 }, 800);
		}

		if (make) resultBox.find(".showList").show();
		else resultBox.find(".makeToy").show();
	}

	/**
	 * 面板初始化
	 */
	function penelInit() {
		var box = choseBox.find(".btns");

		for (var i = 0; i < 4; i++) {
			var num = i == 0 ? 3 : 5;
			var block = $("<div>", { "class": "block block" + i });
			var cont = "";
			for (var j = 0; j < num; j++) {
				cont += '<div class="btn" data-type="' + i + '" data-val="' + (j + 1) + '"></div>'
			}
			block.append(cont);
			box.append(block);
		}
	}

	/**
	 * 液体动画
	 */
	function liquidAnime(callback) {
		var color1 = makeBox.find(".color1");
		var color2 = makeBox.find(".color2");
		var color3 = makeBox.find(".color3");

		color1.transition({ x: "1.3rem", y: 0 }, 1500);
		color2.transition({ x: "-1rem", y: 0 }, 1500);
		color3.transition({ x: "0.5rem", y: "-0.3rem" }, 1500, function () {
			if (callback) callback();
		});
	}

	/**
	 * 抽奖的动画
	 */
	function lotteryAnime(callback) {
		var box = lotteryBox.find(".bubbleBox");
		for (var i = 0; i < 12; i++) {
			if (i < 4) {
				makebubble(box, {
					width: imath.randomRange(15, 28) / 10,
					left: imath.randomRange(2, 4),
					delay: imath.randomRange(0, 2000),
					time: imath.randomRange(3000, 4000)
				});
			}
			else {
				makebubble(box, {
					width: imath.randomRange(2, 10) / 10,
					left: imath.randomRange(3, 6),
					delay: imath.randomRange(0, 1000),
					time: imath.randomRange(4000, 5000)
				});
			}
		}

		makebubble(box, { width: 3, left: 0.5, delay: 0, time: 6500 }, callback);
	}

	/**
	 * 生成泡泡
	 */
	function makebubble(box, opts, callback) {
		var bubble = $("<img>", {
			"class": "bubble",
			"src": "images/lotteryBox/b.png"
		});
		box.append(bubble);
		bubble.css({
			"width": opts.width + "rem",
			"left": opts.left + "rem"
		});
		bubble.transition({ y: "-13rem", delay: opts.delay }, opts.time, "ease-in", function () {
			if (callback) callback();
		});
	}

	/**
	 * 气泡初始化
	 */
	function bubbleInit(box, num) {
		for (var i = 0; i < num; i++) {
			var bubble = $("<img>", {
				"class": "bubble riseing" + i,
				"src": "images/public/bubble.png"
			});
			if (i == 0) {
				bubble.css({
					"width": "1rem",
					"left": "0.2rem"
				});
			}
			else {
				bubble.css({
					"width": imath.randomRange(2, 5) / 10 + "rem",
					"left": imath.randomRange(1, 20) / 10 + "rem"
				});
			}
			box.append(bubble);
		}
	}

	/**
	 * 限制点击
	 */
	function limitClick() {
		$(".limitBtn").addClass('noPointer');
		setTimeout(function () { $(".limitBtn").removeClass('noPointer') }, 500);
	}//end func

	/**
	 * 生成海报
	 */
	function makePoster(box, type, callback) {
		var shareContent = box;
		var canvas = document.createElement("canvas"); //创建一个canvas节点
		var scale = 1; //定义任意放大倍数 支持小数
		canvas.width = (shareContent.width() + shareContent.offset().left) * scale; //定义canvas 宽度 * 缩放
		canvas.height = (shareContent.height() + shareContent.offset().top + $(window).scrollTop()) * scale; //定义canvas高度 *缩放
		canvas.getContext("2d").scale(scale, scale); //获取context,设置scale 
		var opts = {
			scale: scale, // 添加的scale 参数
			canvas: canvas, //自定义 canvas
			logging: false, //日志开关
			backgroundColor: "transparent",
			width: shareContent.width(), //dom 原始宽度
			height: shareContent.height() //dom 原始高度
		};
		html2canvas(shareContent[0], opts).then(function (canvas) {
			//如果想要生成图片 引入canvas2Image.js
			canvasTrfImg(canvas, type, callback);
		});
	}

	/**
	 * canvas转图片
	 * @param {*} canvas 
	 */
	function canvasTrfImg(canvas, type, callback) {
		var quality = 1;

		if (type == 'png') {
			var src = canvas.toDataURL('image/png');
		}
		else {
			var src = canvas.toDataURL('image/jpeg', quality);
		}

		if (callback) callback(src);
	}//end func

	//----------------------------------------页面监测代码----------------------------------------
	function monitor_handler() {
		imonitor.add({ obj: $("#codeBtn"), action: 'touchstart', category: 'default', label: '发送验证码' });
		imonitor.add({ obj: $("#startBtn"), action: 'touchstart', category: 'default', label: '即可开启' });
		imonitor.add({ obj: makeBox.find(".btn"), action: 'touchstart', category: 'default', label: '生成我的彩片' });
		imonitor.add({ obj: resultBox.find(".makeToy"), action: 'touchstart', category: 'default', label: '玩造潘神' });
		imonitor.add({ obj: resultBox.find(".showList"), action: 'touchstart', category: 'default', label: '查看我的潘神排名' });
		imonitor.add({ obj: choseBox.find(".submitbtn"), action: 'touchstart', category: 'default', label: '解锁榜单，我要做冠军' });
		imonitor.add({ obj: rankBox.find(".addEnergy"), action: 'touchstart', category: 'default', label: '能量增值快速通道' });
		imonitor.add({ obj: rankBox.find(".lottery"), action: 'touchstart', category: 'default', label: '抽取神秘福利' });
		imonitor.add({ obj: rankBox.find(".makeToy"), action: 'touchstart', category: 'default', label: '排行榜-玩造潘神' });
		imonitor.add({ obj: $(".ruleBtn"), action: 'touchstart', category: 'default', label: '实验室攻略' });
	}//end func
});//end ready
