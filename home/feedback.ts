Feedback（意见反馈）

2017年6月22日
21:39

import { Component } from '@angular/core';
import { FeedbackDoc } from './../../common/doc-definition';
import DBHelper from '../../extensions/db-helper';
@Component({
templateUrl: './feedback.html'
})
export class FeedbackComponent {
protected contact: string = null;
protected content: string = null;
constructor() {
}
protected async commit() {
let doc: FeedbackDoc = { // 设置feedback信息
type: 'feedback',
contact: this.contact,
content: this.content
};
let attachments: { [index: string]: Blob } = {};
try {
await DBHelper.createDoc(doc, attachments); // 创建feedback文档
console.log('创建成功doc', doc);
} catch (err) {
console.log('创建feedback失败', err);
}
}
}



export interface FeedbackDoc extends BaseDoc {
type: 'feedback';
contact: string;
content: string;
}
'feedback'


const FeedbackIndicator = 'feedback-';
// feedback相关
case 'feedback':
return `${doc.owner}.${FeedbackIndicator}${uuid().slice(-RandomLength)}`;




<ion-header>
<ion-navbar>
<ion-title>
{{'FeedBack.Title'|translate}}
</ion-title>
</ion-navbar>
</ion-header>
<ion-content class="r3t-feedback">
<ion-list>
<ion-list-header>{{'FeedBack.Contact'|translate}}</ion-list-header>
<ion-item>
<ion-input type="text" placeholder="{{'FeedBack.Prompt-ContactDetail'|translate}}" [(ngModel)]="contact"></ion-input>
</ion-item>
</ion-list>
<ion-list>
<ion-list-header>{{'FeedBack.ProblemDescription'|translate}}</ion-list-header>
<ion-item>
<ion-textarea rows="6" placeholder="{{'FeedBack.Prompt-ProblemDetail'|translate}}" [(ngModel)]="content"></ion-textarea>
</ion-item>
</ion-list>
<ion-list>
<ion-list-header>{{'FeedBack.ProblemScreenshot'|translate}}</ion-list-header>
<ion-item>
<ion-col class="square" col-4>
<ion-icon name="add"></ion-icon>
</ion-col>
</ion-item>
</ion-list>
<ion-grid>
<ion-row>
<ion-col>
<button ion-button block (click)="commit()">{{'Button.Save'|translate}}</button>
</ion-col>
</ion-row>
</ion-grid>
</ion-content>



import * as nodemailer from 'nodemailer'


// 发送用户反馈意见
let transporter: nodemailer.Transporter = nodemailer.createTransport({
service: 'QQ',
auth: {
user: '494397353@qq.com',
pass: 'Bylh4398882'
}
});

