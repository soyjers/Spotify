import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class JgtsAPIService {

    private http = inject(HttpClient)
    private urlApi: string = "http://localhost:4001/api"


    constructor() { }

    getCanciones() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
        return this.http.get(`${this.urlApi}/find-songs`, { headers })
    }

    getCancion(idCancion: string) {
        return this.http.get(`${this.urlApi}/consultar-cancion/${idCancion}`)
    }

    postCancion(dataCancion: any) {
        return this.http.post(`${this.urlApi}/create-song/${dataCancion} `, dataCancion)
    }

    deleteCancion(idCancion: string) {
        return this.http.delete(`${this.urlApi}/eliminar-producto/${idCancion}`)
    }

    putCancion(idCancion: string, dataCancion: any) {
        return this.http.put(`${this.urlApi}/actualizar-producto/${idCancion}`, dataCancion)
    }

    // estaLogueado() : boolean{
    //     let estado = (sessionStorage.getItem('token')) ? true : false
    //     return estado
    // }

    // postIngresoUsuario(dataLogin:any){
    //     return this.http.post(`${this.urlApi}/ingreso`, dataLogin)
    // }


}
