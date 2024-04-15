class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    
    moveToNextQuestion() {
        return this.currentQuestionIndex ++;
    }

    shuffleQuestions() {
        for (let i = 0; i < this.questions.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
        return this.questions;
    }

    checkAnswer(answer) {
        const question = this.getQuestion()

        if (answer === question.answer) {
            return this.correctAnswers ++;
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        } else if (this.currentQuestionIndex === this.questions.length) {
            return true;
        }
    }
}


