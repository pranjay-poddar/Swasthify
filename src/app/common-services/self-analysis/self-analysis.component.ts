import { Component, OnInit } from '@angular/core';
import { Option, Question, Quiz, QuizConfig } from '../../models/index';
import { HelperService } from 'src/app/services/helper.service';
import { flyInOut, expand } from '../../Utilities/animations/animation';
import { QuizService } from 'src/app/services/quiz.service';
import { SharingService } from 'src/app/services/sharing.service';
let positive = 0;
let answers: any = [];

@Component({
  selector: 'app-self-analysis',
  templateUrl: './self-analysis.component.html',
  styleUrls: ['./self-analysis.component.scss'],
  providers: [QuizService],
  animations: [
    flyInOut(),
    expand()
  ]
})

export class SelfAnalysisComponent implements OnInit {
  hidecomponent = "cat";
  analysisResultPositive: string = '';
  analysisResultNegative: string = '';
  heightfix = "heightfix";
  marginHide = "heading-1";
  quizes !: any[];
  quiz: Quiz = new Quiz(null);
  mode = 'quiz';
  quizName !: string;
  light !: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': true,  // if true, it will move to next question automatically when answered.
    'duration': 600,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': true,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': true,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime !: Date;
  endTime !: Date;
  ellapsedTime = '00:00';
  duration = '';
  constructor(private quizService: QuizService, private sharingService: SharingService) { }

  ngOnInit() {
    this.quizes = this.quizService.getAll();
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);
    if (this.quizes[0]) {

    }
    this.light = this.sharingService.getData();
  }
  loadQuiz(quizName: string) {
    this.quizService.get(quizName).subscribe(res => {
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
      this.pager.index = 0;

      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    });
    this.mode = 'quiz';
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: any, option: any) {
    if (question.QuestionTypeId == 1) {
      question.Options.forEach((x: any) => { if (x.Id != option.Id) x.Selected = false; });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: Question) {

    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';

  };

  isCorrect(question: Question) {
    //     if(question.options.every(x => x.selected === x.isAnswer)){
    //      return positive = positive + 1;
    // }
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit() {


    this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered, 'isans0': x.options[0].isAnswer, 'isans1': x.options[1].isAnswer, 'isans2': x.options[2].isAnswer, 'isans3': x.options[3].isAnswer, 's0': x.options[0].selected, 's1': x.options[1].selected, 's2': x.options[2].selected, 's3': x.options[3].selected }));

    // Post your data to the server here. answers contains the questionId and the users' answer.

    for (let i = 0; i < 10; i++) {

      if (answers[i].isans0 == true && answers[i].s0 == true) {
        positive = positive + 1;
      }
      else if (answers[i].isans1 == true && answers[i].s1 == true) {
        positive = positive + 1;
      }
      else if (answers[i].isans2 == true && answers[i].s2 == true) {
        positive = positive + 1;
      }
      else if (answers[i].isans3 == true && answers[i].s3 == true) {
        positive = positive + 1;
      }
    }


    // to hide the category option on submit 
    if (this.hidecomponent == "cat") {
      this.hidecomponent = "category2";
    }
    else {
      this.hidecomponent = "";
    }
    if (this.marginHide == "heading-1") {
      this.marginHide = "marginHide2";
    }
    else {
      this.marginHide = "";
    }
    if (this.heightfix) {
      this.heightfix = "";
    }
    else {
      this.heightfix = "heightfix2";
    }

    this.mode = 'result';
    if (answers[1].quizId == 1) {
      this.analysisResultPositive = "YOU NEED TO TAKE A COVID-19 TEST, CONTACT YOUR NEARBY COVID TESTING CENTER TO GET TESTED FOR COVID-19!";
      this.analysisResultNegative = "COVID TEST IS NOT REQUIRED! YOU DO NOT HAVE COVID SYMPTOMS"
    }
    if (answers[1].quizId == 2) {
      this.analysisResultPositive = "YOU NEED TO CONSULT A DOCTOR, CONTACT YOUR NEARBY DOCTOR TO GET TESTED FOR EATING DISORDER!";
      this.analysisResultNegative = "YOU ARE HEALTHY! YOU DO NOT HAVE ANY SYMPTOMS OF EATING DISORDER"
    }
    if (answers[1].quizId == 3) {
      this.analysisResultPositive = "YOU NEED TO CONSULT A DOCTOR, CONTACT YOUR NEARBY dOCTOR TO GET TESTED FOR PHYSICAL HEALTH!";
      this.analysisResultNegative = "YOU ARE PHYSICALLY HEALTHY! YOU DO NOT HAVE ANY SYMPTOMS OF PHYSICAL HEALTH DISORDER"
    }
    if (answers[1].quizId == 4) {
      this.analysisResultPositive = "YOU NEED TO CONSULT A DOCTOR, CONTACT YOUR NEARBY PSYCHIATRIST TO GET TESTED FOR MENTAL DISORDER!";
      this.analysisResultNegative = "YOU ARE MENTALY HEALTHY! YOU DO NOT HAVE ANY SYMPTOMS OF MENTAL DISORDER"
    }

  }

  onPositive() {
    // console.log(positive);
    if (positive >= 6) {
      return 1;
    }
    else {
      return 0;
    }
  }

  resetVars() {
    this.hidecomponent = 'cat';
    this.analysisResultPositive = '';
    this.analysisResultNegative = '';
    this.heightfix = 'heightfix';
    this.marginHide = 'heading-1';
    this.loadQuiz(this.quizName);
  }

}
