import AppsterController from '../appster/AppsterController.js'
import { GoLogoLoGUIId, GoLogoLoText, GoLogoLoCallback, GoLogoLoHTML } from './GoLogoLoConstants.js';
import { AppsterHTML } from '../appster/AppsterConstants.js';

export default class GoLogoLoController
    extends AppsterController {
    constructor() {
        super();
    }

    registerAppsterEventHandlers() {

        // Edit Text Button.
        super.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, AppsterHTML.CLICK, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_TEXT_TEXT]);
        // Edit Text Size.
        super.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_TEXT_SIZE]);
        // Edit Text Color.
        super.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_TEXT_COLOR]);
        // Edit Background Color
        super.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_BACKGROUND_COLOR]);
        // Edit Border Color
        super.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_BORDER_COLOR]);
        // Edit Border Radius
        super.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_BORDER_RADIUS]);
        // Edit Border Thickness
        super.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_BORDER_THICKNESS]);
        // Edit Padding
        super.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_PADDING]);
        // Edit Margin
        super.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER, GoLogoLoHTML.INPUT, this[GoLogoLoCallback.GOLOGOLO_PROCESS_EDIT_MARGIN]);

        // Calls super method that registeres appster specific events.
        super.registerAppsterEventHandlers();
    }



    processEditText = () => {
        this.model.updateText();
    }

    // This callBack is for when the client uses the slider for font text.
    processEditTextSize = () => {
        this.model.updateTextSize(document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER).value);
    }

    // This callBack is for when the client uses the Color picker for text.
    processEditTextColor = () => {
        this.model.updateTextColor(document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER).value);
    }

    // This callBack is for when the client uses the color picker for Background.
    processEditBackgroundColor = () => {
        this.model.updateBackgroundColor(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER).value);
    }

    // This callBack is for when the client uses the color picker for the Border.
    processEditBorderColor = () => {
        this.model.updateBorderColor(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER).value);
    }

    // This callBack is for when the client uses the slider for border Radius.
    processEditBorderRadius = () => {
        this.model.updateBorderRadius(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER).value);
    }

    // This callBack is for when the lcient uses the slider for border Thickness.
    processEditBorderThickness = () => {
        this.model.updateBorderThickness(document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER).value);
    }

    // This callBack is for when the client uses the slider for Padding.
    processEditPadding = () => {
        this.model.updatePadding(document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER).value);
    }

    // This callBack is for when the client uses the slider for Margin.
    processEditMargin = () => {
        console.log("margin");
        this.model.updateMargin(document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER).value);
    }


}