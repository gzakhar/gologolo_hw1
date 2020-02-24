import AppsterModel from '../appster/AppsterModel.js'
import GoLogoLoLogo from './GoLogoLoLogo.js'
import { AppsterGUIId } from '../appster/AppsterConstants.js';
import { GoLogoLoGUIClass, GoLogoLoGUIId } from './GoLogoLoConstants.js';

export default class GoLogoLoModel extends AppsterModel {
    constructor() {
        super();
        this.currentWork = null;
    }

    createNewWork(workName) {
        let newRandomText = new GoLogoLoText(workName);
        return newRandomText;
    }

    loadWorkData(workToLoad) {
        console.log("load " + workToLoad.getName());
    }

    makeColor(colorData) {
        return "rgb(" + colorData.red + ", " + colorData.green + ", " + colorData.blue + ")";
    }

    buildAppWork(workArray, name) {
        let appWork = new GoLogoLoLogo();

        // FIND THE WORK DATA FROM THE JSON OBJECT
        for (let i = 0; i < workArray.length; i++) {
            let jsonWork = workArray[i];
            if (jsonWork.name === name) {
                // WE'VE FOUND IT, NOW LOAD ALL OF ITS DATA
                appWork.setName(name);
                appWork.setText(jsonWork.text);
                appWork.setFontSize(jsonWork.font_size);
                appWork.setTextColor(jsonWork.text_color);
                appWork.setBackgroundColor(jsonWork.background_color);
                appWork.setBorderColor(jsonWork.border_color);
                appWork.setBorderRadius(jsonWork.border_radius);
                appWork.setBorderThickness(jsonWork.border_thickness);
                appWork.setPadding(jsonWork.padding);
                appWork.setMargin(jsonWork.margin);
            }
        }

        return appWork;
    }

    updateText() {
        this.view.show(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);
    }

    // This function edits the Text Size.
    updateTextSize(size) {
        this.currentWork.setFontSize(size);
        this.view.loadWorkStyle(this.currentWork);
    }

    // This function edits the Text Color.
    updateTextColor(color) {
        this.currentWork.setTextColor(color);
        this.view.loadWorkStyle(this.currentWork);
    }

    // This function edits the Background Color.
    updateBackgroundColor(color) {
        this.currentWork.setBackgroundColor(color);
        this.view.loadWorkStyle(this.currentWork);
    }

    // This function edits the Border Color.
    updateBorderColor(color) {
        this.currentWork.setBorderColor(color);
        this.view.loadWorkStyle(this.currentWork);
    }

    // This function edits the Border Radius.
    updateBorderRadius(radius) {
        this.currentWork.setBorderRadius(radius);
        this.view.loadWorkStyle(this.currentWork);
    }

    // This function edits the Thickness.
    updateBorderThickness(thickness) {
        this.currentWork.setBorderThickness(thickness);
        this.view.loadWorkStyle(this.currentWork);
    }

    // This function edits the Padding.
    updatePadding(padding) {
        this.currentWork.setPadding(padding);
        this.view.loadWorkStyle(this.currentWork);
    }

    // This function edits the Margin.
    updateMargin(margin) {
        this.currentWork.setMargin(margin);
        this.view.loadWorkStyle(this.currentWork);
    }

    // This function is to update the text in the work.
    confirmUpdateText() {

        // Hide text input.
        this.view.hide(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);

        // Set text of the work to new text.
        this.currentWork.setText(document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL_TEXTFIELD).value);

        // Load workStyle into the view.
        this.view.loadWorkStyle(this.currentWork);
    }
    // This function is to cancel the update of the text in work.
    cancelUpdateText() {

        // Hide text input.
        this.view.hide(GoLogoLoGUIId.GOLOGOLO_TEXT_INPUT_MODAL);
    }
}