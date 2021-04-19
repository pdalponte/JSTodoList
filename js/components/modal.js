import Alert from './alert.js';

export default class Modal {

    constructor() {
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.completed = document.getElementById('modal-completed');
        this.saveBtn = document.getElementById('modal-btn');
        this.alert = new Alert('modal-alert');

        this.id = 0;
    }

    onClick(callback) {
        this.saveBtn.onclick = () => {
            if ((this.title.value === '') || (this.description.value === '')) {
                this.alert.show('Title and description are required.');
                return;
            }
            
            this.alert.hide();
            $('#modal').modal('toggle');

            callback(this.id, {
                title: this.title.value,
                description: this.description.value,
                completed: this.completed.checked,
            });
        }
    }

    setValues(todo) {
        this.id = todo.id;
        this.title.value = todo.title;
        this.description.value = todo.description;
        this.completed.checked = todo.completed;
    }

}