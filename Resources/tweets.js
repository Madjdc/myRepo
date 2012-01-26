
var win = Titanium.UI.currentWindow;

function loadTweets()
{
	var rowData = [];
	var loader = Titanium.Network.createHTTPClient();
	loader.open("GET","http://api.twitter.com/1/statuses/user_timeline.json?screen_name=madjdc");
	loader.onload = function() 
	{
		var tweets = eval('('+this.responseText+')');
		for (var i = 0; i < tweets.length; i++)
		{
			var tweet = tweets[i].text;
			var user = tweets[i].user.screen_name;
			var avatar = tweets[i].user.profile_image_url;
			
			var row = Titanium.UI.createTableViewRow({height:'auto'});

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
			row.className = "item"+i;			
			rowData[i] = row;
		}
		
		var tableView = Titanium.UI.createTableView({data:rowData});
		
		win.add(tableView);
	};
	
	loader.send();
}
loadTweets();