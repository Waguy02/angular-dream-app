import { Dish } from '../shared/dish';
import { Component, OnInit, ViewChild,Inject } from '@angular/core';
import { DishService } from '../services/dish.service';

import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';
import {Comment } from '../shared/comment';
import { switchMap } from 'rxjs/operators';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import{ DISHES} from '../shared/dishes';

const DISH = {
    id: '0',
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    // tslint:disable-next-line:max-line-length
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    comments: [
         {
             rating: 5,
             comment: 'Imagine all the eatables, living in conFusion!',
             author: 'John Lemon',
             date: '2012-10-16T17:57:28.556094Z'
         },
         {
             rating: 4,
             comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
             author: 'Paul McVites',
             date: '2014-09-05T17:57:28.556094Z'
         },
         {
             rating: 3,
             comment: 'Eat it, just eat it!',
             author: 'Michael Jaikishan',
             date: '2015-02-13T17:57:28.556094Z'
         },
         {
             rating: 4,
             comment: 'Ultimate, Reaching for the stars!',
             author: 'Ringo Starry',
             date: '2013-12-02T17:57:28.556094Z'
         },
         {
             rating: 2,
             comment: 'It\'s your birthday, we\'re gonna party!',
             author: '25 Cent',
             date: '2011-12-02T17:57:28.556094Z'
         }
     ]
  };
  

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  
  styleUrls: ['./dishdetail.component.css']
})







export class DishdetailComponent implements OnInit {

    @ViewChild('fform',null) commentFormDirective;

    setPrevNext(dishId: string) {
        const index = this.dishIds.indexOf(dishId);
        this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
        this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
      }
        

    ngOnInit() {
        const id = +this.route.snapshot.params['id'];

        this.dishservice.getDish(id).subscribe(dish =>{ this.dish = dish});

        this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
        this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
                .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  


       
    
    }


    

    dish: Dish;
    dishIds:string[];
    prev:any;
    next:any;
    commentForm:FormGroup;
    previewComment:Comment
    
    formErrors = {
        'author': '',
        'rating': '',
        'comment': ''
      };
    
      validationMessages = {
        'author': {
          'required':      'First Name is required.',
          'minlength':     'First Name must be at least 2 characters long.',
          'maxlength':     'author cannot be more than 25 characters long.'
        },

        'rating': {
          'required':      'Tel. number is required.',
          
        },
        'comment': {
          'required':    'Your comment is required',
          
        },
      };
    
    

    constructor(private dishservice: DishService,
      private route: ActivatedRoute,
      private location: Location,private fb: FormBuilder,
      @Inject('baseURL') private baseURL 
      ) { 

        this.createForm();

      }
  

    

      createForm() {
   
        this.commentForm = this.fb.group({
          author: ['', [Validators.required, Validators.minLength(2)] ],
          rating: ['5', [Validators.required] ],
          comment: ['', [Validators.required] ],
        });
    
    
        this.commentForm.valueChanges
          .subscribe(data => this.onValueChanged(data));
    
        this.onValueChanged(); // (re)set validation messages now
        
        
    
    
      }

      onValueChanged(data?: any) {
          
        if (!this.commentForm) { return; }
        const form = this.commentForm;
       var isValid:boolean=true;

       
        for (const field in this.formErrors) {
          if (this.formErrors.hasOwnProperty(field)) {
            // clear previous error message (if any)
             

            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                isValid=false;
                const messages = this.validationMessages[field];
              for (const key in control.errors) {
                if (control.errors.hasOwnProperty(key)) {
                  this.formErrors[field] += messages[key] + ' ';
                }
              }
            }
        }}

          if(isValid){

            console.log("Commentaire valide, affichage de la prévisualisation ...");
            this.previewComment={
            author:this.commentForm.get('author').value,
            rating:this.commentForm.get('rating').value,
            comment:this.commentForm.get('comment').value,
            date:''
                            }

        
          }
          else{

            console.log("Commentaire invalide ");
              this.previewComment=undefined;
          }

          

        
      }
    
      onSubmit() {
        this.previewComment = this.commentForm.value;

        this.previewComment.date=String(new Date());
        console.log(this.previewComment);
        
        this.dish.comment.push(this.previewComment);
        console.log(this.dish.comment);


        this.commentForm.reset({
          author: '',
          rating:'',
          comment: ''
        });
        
        this.commentFormDirective.resetForm();
        alert("Votre Commentaire a été posté avec succès; Nous vous en remercions!")
        
      }
      
    










};
        