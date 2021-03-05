<template>
  <div class="container-exercise-app">
    <div class="container-exercise">
      <div class="header-exercise">
        <h1>Exercise 1</h1>
      </div>
      <div class="step-progress" :style="{ width: progress + '%' }"></div>
      <div
        v-for="(question, index) in questions.slice(a, b)"
        v-show="quiz"
        :key="index"
        class="box"
      >
        <div class="box-question">
          <h2>Question {{ b }}/{{ questions.length }}</h2>
          <p>{{ question.question }}</p>
        </div>
        <div class="box-propositions">
          <ul>
            <li
              v-for="(proposition, index) in question.propositions"
              :key="index"
              class="li"
              :class="correct ? check(proposition) : ''"
              @click="selectResponse(proposition, index)"
            >
              {{ proposition.props }}
              <div
                v-if="correct ? proposition.correct : ''"
                class="fas fa-check"
              ></div>
              <div
                v-if="correct ? !proposition.correct : ''"
                class="fas fa-times"
              ></div>
            </li>
          </ul>
        </div>
      </div>
      <div v-if="score_show" class="box-score">
        <h2>Your scored</h2>
        <h2>{{ score }}/{{ questions.length }}</h2>
        <div class="btn-restart">
          <button @click="restartQuiz">
            Restart <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
      <div class="footer-exercise">
        <div v-if="progress < 100" class="box-button">
          <button
            :style="next ? 'background-color: rgb(106, 128, 202)' : ''"
            @click="skipQuestion()"
          >
            Skip
          </button>
          <button
            :style="!next ? 'background-color: rgb(106, 128, 202)' : ''"
            @click="nextQuestion()"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exercise01",
  components: {
    //Lesson01
  },
  data() {
    return {
      questions: [
        {
          question: "What are Kotlin coroutines",
          propositions: [
            { props: "It's Kotlin's term for class methods" },
            {
              props:
                "These are functions which accept other functions as arguments or return them",
            },
            {
              props:
                "That's how automatically generated methods hashcode() and eduals() in data classes are called",
            },
            {
              props: "They procide asynchrnonous code without thread blocking",
              correct: true,
            },
          ],
        },
        {
          question:
            "Who was part of the team that developed Kotlin",
          propositions: [
            { props: 'Andrey Washington' },
            { props: 'Andrey kotlin' },
            { props: 'andrey Breslav', correct: true },
            { props: 'Andrey Dimitrios' },
          ],
        },
        {
          question: "What company developed Kotlin",
          propositions: [
            { props: 'JetMines' },
            { props: 'JetPack' },
            { props: 'JetBrains', correct: true },
            { props: 'Google' },
          ],
        },
        {
          question: "What is a primary goal of Kotlin syntax?",
          propositions: [
            { props: "Complexity" },
            { props: "Readability", correct: true },
            { props: "Fungability" },
            { props: "Beauty" },
          ],
        },
      ],
      a: 0,
      b: 1,
      next: true,
      score_show: false,
      quiz: true,
      score: 0,
      correct: false,
      progress: 0,
    };
  },
  computed: {},
  methods: {
    selectResponse(e) {
      this.correct = true;
      this.next = false;
      if (e.correct) {
        this.score++;
      }
    },
    check(status) {
      if (status.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    nextQuestion() {
      if (this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
        this.correct = false;
        this.next = true;
      }
    },
    skipQuestion() {
      if (!this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;

      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
      }
    },

    restartQuiz() {
      Object.assign(this.$data, this.$options.data()); // reset data in vue
    },
  },
};
</script>

style.
<style scoped>
* {
  font-family: "Courier New", Courier, monospace;
  margin: 0;
  letter-spacing: 2px;
}

.container-exercise-app {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.container-exercise {
  display: flex;
  width: 40%;
  height: 85%;
  background-color: white;
  text-align: center;
  flex-flow: column;
  border: 1px solid #e7eae0;
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.header-exercise {
  display: flex;
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #e7eae0;
  justify-content: center;
  align-items: center;
  background-color: #e7eae0;
  border-radius: 10px 10px 0px 0px;
}

.container-exercise .box {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
  margin: auto;
}

.box-question {
  margin-top: 20px;
}

.box-question p {
  margin-top: 20px;
}

.box-propositions {
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: center;
}

ul {
  display: flex;
  width: 80%;
  margin: 0;
  padding: 0;
  flex-flow: column;
}

li {
  list-style: none;
  line-height: 2;
  border: 1px solid #cdd2d2;
  margin-bottom: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
}

li:hover {
  /*transform: scale(1.1);*/
  background-color: #e7eae0;
}

li > div {
  float: right;
  margin-top: 7px;
  margin-right: 7px;
  color: white;
}

.check {
  color: rgb(74, 219, 74);
}

.close {
  color: rgb(240, 117, 100);
}

.footer-exercise {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  border-top: 1px solid #e7eae0;
  background-color: #e7eae0;
  border-radius: 0px 0px 10px 10px;
}

.box-button {
  display: flex;
  width: 100%;
}

.footer-quiz .box-button button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 10px;
  letter-spacing: 2px;
  background-color: #a09f9ff5;
}

li.correct {
  border: 1px solid rgb(74, 219, 74);
  background-color: rgb(74, 219, 74);
  color: white;
  font-weight: 600;
}

li.incorrect {
  border: 1px solid rgb(240, 117, 100);
  background-color: rgb(240, 117, 100);
  color: white;
  font-weight: 600;
}

.box-score {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
}

.box-score h2 {
  margin-top: 40px;
}

i {
  display: none;
  color: white;
}

.step-progress {
  display: flex;
  width: 100%;
  height: 5px;
  background-color: rgb(106, 128, 202);
  transition: 0.5s;
}

.btn-restart {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-top: 50px;
}

.btn-restart button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  background-color: rgb(106, 128, 202);
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.next {
  background-color: rgb(106, 128, 202);
}

@media screen and (max-width: 900px) {
  .container-exercise {
    width: 60%;
  }
}

@media screen and (max-width: 720px) {
  .container-exercise {
    width: 80%;
  }
  .footer-exercise .box-button button {
    width: 100px;
  }
}
</style>
