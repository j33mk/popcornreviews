import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
@Component({
  selector: 'app-listmovies',
  templateUrl: './listmovies.component.html',
  styleUrls: ['./listmovies.component.css']
})
export class ListmoviesComponent implements OnInit {
  movies:any;
  isLoaderActive:boolean = true;
  apiKey:string = '0eb48fbecf1e41443e5deadaea7521f7';
  popular:string = 'https://api.themoviedb.org/3/movie/popular?api_key=';
  finalUrl:string = this.popular.concat(this.apiKey);

 constructor(private http:HttpClient) { }

 ngOnInit(): void {
   this.loadMovies(this.finalUrl).then(()=>{
     console.log("Movies are loaded....");
   }).catch(err=>{
     console.log("Refer to console for erros....");
     console.log(err.message);
   });
 }

 async loadMovies(finalUrl):Promise<any>{
   this.movies = await this.http.get(finalUrl).toPromise();
   this.isLoaderActive = false;
 }

}