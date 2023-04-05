import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { BatteryStatus } from '@awesome-cordova-plugins/battery-status/ngx';

@Component({
  selector: 'app-linterna',
  templateUrl: './linterna.page.html',
  styleUrls: ['./linterna.page.scss'],
})
export class LinternaPage implements OnInit {
  loadStatusBool: boolean;
  subscription: any;
  batLevelElem:any;
  loadStatus: string;
  percent:number;

  constructor(
    public flashlight: Flashlight,
    private batteryStatus: BatteryStatus
  ) {}

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.getStatus();
  }
  
  ionViewWillLeave(){
    this.subscription.unsubscribe();
  }
  
  getStatus() {
    this.batLevelElem = document.getElementById('batLevel');
    this.subscription = this.batteryStatus.onChange().subscribe((status) => {
      this.percent = status.level;
      this.loadStatusBool = status.isPlugged;
      this.updateStatus(status.isPlugged, status.level);
    });
  }

  updateStatus(loadStatusBool:boolean, percent:number){
    this.batLevelElem.style.top = 100 - percent - 10 + '%';
      if (loadStatusBool) this.loadStatus = 'Cargando';
      else this.loadStatus = 'Descargando';
  }



  switchFlash(evento: any) {
    let power: boolean = evento.target.checked;

    if (power) {
      this.flashlight.switchOn();
    } else {
      this.flashlight.switchOff();
    }
  }
}
