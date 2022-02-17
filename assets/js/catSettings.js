var colors = Object.values(allColors())

var defaultDNA = {
    //Colors
    "bodycolor" : 10,
    "shoesColor" : 9, // <-- Added this line!
    "smallEarColor" : 12, // <-- Added this line!
    "pupilsColor" : 16, // <-- Added this line!
    //Attributes
    "eyesShape" : 1,
    "animation" :  1
    }

// when page load
$( document ).ready(function() {
    $('#dnabody').html(defaultDNA.bodycolor);
    $('#dnashoes').html(defaultDNA.shoesColor); // <-- Added this line!
    $('#dnasmallear').html(defaultDNA.smallEarColor); // <-- Added this line!
    $('#dnapupils').html(defaultDNA.pupilsColor); // <-- Added this line!
    $('#dnaeyesshape').html(defaultDNA.eyesShape)
    $('#dnaanimation').html(defaultDNA.animation) // <--double check
    renderCat(defaultDNA)
});

/* Start of renderCat() function */

function renderCat(dna) {
    bodyColor(colors[dna.bodycolor],dna.bodycolor)
    $('#bodycolor').val(dna.bodycolor)
    shoesColor(colors[dna.shoesColor],dna.shoesColor)
    $('#shoesPairColor').val(dna.shoesColor)
    smallEarColor(colors[dna.smallEarColor],dna.smallEarColor)
    $('#smallEarColor').val(dna.smallEarColor)
    pupilsColor(colors[dna.pupilsColor],dna.pupilsColor)
    $('#pupilsColor').val(dna.pupilsColor)
    eyeVariation(dna.eyesShape)
    $('#eyesShape').val(dna.eyesShape)
    animationVariation(dna.animation)
    $('#animation').val(dna.animation)
}

// Changing cat colors
$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val();
    bodyColor(colors[colorVal],colorVal);
})

// Changing cat color shoes <-- Added these down lines!
$('#shoesPairColor').change(()=>{
    var colorVal = $('#shoesPairColor').val();
    shoesColor(colors[colorVal],colorVal);
})

$('#smallEarColor').change(()=>{
    var colorVal = $('#smallEarColor').val();
    smallEarColor(colors[colorVal],colorVal);
})

$('#pupilsColor').change(()=>{
    var colorVal = $('#pupilsColor').val();
    pupilsColor(colors[colorVal],colorVal);
})

$('#eyesShape').change(()=>{
    var shape = parseInt($('#eyesShape').val()); // between 1 and 3
    eyeVariation(shape);
})

$('#animation').change(()=>{
    var animationVal = parseInt($('#animation').val()); // between 1 and 3
    animationVariation(animationVal);
})

/* End of renderCat() function */

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

var getRand_1 = (function() {
    
    var nums = range(10, 98);
    var current = [];

    function rand(n) {
        rnd = (Math.random() * n)|0;
        return rnd;
    }
    return function() {
      if (!current.length) current = nums.slice();
      return current.splice(rand(current.length), 1);
    }
}());

$(".random").click(()=>{
    var randomDNA = {
      "bodycolor" : parseInt(getRand_1()),
      "shoesColor" : parseInt(getRand_1()),
      "smallEarColor" : parseInt(getRand_1()),
      "pupilsColor" : parseInt(getRand_1()),
      "eyesShape" : Math.floor(Math.random() * 4) + 1,
      "animation" : Math.floor(Math.random() * 5) + 1,
    }
    renderCat(randomDNA)
})