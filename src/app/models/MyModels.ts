export class Musicians{
  
    musiciansId
    sessionsMusiciansTbl: []
    constructor(
    public name,
    public cellphone,
    public email,
    public instrument,
    public pricePerSession,
    ){}
}

export class Projects{
    projectId 
    startDate
    creationDate
    
    isDone
    phasesTbl
    constructor(public name,public description,public clientId,public estimatedPrice){}
}

export class Clients{
id
projectsTbl:[]
constructor(
public firstName,
public lastName
){}

}




