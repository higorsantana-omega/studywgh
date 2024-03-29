class EntityBase {
    #name
    #age
    #gender
    constructor({ name, age, gender }) {
        this.#name = name
        this.#age = age
        this.#gender = gender
    }

    get name() {
        const preffix = this.#gender === "male" ? "Mr." : "Ms."
        return `${preffix} ${this.#name}`
    }

    get birthDay() {
        if (!this.#age) {
            throw new Error('mais')
        }

        return new Date().getFullYear - this.#age
    }
}

module.exports = EntityBase