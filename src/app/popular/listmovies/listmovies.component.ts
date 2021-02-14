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
  popularUrl:string = 'https://api.themoviedb.org/3/movie/popular?api_key=';
  finalUrl:string = this.popularUrl.concat(this.apiKey);

 constructor(private http:HttpClient) { }

 ngOnInit(): void {
   this.loadMovies();
   

 }

 loadMovies(){
   this.http.get(this.finalUrl).subscribe(data=>{
     this.movies = data;
     this.isLoaderActive = false;

   });
 }

}
