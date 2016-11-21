import { Component  } from '@angular/core';
import { Question } from './question';

@Component({
	moduleId: module.id,
  	selector: 'my-addquestion',
	templateUrl: '/templates/addquestion'
})

export class AddQuestionComponent {
	theme = "HTML";
	question = "";
	reponse1 = "";
	reponse2 = "";
	reponse3 = "";
	reponse = "";
	err = ""
	slot1 = false;
	slot2 = false;
	slot3 = false;

	post() {
		//call question service
		if(!this.question)
			this.err = "Veuillez entrer une question!";
		else if(!this.reponse1 || !this.reponse2 || !this.reponse3)
			this.err = "Veuillez entrer 3 reponses!";
		else if(!this.reponse)
			this.err = "Veuillez indiquer la bonne reponse!";
		else
		{
			if(this.reponse === "reponse1")
				this.slot1 = true;
			else if(this.reponse === "reponse2")
			{
				this.slot2 = true;
			}
			else if(this.reponse === "reponse3")
			{
				this.slot3 = true;
			}

			var q = new Question(this.theme,this.question,this.reponse1,this.reponse2,this.reponse3,this.slot1,this.slot2,this.slot3);

			console.log(JSON.stringify(q));

			//this.questionService.create(q);

			this.err = "Question soumise!"
			this.theme = "HTML";
			this.question = "";
			this.reponse1 = "";
			this.reponse2 = "";
			this.reponse3 = "";
			this.reponse = "";
			this.slot1 = false;
			this.slot2 = false;
			this.slot3 = false;
		}
	}
}
