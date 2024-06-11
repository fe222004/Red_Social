userService{
private redonly httpClient : HttpClient = inject(HttpClient)

findUser(){
this.httpClient.get('http:localhosth:3000/user'))
}

createUser(playload : any){
return this.httpClient.post('http:localhosth:3000/user',playload))
}

editUser(playload : any){
return this.httpClient.post('http:localhosth:3000/user/'+id,playload))
}
}
