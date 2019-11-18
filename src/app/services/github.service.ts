import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';


@Injectable()

export class GithubService {
    private username: string;
    private client_id = '9dcfa49aae7548b16073';
    private client_secret = '6980a84b46ea265639025e9f134f463c526990c6';

    constructor(private httpClient: HttpClient) {
        console.log('Github service ready...');
        this.username = 'slobaaa'; // to mi je user sa githuba
    }

    getUser() {
        // tslint:disable-next-line:max-line-length
        return this.httpClient.get<any[]>('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
            // .map((res: Response) => res.json()); // to ispod mi ne treba valjda zbog novije verzije on automatski gore vraca taj json
    }
    getRepos() {
        // tslint:disable-next-line:max-line-length
        return this.httpClient.get<any[]>('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret);
            // .map((res: Response) => res.json()); // to ispod mi ne treba valjda zbog novije verzije on automatski gore vraca taj json
    }

    updateUser(username: string) {
        this.username = username;
    }
}
