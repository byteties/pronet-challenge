import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class BookService{
    private apiUrl = 'https://anapioficeandfire.com/api/books';
    constructor(private http: HttpClient) {}

    getBooks(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    getBook(id: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/${id}`);
    }
}