import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

import { flyInOut, expand } from '../animations/app.animation';
import { FeedbackService } from '../services/feedback.service';
import { inject } from '@angular/core/testing';
import { baseURL } from '../shared/baseurl';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']  ,
  animations: [
    expand(),
   flyInOut(),
  ]
})
export class ContactComponent implements OnInit {
  @ViewChild('fform',null) feedbackFormDirective;




  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;


  constructor(private fb: FormBuilder,private feedbackService:FeedbackService,@Inject('baseURL') public baseURL) {
    this.createForm();
  }

  ngOnInit() {
  }



  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };

  
  createForm() {
   
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      agree: false,
      contacttype: 'None',
      message: ''
    });


    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
   
    


  }


  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  feedBackErr:string;
  isEditing:boolean=true;
  isSubmitting:boolean=false;
  isPreviewing:boolean=false;
  isFailing:boolean=false;

  onSubmit() {
this.isEditing=false;

    this.isSubmitting=true;
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackService.submitFeedback(this.feedback).subscribe(
      data  => {
      console.log("feedBack post Request is successful ", data);
      ;this.isSubmitting=false;
      this.isPreviewing=true;
      setTimeout(
        ()=>{this.isPreviewing=false;this.isEditing=true;},5000

      )

      
      
      },
      error  => {
        this.feedBackErr=error;
      console.log(error);
  
        ;this.isSubmitting=false;


        this.isFailing=true;
      setTimeout(
        ()=>{this.isFailing=false;;this.isEditing=true;},5000

      )

      
      
      }
      
      );;

      

    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    
    this.feedbackFormDirective.resetForm();
  }
  
}
  