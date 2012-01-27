var win = Titanium.UI.currentWindow;

var title_lbl = Titanium.UI.createLabel({
				text:"Did I tweet that already?",
				top:50,
				textAlign:'center',
				color:'#444444',
				font:{fontFamily:'Trebuchet MS',fontSize:20,fontWeight:'bold'}
			});

var tweetButton = Titanium.UI.createButton({
	title:'New Tweet!',
	top:90,
	height:40,
	width:160
});
tweetButton.addEventListener('click', function(e){
	var secondWin = Titanium.UI.createWindow ({
		title: "NewTweets",
		backgroundColor: "#fff", 
		url: "newTweets.js" 
	});
	secondWin.open();	
});

var checkButton = Titanium.UI.createButton({
	title:"Check my Timeline!",
	top:140,
	height:40,
	width:160
});
checkButton.addEventListener('click', function(e){
	var timelineWin = Titanium.UI.createWindow ({
		title: "Timeline",
		backgroundColor: "#fff",
		url: "tweets.js" 
	});	
	timelineWin.open();
		
});

win.add(title_lbl);
win.add(tweetButton);
win.add(checkButton);
