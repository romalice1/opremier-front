import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  	constructor() { }

  	// Today
  	today(){
  		let today = new Date()
        var dd:any = today.getDate();
        var mm:any = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+ dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        return dd+'/'+mm+'/'+yyyy;
  	}

  	// Yesterday
  	yesterday(){
  		let today = new Date();
  		var dd:any = today.getDate() - 1; // Yesterday
        var mm:any = today.getMonth()+1; //January is 0!

        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+ dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 
        return dd+'/'+mm+'/'+yyyy;
  	}

  	// Last week
  	lastWeek(){
  		let week={
  			start: '',
  			end: ''
  		}
  		var today =  new Date()
  		var curr = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7); // get current date
		var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
		var last = first + 6; // last day is the first day + 6
		
		var startDate:any = new Date(curr.setDate(first));
		startDate = "" + startDate.getDate() + "/" + (startDate.getMonth()+1) + "/" + startDate.getFullYear();
		
		var endDate:any = new Date(curr.setDate(last));
		endDate = "" + (endDate.getDate()) + "/" + (endDate.getMonth()+1) + "/" + endDate.getFullYear();
  		
  		week.start = startDate;
  		week.end = endDate;

		return week;
  	}

  	// Last month
  	lastMonth(){
  		//Get days in a month
  		function daysInMonth(m, y) { // m is 0 indexed: 0-11
            switch (m-1) {
                case 1 :
                    return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
                case 8 : case 3 : case 5 : case 10 :
                    return 30;
                default :
                    return 31
            }
        }

  		let month={
  			start: '',
  			end: ''
  		}

  		let today = new Date()
        var dd:any = today.getDate();
        var mm:any = today.getMonth()+1; //January is 0!

        //Check if this month is January, then set it to december
        if( mm == 1){
        	mm = 12;
        }
        
        mm = mm -1; // Set the month to last month

        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+ dd;
        } 
        if(mm<10){
            mm='0'+mm;
        } 

        month.start = '01'+'/'+mm+'/'+yyyy;
        month.end = daysInMonth(mm,yyyy)+'/'+mm+'/'+yyyy;
        
        return month;
  	}

  	// Last year
  	lastYear(){
  		let year={
  			start: '',
  			end: ''
  		}

  		let today = new Date();
  		
  		var yyy = today.getFullYear() - 1; //Current year - 1 to get last year

  		year.start = '01/01/'+yyy;
  		year.end = '31/12/'+yyy;

  		return year;
  	}



    //change date format from mm/dd/yyyy to dd/mm/yyyy
    dateFormater(date:string){
        let splitted = date.split("-")
        return splitted[2]+"/"+splitted[1]+"/"+splitted[0]
    }
}
