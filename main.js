canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
Spikewidth=100;
Spikeheight=100;
backgroundimage="canvas.jpg";
Spikeimage="Spike.png";
Spikex=10;
Spikey=10;
function add() {
    backgroundImgTag=new Image();
    backgroundImgTag.onload=uploadBackground;
    backgroundImgTag.src=backgroundimage;

    SpikeImgTag=new Image();
    SpikeImgTag.onload=uploadSpike;
    SpikeImgTag.src=Spikeimage;
}
function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}
function uploadSpike() {
    ctx.drawImage(SpikeImgTag, Spikex, Spikey, Spikewidth, Spikeheight);
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        up();
        console.log("cima");
    }
    if(keyPressed=='40')
    {
        down();
        console.log("baixo");
    }
    if(keyPressed=='37')
    {
        left();
        console.log("esquerda");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("direita");
    }
}
function up()
{
    if(Spikey >=0)
    {
        Spikey=Spikey-10;
        console.log("Quando a seta para cima é pressionada, x="+Spikex+"|y="+Spikex);
        uploadBackground();
        uploadSpike();
    }
}
function down()
{
    if(Spikey <=300)
    {
        Spikey=Spikey+10;
        console.log("Quando a seta para baixo é pressionada, x="+Spikex+"|y="+Spikey);
        uploadBackground();
        uploadSpike();
    }
}
function left()
{
    if(Spikex >=0)
    {
        Spikex=Spikex-10;
        console.log("Quando a seta para esquerda é pressionada, x="+Spikex+"|y="+Spikey);
        uploadBackground();
        uploadSpike();
    }
}
function right()
{
    if(Spikex <=700)
    {
        Spikex=Spikex+10;
        console.log("Quando a seta para direita é pressionada, x="+Spikex+"|y="+Spikey);
        uploadBackground();
        uploadSpike();
    }
}