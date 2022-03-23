
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 500;

block_image_width = 30;
block_image_height = 30;

var player_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(120);
        player_object.scaleToHeight(240);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

        });
    }

//controls
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '32')
    {
        jump()
        console.log("jump");
    }
    if(keyPressed == '65')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '68')
    {
        right();
        console.log("right");
    }
}

function jump()
{
    if(player_y >=0)
    {
        player_y = player_y - 90;
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >0)
    {
        player_x = player_x - 30;
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=1600)
    {
        player_x = player_x + 30;
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    player_y + 80;
}