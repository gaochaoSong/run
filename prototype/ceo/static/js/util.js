var util={
	shadow:{
		show:function(){
debugger;			
			if(~$("#shadowDiv").length){
				$("<div id='shadowDiv' class='shadowDiv'></div>").appendTo('body');
			}
			$("#shadowDiv").show();
		},
		hide:function(){
			$("#shadowDiv").hide();
		},
		remove:function(){
			$("#shadowDiv").remove();
		}
	},
	addCssTxt:function(styleTxt) {
		var style = document.createElement('style');
		style.rel = 'stylesheet';
		style.type = 'text/css';
		style.innerText = styleTxt;
		document.getElementsByTagName('head')[0].appendChild(style);
	}
}
