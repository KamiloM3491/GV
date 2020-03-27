import { Component } from '@angular/core';


@Component({
    selector: 'miContenido',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})

export class ContentComponent{

    contenido = {
        id: "prueba"
    }
    
    datosTienda = {
        descripMan: 'Ropa Masculina',
        ropaMasculina: '../assets/ropaMan.jpg',
        ropaFemenina: '../assets/ropaFem.jpg',
        descripWom: 'Ropa Femenina',
        infoStore: 'Tienda Online con lo último en tendencias de la moda'
    }

    chat = {
        data: ''
    }

    // @ViewChild("prueba", {static: false}) prueba: ElementRef;

    // ngAfterViewInit(){

    // }
}
