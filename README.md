<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>CSS - Menu</title>
<style type="text/css">
*{
	margin:0;
	padding:0;
	border:none;
}
ul#mainNav{
	text-align:center;
	list-style:none;
	width:1000px;
	margin:20px auto 0;
	position:relative;
	
	background: #a7cfdf; /* Old browsers */
	/* IE9 SVG, needs conditional override of 'filter' to 'none' */
	background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2E3Y2ZkZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyMzUzOGEiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
	background: -moz-linear-gradient(top, #a7cfdf 0%, #23538a 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#a7cfdf), color-stop(100%,#23538a)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, #a7cfdf 0%,#23538a 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top, #a7cfdf 0%,#23538a 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top, #a7cfdf 0%,#23538a 100%); /* IE10+ */
	background: linear-gradient(to bottom, #a7cfdf 0%,#23538a 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a7cfdf', endColorstr='#23538a',GradientType=0 ); /* IE6-8 */
}
ul#mainNav a:link,
ul#mainNav a:visited{
	font-family:"Times New Roman", Times, serif;
	letter-spacing:1px;
	text-decoration:none;
	color:#FFF;
	font-variant:small-caps;
}
ul#mainNav ul{
	list-style:none;
}
ul#mainNav>li{
	width:100px;
	height:30px;
	line-height:30px;
	text-align:center;
	display:inline-block;
	border-left:1px solid #333;
}
ul#mainNav>li:first-child{
	border-left:none;
}
ul#mainNav li ul{
	position:absolute;
	height:0;
	overflow:hidden;
	box-shadow:0 5px 10px #333;
	transition:all .5s ease;
	
	background: #f7fbfc; /* Old browsers */
	/* IE9 SVG, needs conditional override of 'filter' to 'none' */
	background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y3ZmJmYyIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjQwJSIgc3RvcC1jb2xvcj0iI2Q5ZWRmMiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNhZGQ5ZTQiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
	background: -moz-linear-gradient(top, #f7fbfc 0%, #d9edf2 40%, #add9e4 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f7fbfc), color-stop(40%,#d9edf2), color-stop(100%,#add9e4)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, #f7fbfc 0%,#d9edf2 40%,#add9e4 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top, #f7fbfc 0%,#d9edf2 40%,#add9e4 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top, #f7fbfc 0%,#d9edf2 40%,#add9e4 100%); /* IE10+ */
	background: linear-gradient(to bottom, #f7fbfc 0%,#d9edf2 40%,#add9e4 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f7fbfc', endColorstr='#add9e4',GradientType=0 ); /* IE6-8 */
}
ul#mainNav li:hover ul{
	height:92px;
}
ul#mainNav li ul a:link,
ul#mainNav li ul a:visited{
	color:#333;
	font-size:14px;
	font-variant:normal;
}
ul#mainNav li ul li{
	width:100px;
	height:30px;
	line-height:30px;
	text-align:center;
	border-top:1px solid #333;
}
ul#mainNav li ul li:first-child{
	border-top:none;
}
ul#mainNav li ul li:hover{
	background: #add9e4; /* Old browsers */
	/* IE9 SVG, needs conditional override of 'filter' to 'none' */
	background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2FkZDllNCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjYwJSIgc3RvcC1jb2xvcj0iI2Q5ZWRmMiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmN2ZiZmMiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
	background: -moz-linear-gradient(top, #add9e4 0%, #d9edf2 60%, #f7fbfc 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#add9e4), color-stop(60%,#d9edf2), color-stop(100%,#f7fbfc)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, #add9e4 0%,#d9edf2 60%,#f7fbfc 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top, #add9e4 0%,#d9edf2 60%,#f7fbfc 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(top, #add9e4 0%,#d9edf2 60%,#f7fbfc 100%); /* IE10+ */
	background: linear-gradient(to bottom, #add9e4 0%,#d9edf2 60%,#f7fbfc 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#add9e4', endColorstr='#f7fbfc',GradientType=0 ); /* IE6-8 */
}
/***************************/
#content{
	width:960px;
	margin:0 auto;
	box-shadow:0 5px 5px #333;
	padding:20px;
	background: #f2f9fe; /* Old browsers */
	/* IE9 SVG, needs conditional override of 'filter' to 'none' */
	background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZjJmOWZlIiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2Q2ZjBmZCIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPgo8L3N2Zz4=);
	background: -moz-linear-gradient(-45deg, #f2f9fe 0%, #d6f0fd 100%); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#f2f9fe), color-stop(100%,#d6f0fd)); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(-45deg, #f2f9fe 0%,#d6f0fd 100%); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(-45deg, #f2f9fe 0%,#d6f0fd 100%); /* Opera 11.10+ */
	background: -ms-linear-gradient(-45deg, #f2f9fe 0%,#d6f0fd 100%); /* IE10+ */
	background: linear-gradient(135deg, #f2f9fe 0%,#d6f0fd 100%); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f9fe', endColorstr='#d6f0fd',GradientType=1 ); /* IE6-8 fallback on horizontal gradient */
}
</style>
<!--[if gte IE 9]>
  <style type="text/css">
    .gradient {
       filter: none;
    }
  </style>
<![endif]-->
</head>

<body>
<ul id="mainNav">
	<li><a href="#">Home</a></li>
	<li><a href="#">About</a>
		<ul>
			<li><a href="#">About Us</a></li>
			<li><a href="#">FAQ</a></li>
			<li><a href="#">Support</a></li>
		</ul>
	</li>
	<li><a href="#">Gallery</a></li>
	<li><a href="#">Contact</a>
		<ul>
			<li><a href="#">Contact Form</a></li>
			<li><a href="#">Map Location</a></li>
		</ul>
	</li>
</ul>
<div id="content">
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis ligula lorem, consequat eget, tristique nec, auctor quis, purus. Vivamus ut sem. Fusce aliquam nunc vitae purus. Aenean viverra malesuada libero. Fusce ac quam. Donec neque. Nunc venenatis enim nec quam. Cras faucibus, justo vel accumsan aliquam, tellus dui fringilla quam, in condimentum augue lorem non tellus. Pellentesque id arcu non sem placerat iaculis. Curabitur posuere, pede vitae lacinia accumsan, enim nibh elementum orci, ut volutpat eros sapien nec sapien. Suspendisse neque arcu, ultrices commodo, pellentesque sit amet, ultricies ut, ipsum. Mauris et eros eget erat dapibus mollis. Mauris laoreet posuere odio. Nam ipsum ligula, ullamcorper eu, fringilla at, lacinia ut, augue. Nullam nunc.</p>
	<p>Sed et lectus in massa imperdiet tincidunt. Praesent neque tortor, sollicitudin non, euismod a, adipiscing a, est. Mauris diam metus, varius nec, faucibus at, faucibus sollicitudin, lectus. Nam posuere felis ac urna. Vestibulum tempor vestibulum urna. Nullam metus. Vivamus ac purus. Nullam interdum ullamcorper libero. Morbi vehicula imperdiet justo. Etiam mollis fringilla ante. Donec et dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Etiam mi libero, luctus nec, blandit ac, rutrum ac, lectus.</p>
	<p>Morbi consequat felis vitae enim. Nunc nec lacus. Vestibulum odio. Morbi egestas, urna et mollis bibendum, enim tellus posuere justo, eget elementum purus urna nec lacus. Nullam in nulla. Praesent ac lorem. Donec metus risus, accumsan ut, mollis non, porttitor eget, mi. Aliquam aliquet, tortor a elementum aliquam, erat odio sodales eros, suscipit blandit lectus dolor sit amet elit. In eros wisi, mollis vitae, tincidunt in, suscipit id, nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Phasellus ornare. Suspendisse potenti. Mauris convallis. Vestibulum nec mauris in augue porta mollis. Proin ut nunc. Mauris aliquam dui eget purus.</p>
</div>
</body>
</html>
