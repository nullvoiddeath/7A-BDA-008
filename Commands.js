show dbs
use College
db.createCollection('Student')
db.createCollection('Faculty')
db.createCollection('Admission')
db.createCollection('COE')
db.createCollection('Library')
db.createCollection('CollegeFestival')

db.Student.insert({_id:1,StudName:'NullVoid', Year:'4th', Branch:'CSE', Interest:'Hacking', CGPA:9.0});
db.Student.insert({_id:2,StudName:'Void', Year:'3rd', Branch:'ISE', Interest:'Recon', CGPA:7.0});
db.Student.insert({_id:3,StudName:'VoidVoid', Year:'2nd', Branch:'ME', Interest:'Enum', CGPA:8.0});
db.Student.insert({_id:4,StudName:'NullNull', Year:'1st', Branch:'TE', Interest:'Exploit', CGPA:6.0});

db.Faculty.insert({_id:1,FacName:'Mubix', Exp:'7 years', Sub:'Social Engg', Dept:'CSE', Sal:'5600'});
db.Faculty.insert({_id:2,FacName:'Naham', Exp:'8 years', Sub:'Web Exp', Dept:'CSE', Sal:'6600'});
db.Faculty.insert({_id:3,FacName:'Tom', Exp:'9 years', Sub:'Tool Dev', Dept:'CSE', Sal:'7600'});
db.Faculty.insert({_id:4,FacName:'Aditya', Exp:'10 years', Sub:'App Dev', Dept:'CSE', Sal:'8600'});

db.COE.insert({_id:1, Div:'East', DivHead:'Ray', Location:'Bangalore', EmpAmnt:'20', Code:'1234'});
db.COE.insert({_id:2, Div:'West', DivHead:'Ray', Location:'Bangalore', EmpAmnt:'20', Code:'1234'});
db.COE.insert({_id:3, Div:'South', DivHead:'Ray', Location:'Bangalore', EmpAmnt:'20', Code:'1234'});
db.COE.insert({_id:4, Div:'North', DivHead:'Ray', Location:'Bangalore', EmpAmnt:'20', Code:'1234'});

db.Admission.insert({_id:1, Admin:'Victor', Location:'Bangalore', Block:'1E', StudYear: '1st', Spec:'Scholarship'})
db.Admission.insert({_id:2, Admin:'Charlie', Location:'Manglur', Block:'2E', StudYear: '2nd', Spec:'Admission'})
db.Admission.insert({_id:3, Admin:'Alpha', Location:'K R Market', Block:'3E', StudYear: '3rd', Spec:'Expulsion'})
db.Admission.insert({_id:4, Admin:'Omega', Location:'HMHalli', Block:'4E', StudYear: '4th', Spec:'None'})

db.Library.insert({_id:1,StudName:'NullVoid', Year:'4th', Branch:'CSE', Interest:'Hacking', LibNo:'12345'});
db.Library.insert({_id:2,StudName:'Aakash', Year:'3rd', Branch:'ISE', Interest:'Web Dev', LibNo:'12346'});
db.Library.insert({_id:3,StudName:'Aditya', Year:'2nd', Branch:'ME', Interest:'Chess', LibNo:'12347'});
db.Library.insert({_id:4,StudName:'Ayush', Year:'1st', Branch:'TE', Interest:'Marketing', LibNo:'12348'});

db.CollegeFestival.insert({_id:1, FestName:'TechFest', Month:'January', Attendance:'2k', Location:'TechFest Ground', Org:'Nokia'});
db.CollegeFestival.insert({_id:2, FestName:'CultFest', Month:'February', Attendance:'3k', Location:'CultFest Ground', Org:'Hadoop'});
db.CollegeFestival.insert({_id:3, FestName:'SportsFest', Month:'March', Attendance:'4k', Location:'SportsFest Ground', Org:'Nike'});
db.CollegeFestival.insert({_id:4, FestName:'HackFest', Month:'April', Attendance:'5k', Location:'HackFest Ground', Org:'Hacker1'});

db.Student.find({StudName:'Void'}).pretty()
db.Faculty.find({FacName:'Mubix'}).pretty()
db.COE.find({Div:'East'}).pretty()
db.Admission.find({Admin:'Omega'}).pretty()
db.Library.find({Interest:'Hacking'}).pretty()
db.CollegeFestival.find({Month:'April'}).pretty()