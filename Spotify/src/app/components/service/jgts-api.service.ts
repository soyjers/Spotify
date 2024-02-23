import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class JgtsAPIService {

    private http = inject(HttpClient)
    private urlApi: string = "http://localhost:4001/api"


    constructor() { }


    /* Canciones */
    getCanciones() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
        return this.http.get(`${this.urlApi}/find-songs`, { headers })
    }

    getCancion(idCancion: string) {
        return this.http.get(`${this.urlApi}/find-song${idCancion}`)
    }

    postCancion(dataCancion: any) {
        return this.http.post(`${this.urlApi}/create-song`, dataCancion);
    }

    deleteCancion(idCancion: string) {
        return this.http.delete(`${this.urlApi}/delete-song/${idCancion}`)
    }

    putCancion(idCancion: string, dataCancion: any) {
        return this.http.put(`${this.urlApi}/update-song/${idCancion}`, dataCancion)
    }



    /* Artistas */

    postArtista(artistId: string) {
        return this.http.get(`${this.urlApi}/create-artist/${artistId}`)
    }




    /* Albumes */
    getAlbumes() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
        return this.http.get(`${this.urlApi}/find-albums`, { headers })
    }

    getAlbum(idAlbum: string | null) {
        return this.http.get(`${this.urlApi}/find-album/${idAlbum}`);
    }


    postAlbum(dataAlbum: any) {
        return this.http.post(`${this.urlApi}/create-album`, dataAlbum);
    }

    deleteaAlbum(idAlbum: string) {
        return this.http.delete(`${this.urlApi}/eliminar-album/${idAlbum}`)
    }

    putAlbum(idAlbum: string, dataAlbum: any) {
        return this.http.put(`${this.urlApi}/actualizar-album/${idAlbum}`, dataAlbum)
    }
}
