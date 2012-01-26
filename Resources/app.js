var tabGroup = Titanium.UI.createTabGroup();

var mainWin = Titanium.UI.createWindow ({
	title: "Twitter",
	backgroundColor: "#fff",
	url: "tweets.js" 
});

var secondWin = Titanium.UI.createWindow ({
	title: "NewTweets",
	backgroundColor: "#fff", 
	url: "newTweets.js" 
});

var thirdWin = Titanium.UI.createWindow ({
	title: "testing",
	backgroundColor: "#fff", 
	url: "test.js" 
});

var mainTab = Titanium.UI.createTab ({
	title: "My Timeline",	
	window: mainWin 
});

var secondTab = Titanium.UI.createTab ({
	title: "New Tweet",
	window: secondWin
});

var thirdTab = Titanium.UI.createTab ({
	title: "Test",
	window: thirdWin
});

tabGroup.addTab(mainTab);
tabGroup.addTab(secondTab);
tabGroup.addTab(thirdTab);


tabGroup.open();