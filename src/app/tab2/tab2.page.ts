import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  urlImageStorage : string[] = [];
  selected = [];

  constructor(public fotoService:FotoService, private afStorage : AngularFireStorage) {}

  async ngOnInit(){
    await this.fotoService.loadFoto();
  }

  ambilFoto(){
    this.fotoService.tambahFoto();
  }

  uploadFoto(){
    
    var checks = document.getElementsByClassName("checkboxFoto") as HTMLCollectionOf<HTMLInputElement>;
    var temp = [];
    for(var i = 0; i < checks.length; i++){
      if(checks[i].checked == true){
        temp.push(checks[i].value);
      }
    }

    this.urlImageStorage = [];
    for(var i = 0; i < temp.length; i++){
      const imgFilepath = `imgStorage/${this.fotoService.dataFoto[temp[i]].filePath}`;
       
      this.afStorage.upload(imgFilepath, this.fotoService.dataFoto[temp[i]].dataImage).then(()=>{
        this.afStorage.storage.ref().child(imgFilepath).getDownloadURL().then((url)=>{
          this.urlImageStorage.unshift(url)
        });
      });
    }

    alert("Berhasil Upload!");
  }
}
