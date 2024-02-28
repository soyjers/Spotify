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
    // getCancionesPorAlbum() {
    //     const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
    //     return this.http.get(`${this.urlApi}/find-song-album/:idAlbum`, { headers })
    // }
    getCancionPorAlbum(albumId: any) {
        return this.http.get(`${this.urlApi}/find-song-album/${albumId}`)
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
        return this.http.put(`${this.urlApi}/actualizar-song/${idCancion}`, dataCancion)
    }





    getAlbumes() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
        return this.http.get(`${this.urlApi}/find-albums`, { headers })
    }

    getAlbum(idAlbum: string|null) {
        return this.http.get(`${this.urlApi}/find-album/${idAlbum}`)
    }

    postArt(dataAlbum: any) {
        return this.http.post(`${this.urlApi}/create-album`, dataAlbum);
      }

    deleteaAlbum(idAlbum: string) {
        return this.http.delete(`${this.urlApi}/eliminar-album/${idAlbum}`)
    }

    putAlbum(idAlbum: string, dataAlbum: any) {
        return this.http.put(`${this.urlApi}/actualizar-album/${idAlbum}`, dataAlbum)
    }


    getCancionPorArtista(artistId: any) {
        return this.http.get(`${this.urlApi}/find-song-album/${artistId}`)
    }



    getArtistas() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
        return this.http.get(`${this.urlApi}/find-artists`, { headers })
    }

    getArtista(idArtista: string|null) {
        return this.http.get(`${this.urlApi}/find-artist/${idArtista}`)
    }

    postArtista(dataArtista: any) {
        return this.http.post(`${this.urlApi}/create-artist`, dataArtista);
      }

    deleteArtista(idArtista: string) {
        return this.http.delete(`${this.urlApi}/eliminar-album/${idArtista}`)
    }

    putArtista(idArtista: string, dataArtista: any) {
        return this.http.put(`${this.urlApi}/delete-artist/${idArtista}`, dataArtista)
    }
}
