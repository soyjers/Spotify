import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class SpotifyAPIService {

    private http = inject(HttpClient)
    private urlApi: string = "http://localhost:4001/api/"


    constructor() { }

    findSongs(idSong: string) {
        return this.http.get(`${this.urlApi}/find-songs/`)

    }



    /* inicio de sesion */
    getUsers() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2Q1N2I2YjVhZjY4NjJhY2QzOWRjMSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3OTYzMDk5LCJleHAiOjE3MDc5NjY2OTl9.CJp2h8XW9BCAUp_Hz59QQWIKpnXdwfau09U8hx9I53A ')
        return this.http.get(`${this.urlApi}/find-users`, { headers })
    }

    estaLogueado(): boolean {
        let estado = (sessionStorage.getItem('token')) ? true : false
        return estado
    }

    postIngresoUsuario(dataLogin: any) {
        return this.http.post(`${this.urlApi}/ingreso`, dataLogin)
    }


}
