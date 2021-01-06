const txt_input_nom = document.querySelector('.js-txt-input');
const btn_input = document.querySelector('.js-btn-input');


class Task {
    constructor(nom, date) {
        this.date = new Date().toLocaleString()
        this.nom = nom
    }
}


$(btn_input).click(function(e) {
    if (txt_input_nom.value != "") {
        let add_task = new Task()
        add_task.nom = txt_input_nom.value
    }
});