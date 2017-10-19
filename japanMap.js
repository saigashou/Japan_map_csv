 $(function(){
 	//CSV
 		var csvfile = './meibo.csv';
 		
	//---------------------------------------------
	//	日本地図用
	//---------------------------------------------
            var areas = [
                {"code": 1 , "name":"北海道地方",         "color":"#ca93ea", "hoverColor":"#e0b1fb", "prefectures":[1]},
                {"code": 2 , "name":"東北地方",           "color":"#a7a5ea", "hoverColor":"#d6d4fd", "prefectures":[2,3,4,5,6,7]},
                {"code": 3 , "name":"関東地方",           "color":"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[8,9,10,11,12,13,14]},
                {"code": 4 , "name":"北陸・甲信越地方",   "color":"#52d49c", "hoverColor":"#93ecc5", "prefectures":[15,16,17,18,19,20]},
                {"code": 4 , "name":"東海地方",           "color":"#77e18e", "hoverColor":"#aff9bf", "prefectures":[21,22,23,24]},
                {"code": 6 , "name":"近畿地方",           "color":"#f2db7b", "hoverColor":"#f6e8ac", "prefectures":[25,26,27,28,29,30]},
                {"code": 7 , "name":"中国地方",           "color":"#f9ca6c", "hoverColor":"#ffe5b0", "prefectures":[31,32,33,34,35]},
                {"code": 8 , "name":"四国地方",           "color":"#fbad8b", "hoverColor":"#ffd7c5", "prefectures":[36,37,38,39]},
                {"code": 9 , "name":"九州地方",           "color":"#f7a6a6", "hoverColor":"#ffcece", "prefectures":[40,41,42,43,44,45,46]},
                {"code":10 , "name":"沖縄地方",           "color":"#ea89c4", "hoverColor":"#fdcae9", "prefectures":[47]}
            ];

 	var csvList;		//csv仮格納（配列）
 	var ninzu={};		//人数
 	var basho ={};		//場所
 	/*********************************************************
 		CSV読込
 	********************************************************/
	$.ajax({
		url: csvfile,
		success: function(data) {

			// csvを配列に格納
			csvList = $.csv()(data);

			for (var i = 1; i < csvList.length; i++) {
				//人数
				ninzu[ csvList[i][0] ] = csvList[i][1];
				//場所
				basho[ csvList[i][0] ] = csvList[i][2];
			};
		}
		
		
	});
 	
	/**************************************************
		画面サイズで地図の大きさを変更
	**************************************************/
		//画面サイズを取得
 		var w = $(window).width();
 		//地図サイズより小さくないか
   		var x = 500;
    	if (w <= x) {
    		var varX = 300;
    	}else{
    		var varX = 500;
    	}
 	
 	/**************************************************
 		地図表示
 	**************************************************/
            $("#map").japanMap(
                {
                    areas  : areas,
                    selection : "prefecture",		//「prefecture（県名）」か「area（地方）」
                    borderLineWidth: 0.25,			//都道府県の境目の線の太さ
                    drawsBoxLine : false,			//都道府県の境目の線を引くかどうか
                    movesIslands : true,			//沖縄を左上に配置するか、地図そのままで表記するか
                    showsAreaName : false,			//都道府県（または地域）の名が地図上に示すかどうか
                    width: varX,					//地図の横幅
                    font : "MS Mincho",				//字体
                    fontSize : 12,					//文字サイズ
                 //   fontColor : "areaColor",		//文字色
                //    fontShadowColor : "black",	//文字影色
                	//クリック時
                    onSelect:function(data){
                        alert(data.name);
                    },
                    //触れた時
                    onHover:function(data){
                        $("#text").html(data.name + "　A：" + ninzu[data.name]+"人"+ "　B：" + basho[data.name]+"施設");
                        $("#text").css("background", data.area.color);
                    }
                }
            );
        });
        
        
      