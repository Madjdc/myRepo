
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
				color:'#ffffff',
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
				color:'#ffffff',
				font:{fontSize:14}
			});
			post_view.add(tweet_lbl);
			
			row.add(post_view);			
			row.className = 'myTweets';			
			rowData[i] = row;
		}
		
		var tableView = Titanium.UI.createTableView({
				data:rowData,
				left:10,
				width:300,
				top:70,
				borderColor:'#224466',
				borderWidth:3,
				borderRadius:3.0,  
				height:320
			});
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
	
	loader.send();
}
loadTweets();

var title_lbl = Titanium.UI.createLabel({
				text:"Your Timeline",
				top:20,
				textAlign:'center',
				color:'#444444',
				font:{fontFamily:'Trebuchet MS',fontSize:20,fontWeight:'bold'}
			});
			
win.add(title_lbl);

var detail_lbl = Titanium.UI.createLabel({
				text:"Click item to get full Tweet!",
				top:390,
				textAlign:'center',
				color:'#444444',
				font:{fontFamily:'Trebuchet MS',fontSize:12,fontWeight:'bold'}
			});
			
win.add(detail_lbl);

var backBtn = Titanium.UI.createButton({
	title:'Back',
	top:420,
	width:160,
	height:40
});
backBtn.addEventListener('click', function(e){
	var mainWin = Titanium.UI.createWindow({
 		title:'Menu',
 		backgroundColor:'#559abb',
 		url:'menu.js'
	});

	mainWin.open();
	win.close();
});

win.add(backBtn);



