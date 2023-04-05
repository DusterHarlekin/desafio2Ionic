import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public toastController: ToastController, public navCtrl: NavController) { }

  login(form:any){
    console.log(`Sesion iniciada. Usuario: ${form.form.value.name}`);
    this.presentToast(form.form.value.name);
    this.navCtrl.navigateBack('/home');
  }

  async presentToast(username:string) {
    const toast = await this.toastController.create({
      message: `¡Hola ${username}!`,
      duration: 3000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
