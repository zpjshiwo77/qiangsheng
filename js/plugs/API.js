var API = new importAPI();

function importAPI () {
	var _self = this;

	var requestDomain = "https://bubblepop.beats-digital.com/ac/";
	var loadBox=$('aside.loadBox');

	function _Ajax(opts){
	    var type = opts.type || "GET";
	    $.ajax({
	        type: type,
	        url: requestDomain + opts.API,
	        dataType: 'json',
	        async: true,
	        data: opts.data,
	        success: function(data){
                if (opts.onSuccess) opts.onSuccess(data);
	        },
	        error: function(){
	        	icom.alert("网络可能存在问题，请刷新试试！");
	        }
	    });
	}

	/**
     * 登陆
     * @param {*} onSuccess 回调函数
     */
	_self.Login = function(onSuccess){
		_Ajax({
            API:"tmallAuth",
            data:{},
            onSuccess:onSuccess
        });
	}//end func

	/**
     * 图片转base64
     * @param {*} onSuccess 回调函数
     */
	_self.imgtrance = function(data,onSuccess){
		_Ajax({
			API:"imgtrance",
			type:"POST",
            data:data,
            onSuccess:onSuccess
        });
	}//end func

	/**
     * 发送验证码
     * @param {*} onSuccess 回调函数
     */
	_self.sendCode = function(data,onSuccess){
		_Ajax({
            API:"tmallgetcode",
            data:data,
            onSuccess:onSuccess
        });
	}//end func

	/**
     * 添加手机号码
     * @param {*} onSuccess 回调函数
     */
	_self.addPhone = function(data,onSuccess){
		_Ajax({
            API:"tmalllogin",
            data:data,
            onSuccess:onSuccess
        });
	}//end func

	/**
     * 添加用户的属性
     * @param {*} onSuccess 回调函数
     */
	_self.addUserAttr = function(data,onSuccess){
		_Ajax({
            API:"tamlladdbubble",
            data:data,
            onSuccess:onSuccess
        });
	}//end func
	
    /**
     * 添加潘神
     * @param {*} onSuccess 回调函数
     */
	_self.addUserToy = function(data,onSuccess){
		_Ajax({
            API:"tmalladdproduct",
            data:data,
            onSuccess:onSuccess
        });
	}//end func

	/**
     * 添加用户渠道
     * @param {*} onSuccess 回调函数
     */
	_self.addUserSource = function(data,onSuccess){
		_Ajax({
            API:"tmallusersource",
            data:data,
            onSuccess:onSuccess
        });
	}//end func

	/**
     * 通过潘神查询用户信息
     * @param {*} onSuccess 回调函数
     */
	_self.getUserInfoFromToy = function(data,onSuccess){
		_Ajax({
            API:"tmallproductdesc",
            data:data,
            onSuccess:onSuccess
        });
	}//end func

	/**
     * 通过潘神id添加能量
     * @param {*} onSuccess 回调函数
     */
	_self.addEnergy = function(data,onSuccess){
		_Ajax({
            API:"addenergy",
            data:data,
            onSuccess:onSuccess
        });
	}//end func

	/**
     * 通过潘神id添加能量输入兑换码
     * @param {*} onSuccess 回调函数
     */
	_self.addEnergyCode = function(data,onSuccess){
		_Ajax({
            API:"codeenergy",
            data:data,
            onSuccess:onSuccess
        });
	}//end func

	/**
     * 抽奖
     * @param {*} onSuccess 回调函数
     */
	_self.lottery = function(onSuccess){
		_Ajax({
            API:"tmalldrawgift",
            data:{},
            onSuccess:onSuccess
        });
	}//end func

	/**
     * 查询排行榜Uid
     * @param {*} onSuccess 回调函数
     */
	_self.getRankListFromUid = function(data,onSuccess){
		_Ajax({
            API:"tmallShareThree",
            data:data,
            onSuccess:onSuccess
        });
	}//end func

	/**
     * 查询排行榜潘神名字
     * @param {*} onSuccess 回调函数
     */
	_self.getRankListFromName = function(data,onSuccess){
		_Ajax({
            API:"tmallShareRank",
            data:data,
            onSuccess:onSuccess
        });
	}//end func

	/**
     * 查询排行榜潘神名字
     * @param {*} onSuccess 回调函数
     */
	_self.getRankList = function(data,onSuccess){
		_Ajax({
            API:"tmallShareRank",
            data:data,
            onSuccess:onSuccess
        });
	}//end func

	/**
     * 天猫领券
     * @param {*} onSuccess 回调函数
     */
	_self.tmallgetcoupon = function(onSuccess){
		_Ajax({
            API:"tmallgetcoupon",
            data:{},
            onSuccess:onSuccess
        });
	}//end func

}//end import