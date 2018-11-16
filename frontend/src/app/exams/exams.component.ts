import * as Auth0 from 'auth0-web';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Exam} from '../models/exam.model';
import {ExamsApiService} from '../services/exams-api.service';

@Component({
    selector: 'exams',
    templateUrl: './exams.component.html',
  styleUrls: ['exams.component.css'],
  })

export class ExamsComponent implements OnInit, OnDestroy {
    examsListSubs: Subscription;
    examsList: Exam[];
    authentificated = false;

    constructor(private examsApi: ExamsApiService) {
    }

    ngOnInit() {
        this.examsListSubs = this.examsApi
            .getExams()
            .subscribe(res => {
                this.examsList = res
            },
            console.error
        );
        const self = this;
        Auth0.subscribe((authentificated) => (self.authentificated = authentificated));
    }

    ngOnDestroy() {
        this.examsListSubs.unsubscribe();
    }

    delete(examId: number) {
        this.examsApi
            .deleteExam(examId)
            .subscribe(() => {
                this.examsListSubs = this.examsApi
                    .getExams()
                    .subscribe(res => {
                        this.examsList = res;
                    },
                    console.error
                    )
            }, console.error);
    }

    idAdmin() {
        if (!Auth0.isAuthenticated()) return false;

        const roles = Auth0.getProfile()['https://online-exams.com/roles'];
        return roles.inclues('admin');
    }
}
  
