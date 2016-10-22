var bio = {
    "name": "Aayush Arora",
    "role": "Frontend developer",
    "contacts": {
        "mobile": "9971860311",
        "email": "aayush113002@gmail.com",
        "github": "https://github.com/aayusharora",
        "twitter": "https://twitter.com/angularboy",
        "location": "Noida"
    },
    "welcomeMessage": "Hey there! Welcome to the site",
    "skills": ["HTML5", "CSS3","AngularJS","JS", "NodeJS", "ExpressJS","SASS", "Gulp/Grunt", "Handlebars"],
    "biopic": "https://avatars1.githubusercontent.com/u/12194719?v=3&u=f65aab52226b33abe59c5e5eaffd3e83a3649b04&s=140",
    "display": "",
    "contactHeader": ""
};

var education = {
    "schools": [
        {
            "name" : "Kendriya Vidyalaya",
            "location": "Muzaffarnagar",
            "degree": "Senior Secondary School",
            "majors": ["Maths", "Physics" ,"Chemistry","P.ED","English"],
            "dates": "April 2012 - April 2013",
            "url": ""
        },
        {
            "name" : "JSS Academy Of Technical Education",
            "location": "Noida",
            "degree": "B.Tech",
            "majors": ["DataStructures", "Database Management Systems","Networking"],
            "dates": "April 2013 - April 2017",
            "url": ""
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Introduction to Web development",
            "school": "edx",
            "dates": "March 20, 2015",
            "url": ""
        },

        {
            "title" : "Frontend Dev",
            "school": "Coursera",
            "dates": "June 19, 2015",
            "url": ""
        }

    ],
    "display": ""

};

var work = {
        "jobs": [
            {
                "employer": "Siftr",
                "title": "Frontend Developer",
                "location": "Noida, India",
                "dates": "23 Feb 2015 - 30 Aug 2015",
                "description": " Worked as a frontend developer, applied new technologies in development like Angular JS and NodeJS "
            },
            {
                "employer": "FOSSASIA",
                "title": "Frontend developer",
                "location": "Singapore",
                "dates": "23 Jun 2016 - 30 Aug 2016",
                "description": " Worked as a frontend developer, applied technologies in development like NodeJS, handlebars etc."
            }

        ],
    "display": "",
    "googleMaps": " "
};

var projects = {
    "projects": [
        {
            "title":"Open-event Webapp",
            "dates": "23 Jun 2016 - 30 Aug 2016",
            "description": " A platform to generate web applications for " +
            "conferences and meetups by providing data in form of REST API " +
            "and JSON  ",
            "images": [
                "","","",""
            ]
        },
        {
            "title":"Hospital",
            "dates": "23 Mar 2015",
            "description": " An Inter College Hackathon winning project ",
            "images": [
                "","","",""
            ]
        }

        ],
    "display": ""
};

bio.display = function() {
    //console.log(HTMLheaderName);
    //console.log(bio.name);

    var modheaderName = HTMLheaderName.replace("%data%", bio.name),
        modheaderRole = HTMLheaderRole.replace("%data%", bio.role),
        modbiopic = HTMLbioPic.replace("%data%", bio.biopic),
        modwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),

        header = $("#header");

        bio.contactHeader($("#topContacts"));
        header.prepend( modheaderRole);
        header.prepend( modheaderName);
        header.append( modbiopic);
        header.append(modwelcomeMsg);
        header.append(HTMLskillsStart);

    bio.skills.forEach( function(skill) {

         skill = HTMLskills.replace("%data%", skill);
        $('#skills').append(skill);
    })

};

bio.contactHeader= function(contactpos) {

   //console.log(contactpos);
    //console.log(typeof (contactpos));
   var  modcontactmobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
        modcontactemail = HTMLemail.replace("%data%", bio.contacts.email),
        modcontactgithub =  HTMLgithub.replace("%data%", bio.contacts.github),
        modcontacttwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
        modcontactlocation = HTMLlocation.replace("%data%", bio.contacts.location),
        topContacts = contactpos;

    topContacts.append(modcontactmobile);
    topContacts.append(modcontactemail);
    topContacts.append(modcontactgithub);
    topContacts.append(modcontacttwitter);
    topContacts.append(modcontactlocation);
}

work.display = function () {

    $("#workExperience").append(HTMLworkStart);
    var workEntry = $(".work-entry");

    for( var job in work.jobs) {
        //console.log(work.jobs[job].employer);
        var workEmployer =  HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
            workTitle =  HTMLworkTitle.replace("%data%", work.jobs[job].title),
            workDates =  HTMLworkDates.replace("%data%", work.jobs[job].dates),
            workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description ),
            workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

            workEntry.append(workEmployer);
            workEntry.append(workTitle);
            workEntry.append(workDates);
            workEntry.append(workLocation);
            workEntry.append(workDescription);


    }
    //var workentry =  HTMLworkEmployer.replace("%data%",);
};


projects.display = function () {


    $("#projects").append(HTMLprojectStart);

    for( var project in projects.projects) {

        var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title ),
            projectDates = HTMLprojectDates .replace("%data%", projects.projects[project].dates),
            projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            projectEntry = $(".project-entry");

            projectEntry.append(projectTitle);
            projectEntry.append(projectDates);
            projectEntry.append(projectDescription);



    }

};

education.display = function () {

    $("#education").append(HTMLschoolStart);



    for( var edu in education.schools) {

        console.log(education.schools[edu]);

        var schoolName=  HTMLschoolName.replace("%data%",education.schools[edu].name),
            date  =  HTMLschoolDates.replace("%data%", education.schools[edu].dates),
            degree =  HTMLschoolDegree.replace("%data%", education.schools[edu].degree),
            location = HTMLschoolLocation.replace("%data%", education.schools[edu].location),

            educationEntry = $(".education-entry");

        educationEntry.append(schoolName);
        educationEntry.append(date);
        educationEntry.append(degree);
        educationEntry.append(location);

        education.schools[edu].majors.forEach(function(major){
            //console.log(major);
            var majorsub = HTMLschoolMajor.replace("%data%", major);
            educationEntry.append(majorsub);
        });
    }

    educationEntry.append(HTMLonlineClasses);

    for( var edu in education.onlineCourses) {

        var onlineTitle= HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title),
            onlineSchool=   HTMLonlineSchool.replace("%data%", education.onlineCourses[edu].school),
            onlineDates= HTMLonlineDates.replace("%data%", education.onlineCourses[edu].dates);
            url= HTMLonlineURL.replace("%data%", education.onlineCourses[edu].url);

        educationEntry.append(onlineTitle);
        educationEntry.append(onlineSchool);
        educationEntry.append(onlineDates);
        educationEntry.append(url);

    }

};

work.googleMaps = function() {
    $("#mapDiv").append(googleMap);
};


bio.display();
work.display();
projects.display();
education.display();
bio.contactHeader($("#footerContacts"));
work.googleMaps();