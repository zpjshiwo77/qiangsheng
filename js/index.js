$(document).ready(function () {

	//-----------------------------------------定义和初始化变量----------------------------------------
	var loadBox = $('aside.loadBox');
	var articleBox = $('article');
	var windowScale = window.innerWidth / 750;
	var loadingBox = $("#loadingBox");
	var loadPer = $("#loadingBox .bar");

	//----------------------------------------页面初始化----------------------------------------
	icom.init(init);//初始化
	icom.screenScrollUnable();//如果是一屏高度项目且在ios下，阻止屏幕默认滑动行为

	function init() {
		requestAnimationFrame(function () {
			if (os.screenProp < 0.54) articleBox.addClass("screen189");
			if (os.screenProp > 0.64) articleBox.addClass("screen159");
			load_handler();
			bubbleInit($("#loadingBox .left"),6);
			setTimeout(function () {
				bubbleInit($("#loadingBox .right"),5);
			}, 1000)
			setTimeout(function () {
				bubbleInit($("#loadingBox .bottom"), 3);
			}, 1500);
		});
		wxUser.init();
	}//edn func

	//----------------------------------------加载页面图片----------------------------------------
	function load_handler() {
		var loader = new PxLoader();
		loader.addImage('images/common/turn_phone.png');

		loader.addCompletionListener(function () {
			icom.fadeIn(articleBox);
			// load_more();
			pageInit();
			loader = null;
		});
		loader.start();
	}//end func

	function load_more() {
		var loader = new PxLoader();
		loader.addImage('images/common/turn_phone.png');

		// 实际加载进度
		loader.addProgressListener(function (e) {
			var per = Math.round(e.completedCount / e.totalCount * 50);
			loadPer.css({ "x": per * 0.97 + '%' });
		});

		loader.addCompletionListener(function () {
			icom.fadeIn(articleBox);
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


	/**
	 * 页面初始化
	 */
	function pageInit() {
		eventInit();
		DevelopTest();
		monitor_handler();
	}//end func

	/**
	 * 开发测试使用
	 */
	function DevelopTest() {
		// loadingBox.hide();
		// QABox.show();

		ruleScroll.refresh();
		penelScroll.refresh();
		rankScroll.refresh();
		penelInit();
		// lotteryAnime();
		liquidAnime();
	}

	/**
	 * 事件初始化
	 */
	function eventInit() {
		$(".limitBtn").on("touchend", limitClick);
	}

	/**
	 * 面板初始化
	 */
	function penelInit(){
		var box = choseBox.find(".btns");

		for (var i = 0; i < 4; i++) {
			var num = i == 0 ? 3 : 5;
			var block = $("<div>",{"class":"block"});
			var cont = "";
			for (var j = 0; j < num; j++) {
				cont += '<div class="btn" data-val="'+(j+1)+'"></div>'
			}
			block.append(cont);
			box.append(block);
		}
	}

	/**
	 * 液体动画
	 */
	function liquidAnime(callback){
		var color1 = makeBox.find(".color1");
		var color2 = makeBox.find(".color2");
		var color3 = makeBox.find(".color3");

		color1.transition({x:"1.3rem",y:0},1500);
		color2.transition({x:"-1rem",y:0},1500);
		color3.transition({x:"0.5rem",y:"-0.3rem"},1500,function(){
			if(callback) callback();
		});
	}

	/**
	 * 抽奖的动画
	 */
	function lotteryAnime(callback){
		var box = lotteryBox.find(".bubbleBox");
		for (var i = 0; i < 12; i++) {
			if(i < 4){
				makebubble(box,{
					width:imath.randomRange(15,28)/10,
					left:imath.randomRange(2,4),
					delay:imath.randomRange(0,2000),
					time:imath.randomRange(3000,4000)
				});
			}
			else{
				makebubble(box,{
					width:imath.randomRange(2,10)/10,
					left:imath.randomRange(3,6),
					delay:imath.randomRange(0,1000),
					time:imath.randomRange(4000,5000)
				});
			}
		}

		makebubble(box,{width:3,left:0.5,delay:0,time:6500},callback);
	}

	/**
	 * 生成泡泡
	 */
	function makebubble(box,opts,callback){
		var bubble = $("<img>", {
			"class": "bubble",
			"src": "images/lotteryBox/b.png"
		});
		box.append(bubble);
		bubble.css({
			"width": opts.width+"rem",
			"left": opts.left+"rem"
		});
		bubble.transition({y:"-14rem",delay:opts.delay},opts.time,function(){
			if(callback) callback();
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

	//----------------------------------------页面监测代码----------------------------------------
	function monitor_handler() {
		//		imonitor.add({obj:$('a.btnTest'),action:'touchstart',category:'default',label:'测试按钮'});
	}//end func
});//end ready
