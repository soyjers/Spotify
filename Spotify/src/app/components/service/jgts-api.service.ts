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

    postArtista(dataArtista: any) {
        return this.http.post(`${this.urlApi}/create-artist`, dataArtista);
    }

    getArtistas() {
        return this.http.get(`${this.urlApi}/find-artists`)
    }



    /* Albumes */
    getAlbumes() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzZiYWIyZjBiMDgwMzQ3ZWJkODIzOSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNzA3NTI0OTAzLCJleHAiOjE3MDc1Mjg1MDN9.n7XqQr9aFmm_mOu-cKROiwxj0zjYJYlUR5Moq0VqJ_o')
        return this.http.get(`${this.urlApi}/find-albums`, { headers })
    }

    getAlbum(idAlbum: string | null) {
        return this.http.get(`${this.urlApi}/find-album/${idAlbum}`);
    }

    getAlbumXArtist(idArtist: string | null) {
        return this.http.get(`${this.urlApi}/find-album-x-artist/${idArtist}`);
    }


    postAlbum(dataAlbum: any) {
        return this.http.post(`${this.urlApi}/create-album`, dataAlbum);
    }

    deleteaAlbum(iDfavorite: string) {
        return this.http.delete(`${this.urlApi}/eliminar-album/${iDfavorite}`)
    }

    // private headerCustom = HttpHeaders}

    // // constructor(private httpClient: HttpClient){}

    // // searchTrack({q: string}: songMo)
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

