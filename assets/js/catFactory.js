//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function bodyColor(color, code) {
    $('.body, .head').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+ code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

// COPY
//This function code needs to modified so that it works with Your cat code.
function shoesColor(color, code) {
    $('.shoe').css('background', '#' + color)  //This changes the color of the cat
    $('#shoescode').html('code: '+ code) //This updates text of the badge next to the slider
    $('#dnashoes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

// COPY
//This function code needs to modified so that it works with Your cat code.
function smallEarColor(color, code) {
    $('.ear_small').css('background', '#' + color)  //This changes the color of the cat
    $('#smallearcode').html('code: '+ code) //This updates text of the badge next to the slider
    $('#dnasmallear').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

// COPY
//This function code needs to modified so that it works with Your cat code.
function pupilsColor(color, code) {
    $('.pupils').css('background', '#' + color)  //This changes the color of the cat
    $('#pupilscode').html('code: '+ code) //This updates text of the badge next to the slider
    $('#dnapupils').html(code) //This updates the body color part of the DNA that is displayed below the cat
}


//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnaeyesshape').html(num)

    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic: '+ num) // Set the badge to "Basic"
            break
        case 2:
            normalEyes() // Reset
            $('#eyeName').html('Chill: '+ num) // Set the badge to "Chill"
            eyesType1() // Set border to change the shape of the eye
            break
        case 3:
            normalEyes() // Reset
            $('#eyeName').html('Up: '+ num) // Set the badge to "Chill"
            eyesType2() // Set border to change the shape of the eye
            break
        case 4:
            normalEyes() // Reset
            $('#eyeName').html('Center: '+ num) // Set the badge to "Chill"
            eyesType3() // Set border to change the shape of the eye
            break
        default:
            normalEyes() // Reset
            break
    }
}

function normalEyes() {
    $('.head').find('.pupils').css('border', 'none')
}

function eyesType1() {
    $('.head').find('.pupils').css('border-top', '5px solid')
}

function eyesType2() {
    $('.head').find('.pupils').css('border-bottom', '5px solid')
}

function eyesType3() {
    $('.head').find('.pupils').css('border-right', '6px solid')
    $('.head').find('.pupils').css('border-left', '6px solid')
}

// Animation Function

function animationVariation(num) {

    $('#dnaanimation').html(num);

    switch (num) {
        case 1:
            $('#animationName').html('code: '+ num) // <--Added Line
            animationType1();
            break;
        case 2:
            $('#animationName').html('code: '+ num) // <--Added Line
            animationType2();
            break;

        case 3:
            $('#animationName').html('code: '+ num) // <--Added Line
            animationType3();
            break;

        case 4:
            $('#animationName').html('code: '+ num) // <--Added Line
            animationType4();
            break;

        case 5:
            $('#animationName').html('code: '+ num) // <--Added Line
            animationType5();
            break;
            
    }
}

function animationType1() {
    resetAnimation();
    $('#head').addClass("movingHead");
}

function animationType2() {
    resetAnimation();
    $('#shoe').addClass("movingShoe");
}

function animationType3() {
    resetAnimation();
    $('#ear_right').addClass("movingEarRight");
}

function animationType4() {
    resetAnimation();
    $('#ear_left').addClass("movingEarLeft");
}

function animationType5() {
    resetAnimation();
    $('#hand').addClass("movingHand");
}

function resetAnimation() {
    $('#hand').removeClass("movingHand");
    $('#ear_left').removeClass("movingEarLeft");
    $('#ear_right').removeClass("movingEarRight");
    $('#head').removeClass("movingHead");
    $('#shoe').removeClass("movingShoe");
}