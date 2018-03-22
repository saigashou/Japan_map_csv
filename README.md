# Japan_map_csv
CSV形式を日本地図に反映  
docs内のファイルで動きます。  
サンプルページ：https://saigashou.github.io/Japan_map_csv/

# 日本地図にCSV情報を自動取り込み #
参照：https://mndangler.net/2014/08/japan-map_jquery_plugin/

参照：https://sterfield.co.jp/designer/canvas%E3%81%A7%E6%97%A5%E6%9C%AC%E5%9C%B0%E5%9B%B3%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%97%E3%81%A6%E3%81%8F%E3%82%8C%E3%82%8Bjquery%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%AEjapanmap/

参照：https://blog.imo-tikuwa.com/draw-japanmap/

参照（CSV）：http://cly7796.net/wp/javascript/ajax-get-csv/

実験対象バージョン：HTML5、CSS3

# csv取得場所 #
サンプル：http://tips.recatnap.info/wiki/JQuery%E3%81%A7CSV%E3%82%92%E9%85%8D%E5%88%97%E3%81%AB%E5%A4%89%E6%8F%9B_%28$.csv%28%29%29　
よりお借りしました。

## 使い方注意 ##
文字コードはUTF-8で必ず保存すること。　
※日本語が文字化けします。


# Japan Map所得場所 #
Japan Map:https://takemaru-hirai.github.io/japan-map/
以下設定値は抜粋しています。

# 設定値 #

## width, height ##
地図の横幅と高さです。横幅だけ記入すれば高さは合わせてくれます。

## color ##
都道府県、または地方の背景色です。

## hoverColor ##
都道府県、または地方にマウスを乗せた時に変わる背景色です。

## backgroundColor ##
地図の背景色、いわゆる海の部分の色です。

## lineColor, lineWidth ##
地図の大外の枠の色と太さです。

## drawsBoxLine ##
都道府県の境目の線を引くかどうか、デフォルトでは引かれています。

## borderLineColor, borderLineWidth ##
都道府県の境目の線の色と太さです。

## showsPrefectureName, showsAreaName ##
都道府県、または地方名を地図上に表記するかどうか、デフォルトでは表記されます。

## font, fontSize, fontColor, fontShadowColor ##
都道府県、または地方の文字に関する装飾です。
字体、サイズ、色、影。

## prefectureNameType ##
都道府県表示の際に「東京都」「東京」「Tokyo」などの表記を選べます。
full = 東京都
short = 東京
english = Tokyo

## areaNameType ##
地方表示の際に「関東地方」「関東」などの表記を選べます。
full = 関東地方
short = 関東
英語表記にするには「areasObject」へ定義をする必要があるようです。

## movesIslands ##
沖縄を左上に配置するか、地図そのままで表記するかを選べます。
デフォルトではそのままの地図になっています。

## selection ##
都道府県ごとか、地方ごとかを選べます。「prefecture」か「area」を選択します。

## areas ##
上の「selection」パラメータで「area」を選んだ場合、ここでクラス名を決めて中身を個別に決めることができます。

## onSelect : function(data) , onHover : function(data) ##
クリック時にウィンドウが開くか、マウスを乗せた時に内容が表示されるか(デモ3)を変更できます。

# サンプルhtml #
以下の設定した場所に配置されます。

## id=text ##
この中に、地図の県名に沿った文字が表示されます。

## id=map ##
この中に、日本地図を表示します。
