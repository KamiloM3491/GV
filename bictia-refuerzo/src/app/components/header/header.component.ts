import { Component } from '@angular/core'

@Component({
    selector: 'miHeader',
    templateUrl : './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{

    datoUsuario(user){
        console.log(user)
    }
    
}