function CreateCanvasKonva(widthScreen, heightScreen)
{

	this.widthScreen = widthScreen;
	this.heightScreen = heightScreen;
	
	this.initKonva = function()
	{
		this.stage = new Konva.Stage({
        container: 'container',
        width: this.widthScreen,
        height: this.heightScreen
		});
		this.layer = new Konva.Layer();
		this.stage.add(this.layer);
		
	}
	
	this.initLayer = function(newFct)
	{
		this.iLayer = newFct;
		this.iLayer();
		
	}
	
	this.renderLayer = function(newFct)
	{
		
		var animateRenderLayer = new Konva.Animation(function(frame) {
			this.rLayer = newFct;
			this.getFPS = frame.frameRate;
			this.rLayer();
		}, this.layer);
		animateRenderLayer.start();
	}
	
	this.eventLayer = function(newFct)
	{
		this.eLayer = newFct;
		this.eLayer();
	}
	
	this.addToLayer = function(toAdd)
	{
		this.layer.add(toAdd);
	}
	
}
