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

    /* Artistas */

    postArtista(artistId: string) {
        return this.http.get(`${this.urlApi}/create-artist/${artistId}`)
    }




    /* Albumes */
    getAlbumes() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
        return this.http.get(`${this.urlApi}/find-albums`, { headers })
    }

    getAlbum(iDfavorite: string | null) {
        return this.http.get(`${this.urlApi}/find-album/${iDfavorite}`)
    }

    postAlbum(dataAlbum: any) {
        return this.http.post(`${this.urlApi}/create-album`, dataAlbum);
    }

    deleteaAlbum(iDfavorite: string) {
        return this.http.delete(`${this.urlApi}/eliminar-album/${iDfavorite}`)
    }

    putAlbum(iDfavorite: string, dataAlbum: any) {
        return this.http.put(`${this.urlApi}/actualizar-album/${iDfavorite}`, dataAlbum)
    }




    getfavorites() {
      const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
      return this.http.get(`${this.urlApi}/find-favorites`, { headers })
    }

    getfavorite(favoriteId: string | null) {
    return this.http.get(`${this.urlApi}/find-favorite/${favoriteId}`)
    }

    postfavorite(datafavorito:any){
    return this.http.post(`${this.urlApi}/create-favorite`, datafavorito)
    }

    putfavorite(favoriteId:string, datafavorito:any){
    return this.http.put(`${this.urlApi}/update-user/${favoriteId}`, datafavorito)
    }

    deletefavorite(favoriteId: string) {
    return this.http.delete(`${this.urlApi}/delete-favorite/${favoriteId}`)
    }



}

