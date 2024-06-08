userService{
private redonly httpClient : HttpClient = inject(HttpClient)

findUser(){
this.httpClient.get('http:localhosth:3000/user'))
}

createUser(playload : any){
this.httpClient.post('http:localhosth:3000/user',playload))
}
}
