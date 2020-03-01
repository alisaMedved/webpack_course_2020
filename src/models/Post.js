export default class Post {
    constructor(title, img) {
        this.title = title;
        this.date = new Date();
        this.img = img;
    }
    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            // что здесь выведет? хеш-название картинки в dist лежит - картинки компилятся отдельно и имеют вес похоже неплохой
            img: this.img,
        })
    }
    get upperCaseTitle() {
        return this.title.toUpperCase();
    }
}
