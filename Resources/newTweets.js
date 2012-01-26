var win = Titanium.UI.currentWindow;

Ti.include('birdhouse.js');

var BH = new BirdHouse({
	consumer_key:"i3DUIhfrty1jgtEmwxZsHA",
	consumer_secret:"RtbKeVytEQePSWMVozYBe7WPrz5NTb2lhaW3WCSN50c",
	callback_url:"http://www.madjdc.be"
});

var tweetButton = Titanium.UI.createButton({title:'New Tweet!', top:70, left:10, height:30, width:140});
tweetButton.addEventListener('click', function(e){
	BH.tweet();	
});

win.add(tweetButton);
