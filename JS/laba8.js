class Employeer
{
    constructor(name,lastName,experience,baseSalary)
    {
        this.name=name;
        this.lastName=lastName;
      this.experience=experience;
       this.baseSalary=baseSalary;
    }
    GetSalary()
    {
        if( this.experience<5 && this.experience>=2)
        {
            this.earn=(this.baseSalary+200);
        }
        else if(this.experience>=5) 
      {
        this.earn=((this.baseSalary*1.2)+500);
      }
     
    }
}


class Departtament 
{
    constructor(params)
    {
        this.name= params.name;
       this.earn=params.earn;
    }

     givesalary()
    {
            console.log(   this.name+ " got "  +this.earn +" salary");
         
      }
      
      }
       
    
    
class Develop extends Employeer
{
    constructor( name,lastName,experience,baseSalary,count)
  {
      super(name,lastName,experience,baseSalary); 
  }
 return;
}
 class Design extends Employeer
 {
  
  constructor( name,lastName,experience,baseSalary,effcoef)
  {
      super(name,lastName,experience,baseSalary);
      this.effcoef=effcoef;
  }
GetSalary()
{
    if( this.experience<5 && this.experience>=2)
        {
            this.earn=(this.baseSalary+200)*this.effcoef;
        }
        else if(this.experience>=5)
      {
        this.earn=((this.baseSalary*1.2)+500)*this.effcoef;
    }
}   
 return;
 
}
class Managers extends Employeer
{
    constructor( name,lastName,experience,baseSalary,team,count)
  {
      super(name,lastName,experience,baseSalary);
    this.team= team;
    this.count=count;
  }
  
    GetSalary()
    {
         
        if (this.team.lenght >= 10 && this.experience<5 && this.experience>=2) {
            this.earn =(this.baseSalary+200) + 300; } 
        else if (this.team.lenght>= 5 && this.experience<5 && this.experience>=2) {
            this.earn(this.baseSalary+200) + 200;}
        else if(this.team.lenght >= 10  &&this.experience>=5 )
        {
            this.earn=((this.baseSalary*1.2)+500) + 300; }
        else{
            this.earn=((this.baseSalary*1.2)+500) + 200; }
     
       if (this.count > (this.team.lenght / 2)) {
           this.earn =  this.earn* 1.1;
        }
    }
    return;
}

function main(){



    const person= new Develop("Oleksandr","Rubluk",6,1500);
        person.GetSalary();   
     const  person2= new Develop("Oleksandra","Tkachenko",8,1500);
        person2.GetSalary();
      const  person3= new Develop("Nasti","Yanovych",4,1500);
        person3.GetSalary();  
      const person4= new Design("Pavlo","Muzychuk ", 10,1500,0.5);
        person4.GetSalary();
        const  person5= new Design("Roma","Shapovalov ", 7,1500,0.2);
        person5.GetSalary();
         const person6= new Managers("Vlad","Sydoruk ", 8,1500,[person,person2,person3,person4,person5],3);
        person6.GetSalary();
        var mas=[person,person2,person3,person4,person5,person6];
        for(let i=0;i<mas.length;i++)
        {
            const dep=new Departtament(mas[i]);
            dep.givesalary();
        }   
    }
    main();
    