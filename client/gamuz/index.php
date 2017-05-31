<!DOCTYPE html>
<html>
<head>
	<title>Index</title>
	
	<style>
		html, body
		{
			position:fixed;
		}
		body 
		{
			margin:0px;
		}
		
		textarea
		{
			width:100px;
			height:30px;
			position: absolute;
    		right: 4000px;
   			bottom: 400px;
   			visibility:visible;
   			resize:none;
   			border: none;
			overflow: hidden;
		}
		textarea:disabled
		{
			background-color:white;
		}
		textarea:focus
		{
			outline: none !important;

		}
		

	</style>
</head>
<body>

	<div id="container"></div>
	
	<textarea id="ideaTextArea" rows="15"></textarea>
	<script src="https://cdn.rawgit.com/konvajs/konva/1.2.1/konva.min.js"></script>
	<script src="../main.js"></script>
	<script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
	<script src="index.js"></script>
	
	

		
</body>
</html>
