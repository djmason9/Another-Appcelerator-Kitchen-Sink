function stepperValueChanged(e) {
    $.state.setText('The stepper value changed to ' + e.value);
}

function sliderValueChanged(e) {
    $.state.setText('The slider value changed to ' + e.value.toFixed(2) + " of 1");
}

function switchValueChanged(e) {
    $.state.setText('The switch value changed to ' + e.value);
}