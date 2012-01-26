var tabGroup = Titanium.UI.createTabGroup();

var mainWin = Titanium.UI.createWindow ({
	title: "Twitter",
	backgroundColor: "#fff",
	url: "tweets.js" 
});

var secondWin = Titanium.UI.createWindow ({
	title: "Test",
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

tabGroup.addTab(mainTab);
tabGroup.addTab(secondTab);

tabGroup.open();