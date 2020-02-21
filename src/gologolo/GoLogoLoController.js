import AppsterController from '../appster/AppsterController.js'
import { GoLogoLoGUIId, GoLogoLoText } from './GoLogoLoConstants.js';
import { AppsterHTML } from '../appster/AppsterConstants.js';

export default class GoLogoLoController
    extends AppsterController {
    constructor() {
        super();
    }

    registerRecentWorkEventHandler() {

        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, AppsterHTML.CLICK, this[GoLogoLoText.GOLOGOLO_EDIT_TEXT_TEXT]);


    }



    processEditText() {
        this.model.updateText();
    }
}