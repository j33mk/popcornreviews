import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ResponseDto } from '../../Models/ResponseDto'

@Component({
  selector: 'app-showmovie',
  templateUrl: './showmovie.component.html',
  styleUrls: ['./showmovie.component.css']
})
export class ShowmovieComponent implements OnInit {
  public responseDto: ResponseDto;
  private apiKey: string = '0eb48fbecf1e41443e5deadaea7521f7';
  private movieInfoByTitle: string = 'https://api.themoviedb.org/3/search/movie?api_key=';
  private singleMovieInfo: string = 'https://api.themoviedb.org/3/movie/';
  private youtube: string = 'http://api.themoviedb.org/3/movie/';
  private recommend: string = 'https://api.themoviedb.org/3/movie/';
  isLoaderActive:boolean = true;
  constructor(private _Activatedroute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      const movieName = params.get('movie_name');
      console.log(movieName);
      this.getMovieDetails(movieName).then(data => {
        this.responseDto = data;
        console.log("....");
        this.isLoaderActive = false;
      }).catch(error => {
        console.log(error.message);
      });
    });
  }
  async getMovieDetails(movieName): Promise<any> {
    try {
      const finalUrl: string = this.movieInfoByTitle.concat(this.apiKey).concat('&query=').concat(movieName);
      const data: any = await this.http.get(finalUrl).toPromise();
      const results: any = data["results"];
      const movieId = results[0].id;
      const singMovInfo = this.singleMovieInfo.concat(movieId).concat("?api_key=").concat(this.apiKey);
      const singMoviCredits = this.singleMovieInfo.concat(movieId).concat("/credits?api_key=").concat(this.apiKey);
      const youTube = this.youtube.concat(movieId).concat("/videos?api_key=").concat(this.apiKey).concat("&language=en-US");
      const recommendations = this.recommend.concat(movieId).concat("/recommendations?api_key=").concat(this.apiKey).concat("&language=en-US&page=1");
      const singleMovieInfoRequest: any = await this.http.get(singMovInfo).toPromise();
      const singMoviCreditsRequest: any = await this.http.get(singMoviCredits).toPromise();
      const youTubeRequest: any = await this.http.get(youTube).toPromise();
      const recommendationsRequest: any = await this.http.get(recommendations).toPromise();
      const responseDto: ResponseDto = {
        Movie: singleMovieInfoRequest,
        Video: youTubeRequest,
        Credit: singMoviCreditsRequest,
        Recommend: recommendationsRequest
      }
      return responseDto;
    } catch (error) {
      return error.message;
    }
  }
  getDirectorName(credit:any):string{
    const directorName:string = credit.crew.find(d=>d.job==='Director').name;
    return directorName;

  }
  getProducerName(credit:any):string{
    const producerName:string = credit.crew.find(p=>p.job ==='Producer').name;
    if(producerName){
      return producerName;
    }else{
      return "NA";
    }
  }
  getTrailerLink(video:any){
    if(video.results[0]){
      return "https://www.youtube.com/embed/"+video.results[0].key;
    }else{
      return "https://www.youtube.com"
    }
  }
  getCastProfilePicture(profilePath:any){
    if(profilePath){
      return "https://image.tmdb.org/t/p/w500"+profilePath;
    }

  }
}
