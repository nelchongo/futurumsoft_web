import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormService } from 'src/app/services/form/form.service';
import { RecaptchaService } from 'src/app/services/recaptcha/recaptcha.service';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss'],
})
export class HomeFormComponent  implements OnInit {

  name:string = '';
  phone:string = '';
  email:string = '';
  message:string = '';

  name_expression: RegExp = /^[a-zA-Z]/;
  phone_expression: RegExp = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm
  email_expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  isCaptchaValid = false;

  constructor(
    private formService: FormService, 
    private alertController: AlertController,
    private recaptchaService: RecaptchaService
  ) {}

  ngOnInit(): void {
    this.recaptchaService.getToken('contact');
  }
  

  async delay(ms: number) {
    await new Promise<void>(resolve => setTimeout(()=>resolve(), ms));
  }

  submitForm(){
    this.recaptchaService.getToken('contact');
    
    //Verify that the there's a token and that this is not a bot
    if(this.recaptchaService.checkToken() != ""){
      var name_validation: boolean = this.name_expression.test(this.name); // true
      var phone_validation: boolean = true//this.phone_expression.test(this.phone); // true
      var email_validation: boolean = this.email_expression.test(this.email); // true
      var missing_fields = [];
  
      if(!name_validation || this.name.length <= 3){
        missing_fields.push("Nombre")
      }
      if(!phone_validation){
        missing_fields.push("Teléfono")
      }
      if(!email_validation){
        missing_fields.push("Email")
      }
      if(this.message.length <= 10){
        missing_fields.push("Mensaje")
      }
  
      if(missing_fields.length > 0){
        this.presentAlert("Error", "Pareciera haber un error con estos campos:", missing_fields.toString().split(',').join(', '))
      }else{
        var message = "There's a new potential client:\n\n"
        + "Name: " + this.name + "\n"
        + "Phone: " + this.phone + "\n"
        + "Email: " + this.email + "\n"
        + "Message: " + this.message + "\n"
        this.formService.sendEmail("Potential Client", message)
  
        this.presentAlert("Gracias", "", "Te estaremos contactándo a la brevedad")
        this.name = ""
        this.phone = ""
        this.email = ""
        this.message = ""
      }
    }
  }

  async presentAlert(header:string, subHeader:string, message:string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
    });

    await alert.present();
    await this.delay(5000)
    await alert.dismiss()
  }

  RecaptchaModule(ev:any){
    this.isCaptchaValid = true
  }

}
