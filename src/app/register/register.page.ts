import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  imagen: string = 'https://www.consumer.es/app/themes/consumer/assets/img/default-user.png';

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  long: number;
  lat: number;
  constructor(private geolocation: Geolocation, private camera: Camera, public toastController: ToastController, public navCtrl: NavController) { }

  register(form:any){
    console.log(`Registro enviado. Usuario: ${form.form.value.name}`);
    this.presentToast();
    this.navCtrl.navigateBack('/home');
  }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.getGeolocation();
  };

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registro exitoso',
      duration: 3000
    });
    toast.present();
  }

  takePhoto(){
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imagen = base64Image;
      
    }, (err) => {
      console.log('Error. '+err);
    });
  }

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error obteniendo localizacion', error);
     });
  }

}
