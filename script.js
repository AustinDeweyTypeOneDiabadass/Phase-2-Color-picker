window.onload = function () {
    initColorPicker();
};

function initColorPicker() {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    let colorPickers = document.getElementsByClassName("picker");
    setColorPickerEventListeners(colorBox, rgb);
}

function setColorPickerEventListeners(colorbox, rgb, pickerElements) {
    for (let i = 0; i < pickerElements.length; i++){
         pickerElements{i}.addEventListener('change', () => {
            console.log("Red value: ", rgb.red.value);
            let red = rgb.red.value;
            let green = rgb.green.value;
            let blue = rgb.blue.value;
            setBoxBGColor(colorBox, red, green, blue);
            setDisplayValues(red, green, blue)
        });
    }
}

function setBoxBGColor(colorBox, red, green, blue) {
   let rgbVal = [red, green, blue].join(',');
    colorBox.style.backroundColor = "rgb(" + rgbVal + ")";
}

function setDisplayValues(red, green, blue){
    let redval = document.getElementById("redval");
    let greenval = document.getElementById("greenval");
    let blueval = document.getElementById("blueval");

}
