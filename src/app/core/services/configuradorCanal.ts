import { Injectable, OnInit } from '@angular/core';
import { AppService } from './../services/canal.service';

@Injectable()
export class ConfiguradorCanal implements OnInit {

    estado: string;
    constructor(private _app: AppService) { }

    ngOnInit() {
    }

    configDatos() {
        return this._app.configuradorApp({ query: this.estado })
            .subscribe(response => console.log('Respuesta correcta microservicio', response),
            error => console.log('Respuesta error microservicio', error));
    }

}

