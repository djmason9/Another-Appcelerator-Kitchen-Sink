function showMessage() {
    alert("Here is the message!");
}

function showAlertDialog() {
    $.alertDialog.show();
}

function alertDialogClicked(e) {
    var decision = "";

    switch(e.index) {
    case 0:
        decision = "confirming.";
        break;
    case 1:
        decision = "clapping.";
        break;
    case 2:
        decision = "canceling.";
        break;
    }

    // Titanium.API.info("Value:", decision);
    $.dialogDecision.text = "You decided you are " + decision;
}

function showOptionDialog(e) {
    $.dialog.show();
}

function optionDialogClicked(e) {
    $.dialogDecision.text = "Selected option at index: " + e.index;
}