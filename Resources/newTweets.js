var win = Titanium.UI.currentWindow;

Ti.include('birdhouse.js');

var BH = new BirdHouse({
	consumer_key:"i3DUIhfrty1jgtEmwxZsHA",
	consumer_secret:"RtbKeVytEQePSWMVozYBe7WPrz5NTb2lhaW3WCSN50c",
	callback_url:"http://www.madjdc.be"
});

BH.tweet();

var title_lbl = Titanium.UI.createLabel({
				text:"You done?",
				top:50,
				textAlign:'center',
				color:'#444444',
				font:{fontFamily:'Trebuchet MS',fontSize:20,fontWeight:'bold'}
			});

var anotherBtn = Titanium.UI.createButton({
	title:'No! Another tweet?',
	top:90,
	height:40,
	width:160
});
anotherBtn.addEventListener('click', function(e){
	BH.tweet();
});

var backBtn = Titanium.UI.createButton({
	title:'Yes! Back to menu',
	top:140,
	width:160,
	height:40
});
backBtn.addEventListener('click', function(e){
	var mainWin = Titanium.UI.createWindow({
 		title:'Menu',
 		backgroundColor:'#fff',
 		url:'menu.js'
	});

	mainWin.open();
	win.close();
});

win.add(title_lbl);
win.add(anotherBtn);
win.add(backBtn);
