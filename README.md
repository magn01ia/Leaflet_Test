# Leaflet_Test
主にLeafletの機能テストに使用しています。  
デモ→https://magn01ia.github.io/Leaflet_Test/  

## 使用上の注意  
避難施設ポイントデータはgeojsonを外部ファイルとして読み込んでいるのでローカルサーバーまたはホスティングして実行してください。  
背景地図では国土地理院の航空写真・衛星写真、明治期の低湿地、治水地形分類図タイルを使用しています、地図として印刷・発行する場合は測量法による申請が必要となりますのでご注意ください。  
**国土地理院コンテンツ利用規約**  
https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html  

避難施設ポイントデータは国土数値情報ダウンロードサービスから必要部分のみ抽出し作成しています。  
データを改変、利用する場合は国土数値情報ダウンロードサービスコンテンツ利用規約をご確認ください。  
**国土数値情報ダウンロードサービスコンテンツ利用規約**    
https://nlftp.mlit.go.jp/ksj/other/agreement.html

洪水浸水想定区域はハザードマップポータルサイトのタイルを利用しています。  
**ハザードマップポータルサイト**  
https://disaportal.gsi.go.jp/hazardmap/copyright/opendata.html

タイルレイヤーの透過機能はLeaflet.Control.Opacityプラグインを使用しています。  
**Leaflet.Control.Opacity**  
https://github.com/dayjournal/Leaflet.Control.Opacity  

## 参考文献・出典  
Leaflet  
https://leafletjs.com  
地理院タイル一覧(国土地理院)  
https://maps.gsi.go.jp/development/ichiran.html  
国土数値情報ダウンロードサービス・避難施設(国土交通省)    
https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-N03-v3_0.html  
ハザードマップポータルサイト  
https://disaportal.gsi.go.jp/index.html  
Leaflet.Control.Opacity  
https://github.com/dayjournal/Leaflet.Control.Opacity  

## ライセンス  
MIT
Copyright (c) 2021 Magn01ia


