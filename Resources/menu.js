
var win = Titanium.UI.currentWindow;

Ti.include('birdhouse.js');

var BH = new BirdHouse({
	consumer_key:"i3DUIhfrty1jgtEmwxZsHA",
	consumer_secret:"RtbKeVytEQePSWMVozYBe7WPrz5NTb2lhaW3WCSN50c",
	callback_url:"http://www.madjdc.be"
});

function loadTweets()
{
	var rowData = [];
	BH.get_tweets(function(e){
		if(e==false){
			alert('Failed to retrieve tweets');
		} else {
			if (e.lenght>0){
				alert('jeej');				
			} else {
				alert('dang');
			}
		}
		
	});
	
	/* var loader = Titanium.Network.createHTTPClient();
	loader.open("GET","http://api.twitter.com/1/statuses/user_timeline.json?screen_name=madjdc");
	loader.onload = function() 
	{
		var tweets = eval('('+this.responseText+')');
		for (var i = 0; i < tweets.length; i++)
		{
			var tweet = tweets[i].text;
			var user = tweets[i].user.screen_name;
			var avatar = tweets[i].user.profile_image_url;
			
			var row = Titanium.UI.createTableViewRow({
				detail1:user,
				detail2:tweet,
				height:'auto'
				});

			var post_view = Titanium.UI.createView({
				height:'auto', 
				layout:'vertical',
				top:5,
				right:5,
				bottom:5,
				left:5
			});
			
			var av_image = Titanium.UI.createImageView({
				url:avatar, 
				top:0,
				left:0,
				height:48,
				width:48
			});
			post_view.add(av_image);
			
			var user_lbl = Titanium.UI.createLabel({
				text:user,
				left:54,
				width:120,
				top:-48,
				bottom:2,
				height:16,
				textAlign:'left',
				color:'#444444',
				font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'}
			});
			post_view.add(user_lbl);
			
			var tweet_lbl = Titanium.UI.createLabel({
				text:tweet,
				left:54,
				top:0,
				bottom:2,
				height:'auto',
				width:236,
				textAlign:'left',
				font:{fontSize:14}
			});
			post_view.add(tweet_lbl);
			
			row.add(post_view);			
			row.className = 'myTweets';			
			rowData[i] = row;
		}
		
		var tableView = Titanium.UI.createTableView({data:rowData});
		tableView.addEventListener('click', function(e){
			var messagebox = Titanium.UI.createAlertDialog({
				title:e.rowData.detail1,
				message:e.rowData.detail2,
				buttonNames: ['Back']
			});
			messagebox.show();
		});
		
		win.add(tableView);
	};
	
	loader.send();*/
}
loadTweets();