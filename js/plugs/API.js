var API = new importAPI();

function importAPI () {
	var _self = this;

	var requestDomain = "https://acuvue.beats-digital.com/ac/";
	var loadBox=$('aside.loadBox');

	function _Ajax(opts){
	    var type = opts.type || "POST";
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
            data:data,
            onSuccess:onSuccess
        });
	}//end func
    
}//end import