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
    "biopic": "https://avatars1.githubusercontent.com/u/12194719?v=3&u=f65aab52226b33abe59c5e5eaffd3e83a3649b04&s=140"

};

var education = {
    "schools": [
        {
            "name" : "Kendriya Vidyalaya",
            "location": "Muzaffarnagar",
            "degree": "Senior Secondary School",
            "majors": ["Maths", "Physics" ,"Chemistry","P.ED","English"],
            "dates": "April 2012 - April 2013",
            "url": "http://kvmuzaffarnagar.edu.in/news.php"
        },
        {
            "name" : "JSS Academy Of Technical Education",
            "location": "Noida",
            "degree": "B.Tech",
            "majors": ["DataStructures", "Database Management Systems","Networking"],
            "dates": "April 2013 - April 2017",
            "url": "http://www.jssaten.ac.in/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Introduction to Web development",
            "school": "edx",
            "dates": "March 20, 2015",
            "url": "https://www.edx.org/micromasters/michiganx-user-experience-ux-research-and-design"
        },

        {
            "title" : "Frontend Dev",
            "school": "Coursera",
            "dates": "June 19, 2015",
            "url": "https://www.edx.org/micromasters/michiganx-user-experience-ux-research-and-design"
        }

    ]

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

        ]
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
                "images/12.png",""
            ]
        },
        {
            "title":"Hospital",
            "dates": "23 Mar 2015",
            "description": " An Inter College Hackathon winning project ",
            "images": [
                "images/6.png"
            ]
        }

        ]
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
        bio.contactHeader($("#footerContacts"));
        header.prepend( modheaderRole);
        header.prepend(modheaderName);
        header.append( modbiopic);
        header.append(modwelcomeMsg);
        header.append(HTMLskillsStart);

    bio.skills.forEach( function(skill) {

         skill = HTMLskills.replace("%data%", skill);
        $('#skills').append(skill);
    });

};

bio.contactHeader= function(contactpos) {


   var  modcontactmobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
        modcontactemail = HTMLemail.replace("%data%", bio.contacts.email),
        modcontactgithub =  HTMLgithub.replace("%data%", bio.contacts.github),
        modcontacttwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
        modcontactlocation = HTMLlocation.replace("%data%", bio.contacts.location),
        topContacts = contactpos;

    topContacts.append(modcontactmobile, modcontactemail, modcontactgithub, modcontacttwitter, modcontactlocation);

};

work.googleMaps = function() {

    $("#mapDiv").append(googleMap);

};

work.display = function () {

    $("#workExperience").append(HTMLworkStart);
    var workEntry = $(".work-entry");

    work.jobs.forEach(function(job) {
        //console.log(job.employer);
        var workEmployer =  HTMLworkEmployer.replace("%data%", job.employer),
            workTitle =  HTMLworkTitle.replace("%data%", job.title),
            workDates =  HTMLworkDates.replace("%data%", job.dates),
            workDescription = HTMLworkDescription.replace("%data%", job.description ),
            workLocation = HTMLworkLocation.replace("%data%", job.location);

            workEntry.append(workEmployer, workTitle, workDates, workLocation, workDescription);

    });

    work.googleMaps();
    //var workentry =  HTMLworkEmployer.replace("%data%",);
};


projects.display = function () {


    $("#projects").append(HTMLprojectStart);

    projects.projects.forEach(function(project) {

        var projectTitle = HTMLprojectTitle.replace("%data%", project.title ),
            projectDates = HTMLprojectDates .replace("%data%", project.dates),
            projectDescription = HTMLprojectDescription.replace("%data%", project.description),
            projectEntry = $(".project-entry");

        projectEntry.append(projectTitle, projectDates, projectDescription);

        project.images.forEach(function(image) {
            var imageContent = HTMLprojectImage.replace("%data%", image);
            projectEntry.append(imageContent);
        });

    });

};

education.display = function () {

    $("#education").append(HTMLschoolStart);
    var educationEntry = $(".education-entry");

    education.schools.forEach(function (edu) {

        console.log(edu.url);
        HTMLschoolName.split(" ");
        console.log(HTMLschoolName);
        var schoolName=  HTMLschoolName.replace("%data%",edu.name),
            date  =  HTMLschoolDates.replace("%data%", edu.dates),
            degree =  HTMLschoolDegree.replace("%data%", edu.degree),
            location = HTMLschoolLocation.replace("%data%", edu.location);

        educationEntry.append(schoolName, date, degree, location);

        edu.majors.forEach(function(major){
            //console.log(major);
            var majorsub = HTMLschoolMajor.replace("%data%", major);
            educationEntry.append(majorsub);
        });
    });

    educationEntry.append(HTMLonlineClasses);

    education.onlineCourses.forEach (function(edu) {

        var onlineTitle= HTMLonlineTitle.replace("%data%", edu.title),
            onlineSchool=   HTMLonlineSchool.replace("%data%", edu.school),
            onlineDates= HTMLonlineDates.replace("%data%", edu.dates);
            url= HTMLonlineURL.replace("%data%", edu.url);

        educationEntry.append(onlineTitle, onlineSchool, onlineDates, url);

    });

};


bio.display();
work.display();
projects.display();
education.display();

